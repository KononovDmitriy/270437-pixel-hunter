import AbstractPresenter from './abstract-presenter.js';
import ModalErrorView from './../views/modal-error-view.js';

export default class ModalErrorPresenter extends AbstractPresenter {
  constructor() {
    super(new ModalErrorView());
  }
}
