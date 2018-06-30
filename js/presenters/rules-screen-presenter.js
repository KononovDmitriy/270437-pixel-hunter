import AbstractPresenter from './abstract-presenter.js';
import RulesView from './../views/rules-view.js';
import application from './../application.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new RulesView());
    this._gameModel = gameModel;
  }

  callback(name) {
    this._gameModel.initGame();
    this._gameModel.userName = name;
    application.showGame();
  }
}
