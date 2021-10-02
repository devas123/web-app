// eslint-disable-next-line 
export interface PopupAfterOpen {
    popupOnOpen():void;
}

// eslint-disable-next-line
export interface PopupAfterClose {
    popupOnClose():void;
}

export interface IPopupLifecycle {
    popupOnOpen?():void;
    popupOnClose?():void;
}
