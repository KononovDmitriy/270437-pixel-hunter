import AbstractPresenter from './abstract-presenter.js';
import RulesView from './../views/rules-view.js';
import application from './../application.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor() {
    super(new RulesView());
  }

  callback() {
    application.initGame();
    application.showGame();
  }
}
