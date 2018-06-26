import AbstractPresenter from './abstract-presenter.js';
import GreetingView from './../views/greeting-view.js';
import application from './../application.js';

export default class GreetingPresenter extends AbstractPresenter {
  constructor() {
    super(new GreetingView());
  }

  callback() {
    application.showRules();
  }
}
