import AbstractPresenter from './abstract-presenter.js';
import ModalConfirmView from './../views/modal-confirm-view.js';
import application from './../application.js';

export default class ModalConfirmPresenter extends AbstractPresenter {
  constructor() {
    super(new ModalConfirmView());

    this._view.onButtonOkClick = () => {
      this.onButtonOkClick();
    };

    this._view.onButtonCancelClick = () => {
      this.onButtonCancelClick();
    };
  }

  onButtonOkClick() {
    application.showGreeting();
  }

  onButtonCancelClick() {
    let element = this._view.element();

    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}
