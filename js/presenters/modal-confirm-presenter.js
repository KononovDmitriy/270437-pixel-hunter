import AbstractPresenter from './abstract-presenter.js';
import ModalConfirmView from './../views/modal-confirm-view.js';
import application from './../application.js';

export default class ModalConfirmPresenter extends AbstractPresenter {
  constructor() {
    super(new ModalConfirmView());

    this._view.viewОкCallback = () => {
      this.modalOkCallback();
    };

    this._view.viewCancelCallback = () => {
      this.modalCancelCallback();
    };
  }

  modalOkCallback() {
    application.showGreeting();
  }

  modalCancelCallback() {
    let element = this._view.element();

    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}
