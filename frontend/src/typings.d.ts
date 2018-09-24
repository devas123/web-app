/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


declare namespace JQuery.transition {
  interface TransitionStatic {
    (type: string, options?: any): any;
  }
}

declare namespace JQuery.modal {
  interface ModalStatic {
    (type: string, options?: any): any;
  }
}


declare namespace JQuery.croppie {
  interface CroppieStatic {
    (type: string, options?: any): any;
  }
}

interface JQuery {
  transition: JQuery.transition.TransitionStatic;
  modal: JQuery.modal.ModalStatic;
  croppie: JQuery.croppie.CroppieStatic;
}


