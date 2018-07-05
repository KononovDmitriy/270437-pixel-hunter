import AbstractPresenter from './abstract-presenter.js';
import RulesView from './../views/rules-view.js';
import application from './../application.js';

export default class RulesScreenPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new RulesView());
    this._gameModel = gameModel;
  }

  callback(gameStatusData) {
    this._gameModel.initGame();
    this._gameModel.userName = gameStatusData.name;
    this._gameModel.debug = (gameStatusData.debug) ? true : false;

    application.showGame();
  }
}
