import AbstractPresenter from './abstract-presenter.js';
import ModalErrorView from './../views/modal-error-view.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor() {
    super(new ModalErrorView());
  }
}
