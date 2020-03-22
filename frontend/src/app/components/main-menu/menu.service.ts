import {EmbeddedViewRef, Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {IImplicitContext, SuiSidebar} from '@devas123/ng2-semantic/index';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MenuItem} from '../../commons/model/competition.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly _displaySidebar$: Observable<boolean>;

  private _menu: MenuItem[] = [];

  private _menu$ = new BehaviorSubject<MenuItem[]>([]);

  private sidebarRef: SuiSidebar;

  private embeddedViews: EmbeddedViewRef<any>[] = [];

  constructor(private observer: BreakpointObserver) {
    this._displaySidebar$ = observer.observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.Medium]).pipe(map(p => p.matches));
  }


  public set sidebar(value: SuiSidebar) {
    this.sidebarRef = value;
  }


  public get sidebar(): SuiSidebar {
    return this.sidebarRef;
  }

  public get displaySidebar$(): Observable<boolean> {
    return this._displaySidebar$;
  }

  public get menu(): MenuItem[] {
    return this._menu || [];
  }

  public set menu(value: MenuItem[]) {
    this._menu = value;
    this._menu$.next(value);
  }

  public get menu$() {
    return this._menu$;
  }

  public createView<T, U extends IImplicitContext<T>>(_viewContainer: ViewContainerRef, template: TemplateRef<U>, context: U, index?: number): EmbeddedViewRef<U> {
    if (_viewContainer && template) {
      const view = _viewContainer.createEmbeddedView<U>(template, context, index);
      this.embeddedViews.push(view);
      return view;
    }
  }

  public clear() {
    this.menu = [];
    if (this.embeddedViews) {
      this.embeddedViews.forEach(it => {
        if (it) {
          it.destroy();
        }
      });
      this.embeddedViews = [];
    }
  }
}
