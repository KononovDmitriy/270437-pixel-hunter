import AbstractPresenter from './abstract-presenter.js';
import RulesView from './../views/rules-view.js';
import application from './../application.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new RulesView());
    this._gameModel = gameModel;
  }

  callback() {
    this._gameModel.initGame();
    application.showGame();
  }
}
