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

    if (this._gameModel.nextLevel(answer)) {
      application.showGame();
    } else {
      application.showStatistics();
    }
  }

  start() {
    this._gameModel.startTimer();
    return this._view.element();
  }
}
