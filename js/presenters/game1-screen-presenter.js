import AbstractPresenter from './abstract-presenter.js';
import Game1View from './../views/game1-view.js';
import application from './../application.js';

import utils from './../utils.js';

export default class Game1Presenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new Game1View(gameModel.gameStatus,
        utils.statisticBar(gameModel.gameStatus.scores)), gameModel);
  }

  callback(answer) {
    this._gameModel.stopTimer();
    if (!this._gameModel.nextLevel(answer)) {
      application.showStatistics();
      return false;
    }

    application.showGame();
    return true;
  }

  start() {
    this._gameModel.startTimer();
    return this._view.element();
  }
}