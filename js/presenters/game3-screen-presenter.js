import AbstractPresenter from './abstract-presenter.js';
import Game3View from './../views/game3-view.js';
import application from './../application.js';

import utils from './../utils.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new Game3View(gameModel.gameStatus,
        utils.statisticBar(gameModel.gameStatus.scores)), gameModel);
  }

  callback(answer) {
    this._gameModel.stopTimer();

    this._gameModel.pushAnswer(answer);

    if (this._gameModel.checkGameOver()) {
      application.showStatistics();
    } else {
      this._gameModel.nextLevel();
      application.showGame();
    }
  }

  start() {
    this._gameModel.startTimer();
    return this._view.element();
  }
}
