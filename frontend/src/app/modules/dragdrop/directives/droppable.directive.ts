import {Observable, Subscription, of as observableOf} from 'rxjs';

import {map} from 'rxjs/operators';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import {DropEvent} from '../shared/drop-event.model';
import {NgDragDropService} from '../services/ng-drag-drop.service';
import {DomHelper} from '../shared/dom-helper';


@Directive({
  selector: '[droppable]'
})
export class Droppable implements OnInit, OnDestroy {

  /**
   *  Event fired when Drag dragged element enters a valid drop target.
   */
  @Output() onDragEnter: EventEmitter<any> = new EventEmitter();

  /**
   * Event fired when an element is being dragged over a valid drop target
   */
  @Output() onDragOver: EventEmitter<any> = new EventEmitter();

  /**
   * Event fired when a dragged element leaves a valid drop target.
   */
  @Output() onDragLeave: EventEmitter<any> = new EventEmitter();

  /**
   * Event fired when an element is dropped on a valid drop target.
   */
  @Output() onDrop: EventEmitter<DropEvent> = new EventEmitter();

  /**
   * CSS class that is applied when a compatible draggable is being dragged over this droppable.
   */
  @Input() dragOverClass = 'drag-over-border';

  /**
   * CSS class applied on this droppable when a compatible draggable item is being dragged.
   * This can be used to visually show allowed drop zones.
   */
  @Input() dragHintClass = 'drag-hint-border';
  /**
   * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
   */
  @Input() dropScope: string | Array<string> | Function = 'default';
  dropBeforeIndex: number;
  /**
   * @private
   */
  dragStartSubscription: Subscription;
  /**
   * @private
   */
  dragEndSubscription: Subscription;
  /**
   * @private
   * Field for tracking drag state. Helps when
   * drag stop event occurs before the allowDrop()
   * can be calculated (async).
   */
  _isDragActive = false;
  /**
   * @private
   * Field for tracking if service is subscribed.
   * Avoids creating multiple subscriptions of service.
   */
  _isServiceActive = false;
  /**
   * @private
   * Function for unbinding the drag enter listener
   */
  unbindDragIndexListeners: Function[];
  /**
   * @private
   * Function for unbinding the drag enter listener
   */
  unbindDragEnterListener: Function;
  /**
   * @private
   * Function for unbinding the drag over listener
   */
  unbindDragOverListener: Function;
  /**
   * @private
   * Function for unbinding the drag leave listener
   */
  unbindDragLeaveListener: Function;

  constructor(protected el: ElementRef, private renderer: Renderer2,
              private ng2DragDropService: NgDragDropService, private zone: NgZone) {
  }

  /**
   * @private
   * Backing field for the dropEnabled property
   */
  _dropEnabled = true;

  get dropEnabled() {
    return this._dropEnabled;
  }

  /**
   * Defines if drop is enabled. `true` by default.
   */
  @Input() set dropEnabled(value: boolean) {
    this._dropEnabled = value;

    if (this._dropEnabled === true) {
      this.subscribeService();
    } else {
      this.unsubscribeService();
    }
  }

  ngOnInit() {
    if (this.dropEnabled === true) {
      this.subscribeService();
    }
  }

  ngOnDestroy() {
    this.unsubscribeService();
    this.unbindDragListeners();
  }

  dragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.onDragEnter.emit(e);
  }

  dragOver(e, result) {
    if (result) {
      DomHelper.addClass(this.el, this.dragOverClass);
      e.preventDefault();
      this.onDragOver.emit(e);
    }
  }

  dragOverInnerElement(e, result, index) {
    if (result) {
      e.preventDefault();
      this.dropBeforeIndex = index;
    }
  }

  dragLeave(e) {
    DomHelper.removeClass(this.el, this.dragOverClass);
    e.preventDefault();
    this.onDragLeave.emit(e);
  }

  @HostListener('drop', ['$event'])
  drop(e) {
    this.allowDrop().subscribe(result => {
      if (result && this._isDragActive) {
        DomHelper.removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        e.stopPropagation();
        this.ng2DragDropService.onDragEnd.next();
        this.onDrop.emit(new DropEvent(e, this.ng2DragDropService.dragData, this.dropBeforeIndex));
        this.ng2DragDropService.dragData = null;
        this.ng2DragDropService.scope = null;
        this.dropBeforeIndex = null;
      }
    });
  }

  allowDrop(): Observable<boolean> {
    let allowed: boolean | Observable<boolean> = false;

    /* tslint:disable:curly */
    /* tslint:disable:one-line */
    if (typeof this.dropScope === 'string') {
      if (typeof this.ng2DragDropService.scope === 'string')
        allowed = this.ng2DragDropService.scope === this.dropScope;
      else if (this.ng2DragDropService.scope instanceof Array)
        allowed = this.ng2DragDropService.scope.indexOf(this.dropScope) > -1;
    } else if (this.dropScope instanceof Array) {
      if (typeof this.ng2DragDropService.scope === 'string')
        allowed = this.dropScope.indexOf(this.ng2DragDropService.scope) > -1;
      else if (this.ng2DragDropService.scope instanceof Array)
        allowed = this.dropScope.filter(item => {
          return this.ng2DragDropService.scope.indexOf(item) !== -1;
        }).length > 0;
    } else if (typeof this.dropScope === 'function') {
      allowed = this.dropScope(this.ng2DragDropService.dragData);
      if (allowed instanceof Observable) {
        return allowed.pipe(map(result => result && this.dropEnabled));
      }
    }

    /* tslint:enable:curly */
    /* tslint:disable:one-line */

    return observableOf(allowed && this.dropEnabled);
  }

  subscribeService() {
    if (this._isServiceActive === true) {
      return;
    }
    this._isServiceActive = true;
    const self = this;
    this.dragStartSubscription = this.ng2DragDropService.onDragStart.subscribe(() => {
      self._isDragActive = true;
      self.allowDrop().subscribe(result => {
        if (result && self._isDragActive) {
          DomHelper.addClass(self.el, self.dragHintClass);

          self.zone.runOutsideAngular(() => {
            self.unbindDragIndexListeners = [];
            const aa = self.el.nativeElement.querySelectorAll('[draggable]') as NodeList;
            if (aa) {
              for (let i = 0; i < aa.length; i++) {
                self.unbindDragIndexListeners.push(self.renderer.listen(aa.item(i), 'dragenter', (dragEvent) => {
                  self.dragOverInnerElement(dragEvent, result, i);
                }));
              }
            }
            self.unbindDragEnterListener = self.renderer.listen(self.el.nativeElement, 'dragenter', (dragEvent) => {
              self.dragEnter(dragEvent);
            });
            self.unbindDragOverListener = self.renderer.listen(self.el.nativeElement, 'dragover', (dragEvent) => {
              self.dragOver(dragEvent, result);
            });
            self.unbindDragLeaveListener = self.renderer.listen(self.el.nativeElement, 'dragleave', (dragEvent) => {
              self.dragLeave(dragEvent);
            });
          });
        }
      });
    });

    this.dragEndSubscription = this.ng2DragDropService.onDragEnd.subscribe(() => {
      this._isDragActive = false;
      DomHelper.removeClass(this.el, this.dragHintClass);
      this.unbindDragListeners();
    });
  }

  unsubscribeService() {
    this._isServiceActive = false;
    if (this.dragStartSubscription) {
      this.dragStartSubscription.unsubscribe();
    }
    if (this.dragEndSubscription) {
      this.dragEndSubscription.unsubscribe();
    }
  }

  unbindDragListeners() {
    if (this.unbindDragEnterListener) {
      this.unbindDragEnterListener();
    }
    if (this.unbindDragOverListener) {
      this.unbindDragOverListener();
    }
    if (this.unbindDragLeaveListener) {
      this.unbindDragLeaveListener();
    }
    if (this.unbindDragIndexListeners && this.unbindDragIndexListeners.length > 0) {
      this.unbindDragIndexListeners.forEach(l => l());
    }
  }
}
