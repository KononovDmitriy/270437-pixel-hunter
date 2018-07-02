import AbstractPresenter from './abstract-presenter.js';
import Game2View from './../views/game2-view.js';
import application from './../application.js';

import utils from './../utils.js';

export default class Game2ScreenPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new Game2View(gameModel.gameStatus,
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
