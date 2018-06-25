import RulesView from './../views/rules-view.js';
import application from './../application.js';

export default class RulesPresenter {
  constructor() {
    this._view = new RulesView();

    this._view.rulesCallback = () => {
      application.initGame(true);
      application.showGame(true);
    };
  }

  get element() {
    return this._view.element();
  }
}
