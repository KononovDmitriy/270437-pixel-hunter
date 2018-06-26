import AbstractPresenter from './abstract-presenter.js';
import Game2View from './../views/game2-view.js';
import application from './../application.js';

import utils from './../utils.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new Game2View(gameModel.gameStatus,
        utils.statisticBar(gameModel.gameStatus.scores)), gameModel);
  }

  callback(answer) {
    this._gameModel.stopTimer();

    if (this._gameModel.nextLevel(answer)) {
      application.showGame();
    } else {
      application.showStatistics();
    }

    return true;
  }

  start() {
    this._gameModel.startTimer();
    return this._view.element();
  }
}
