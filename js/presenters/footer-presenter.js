import AbstractPresenter from './abstract-presenter.js';
import FooterView from './../views/footer-view.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor() {
    super(new FooterView());
  }
}
