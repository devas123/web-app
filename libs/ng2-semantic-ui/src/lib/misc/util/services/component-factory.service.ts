import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  Injector,
  NgZone,
  Provider,
  TemplateRef,
  Type,
  ViewContainerRef
} from '@angular/core';

export interface IImplicitContext<T> {
  $implicit?: T;
}

@Injectable()
export class SuiComponentFactory {
  constructor(private _applicationRef: ApplicationRef,
              private _injector: Injector,
              private _environmentInjector: EnvironmentInjector,
              private _zone: NgZone) {
  }

  public createComponent<T>(type: Type<T>, providers: Provider[] = []): ComponentRef<T> {
    // Create an injector with the specified providers.
    const injector = Injector.create({
      providers: providers.map(p => typeof p === 'function' ? { provide: p, useClass: p } : p),
      parent: this._injector
    });

    // Create a component using the createComponent function.
    return createComponent(type, {
      environmentInjector: this._environmentInjector,
      elementInjector: injector
    });
  }

  public createView<T, U extends IImplicitContext<T>>(viewContainer: ViewContainerRef, template: TemplateRef<U>, context: U): void {
    viewContainer.createEmbeddedView<U>(template, context);
  }

  // Inserts the component into the specified view container.
  public attachToView<T>(componentRef: ComponentRef<T>, viewContainer: ViewContainerRef): void {
    viewContainer.insert(componentRef.hostView, 0);
  }

  // Inserts the component in the root application node.
  public attachToApplication<T>(componentRef: ComponentRef<T>): void {
    this._applicationRef.attachView(componentRef.hostView);
  }

  // Detaches the component from the root application node.
  public detachFromApplication<T>(componentRef: ComponentRef<T>): void {
    this._applicationRef.detachView(componentRef.hostView);
  }

  // Moves the component to the specified DOM element.
  public moveToElement<T>(componentRef: ComponentRef<T>, element: Element): void {
    element.appendChild(componentRef.location.nativeElement);
  }

  // Moves the component to the document body.
  public moveToDocumentBody<T>(componentRef: ComponentRef<T>): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.moveToElement(componentRef, document.querySelector('body')!);
  }

  public detachFromDocument<T>(componentRef: ComponentRef<T>): void {
    const element = componentRef.location.nativeElement as Element;
    // We can't use `element.remove()` due to lack of IE11 support.
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}
