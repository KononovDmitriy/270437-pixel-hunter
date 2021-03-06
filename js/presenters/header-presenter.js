import AbstractPresenter from './abstract-presenter.js';
import HeaderView from './../views/header-view.js';
import application from './../application.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor() {
    super(new HeaderView());
  }

  callback() {
    application.showGreeting();
  }
}
