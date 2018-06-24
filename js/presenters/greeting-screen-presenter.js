import GreetingView from './../views/greeting-view.js';
import application from './../application.js';

export default class greetingPresenter {
  constructor() {
    this._view = new GreetingView();
    this._view.greetingCallback = () => {
      application.showRules();
    };
  }

  get element() {
    return this._view.element();
  }
}
