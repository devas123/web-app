import {ChangeDetectorRef, ElementRef, Renderer2} from '@angular/core';
import {Transition, TransitionDirection} from './transition';
import {of, Subject, Subscription} from 'rxjs';
import {pairwise, startWith, switchMap, tap, timeoutWith} from 'rxjs/operators';
import produce from 'immer';

export class TransitionController {
  private _renderer: Renderer2;

  private _element: ElementRef;

  private _changeDetector: ChangeDetectorRef;

  // Used to delay animations until we have an element to animate.
  private get _isReady(): boolean {
    return !!this._renderer && !!this._element && !!this._changeDetector;
  }

  // Sets the 'display' style when visible.
  private readonly _display: string;

  // Stores queued transitions.
  private _queueStart: Subject<Transition>;
  private _queueFinish: Subject<Transition>;
  private _animationStop: Subject<void>;

  private _subscription = new Subscription();

  private _isAnimating: boolean;

  public get isAnimating(): boolean {
    return this._isAnimating;
  }

  // Set when the element is visible, and while it is transitioning out.
  private _isVisible: boolean;

  public get isVisible(): boolean {
    return this._isVisible;
  }

  // Set when the element is hidden, and not while it is transitioning.
  private _isHidden: boolean;

  public get isHidden(): boolean {
    return this._isHidden;
  }

  constructor(isInitiallyVisible: boolean = true, display: string = 'block') {
    // isInitiallyVisible sets whether the element starts out visible.
    this._isVisible = isInitiallyVisible;
    this._isHidden = !this._isVisible;

    this._display = display;
    this._queueStart = new Subject<Transition>();
    this._queueFinish = new Subject<Transition>();
    this._animationStop = new Subject<void>();

    this._isAnimating = false;

    this._subscription.add(this.createSubscription());
  }

  createSubscription() {
    const subs = new Subscription();

    subs.add(this._queueStart.pipe(
      switchMap(tr =>
        of(tr).pipe(
          startWith(null as Transition),
          pairwise(),
          tap(([prev, trn]) => this.performTransition(prev, trn)))),
      switchMap(([, tr]) => this._animationStop.pipe(timeoutWith(tr.duration, of(tr))))
    ).subscribe(tr => tr && this._queueFinish.next(tr)));

    subs.add(this._queueFinish.pipe(
      tap(tr => this.finishTransition(tr))
    ).subscribe());
    return subs;
  }

  // Sets the renderer to be used for animating.
  public registerRenderer(renderer: Renderer2): void {
    this._renderer = renderer;
  }

  // Sets the element to perform the animations on.
  public registerElement(element: ElementRef): void {
    this._element = element;
  }

  // Sets the change detector to detect changes when using ChangeDetectionStrategy.OnPush.
  public registerChangeDetector(changeDetector: ChangeDetectorRef): void {
    this._changeDetector = changeDetector;
  }

  public animate(transition: Transition): void {
    // Test if transition is one of the list that doesn't change the visible state.
    // Should these eventually become classes?
    const isDirectionless = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce'].indexOf(transition.type) !== -1;
    if (isDirectionless) {
      transition.direction = TransitionDirection.Static;
    } else if (!transition.direction || transition.direction === TransitionDirection.Either) {
      // Set the direction to the opposite of the current visible state automatically if not set, or set to either direction.
      transition.direction = this._isVisible ? TransitionDirection.Out : TransitionDirection.In;
    }

    // Store the transition in the queue before attempting to perform it.
    this._queueStart.next(transition);
  }

  private performTransition(previous: Transition, transition: Transition): void {
    if (!this._isReady || this._isAnimating) {
      // Don't transition until we are ready, or if we are animating, or if there aren't any transitions in the queue.
      return;
    }
    this._isAnimating = true;

    const tr = produce(transition, () => {});

    if (previous) {
      // If there is an transition in the queue already, set the direction to the opposite of the direction of that transition.
      if (previous.direction === TransitionDirection.In) {
        tr.direction = TransitionDirection.Out;
      } else if (previous.direction === TransitionDirection.Out) {
        tr.direction = TransitionDirection.In;
      }
    }

    // Set the Semantic UI classes for transitioning.
    tr.classes.forEach(c => this._renderer.addClass(this._element, c));
    this._renderer.addClass(this._element, `animating`);
    this._renderer.addClass(this._element, tr.directionClass);

    // Set the Semantic UI styles for transitioning.
    this._renderer.setStyle(this._element, `animationDuration`, `${tr.duration}ms`);
    this._renderer.setStyle(this._element, `display`, this._display);

    if (tr.direction === TransitionDirection.In) {
      // Unset hidden if we are transitioning in.
      this._isHidden = false;
    }

    // Wait the length of the animation before calling the complete callback.
  }

  // Called when a transition has completed.
  private finishTransition(transition: Transition): void {
    // Unset the Semantic UI classes & styles for transitioning.
    transition.classes.forEach(c => this._renderer.removeClass(this._element, c));
    this._renderer.removeClass(this._element, `animating`);
    this._renderer.removeClass(this._element, transition.directionClass);

    this._renderer.removeStyle(this._element, `animationDuration`);
    this._renderer.removeStyle(this._element, `display`);

    if (transition.direction === TransitionDirection.In) {
      // If we have just animated in, we are now visible.
      this._isVisible = true;
    } else if (transition.direction === TransitionDirection.Out) {
      // If we have transitioned out, we should be invisible and hidden.
      this._isVisible = false;
      this._isHidden = true;
    }

    if (transition.onComplete) {
      // Call the user-defined transition callback.
      transition.onComplete();
    }

    // Delete the transition from the queue.

    this._isAnimating = false;

    this._changeDetector.markForCheck();

    // Immediately attempt to perform another transition.
  }

  // Stops the current transition, leaves the rest of the queue intact.
  public stop(): void {
    if (!this._isAnimating) {
      return;
    }
    this._animationStop.next();
  }

  // Stops the current transition, and empties the queue.
  public stopAll(): void {
    this.clearQueue();
    this.stop();
  }

  // Empties the transition queue but carries on with the current transition.
  public clearQueue(): void {
    this._subscription.unsubscribe();
    this._subscription = new Subscription();
    this._subscription.add(this.createSubscription());
  }
}
