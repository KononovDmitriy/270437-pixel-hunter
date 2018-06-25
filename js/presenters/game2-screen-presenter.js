import Game2View from './../views/game2-view.js';
import application from './../application.js';

import utils from './../utils.js';

export default class Game2Presenter {
  constructor(gameModel) {
    this._gameModel = gameModel;

    this._game2View = new Game2View(gameModel.gameStatus,
        utils.statisticBar(gameModel.gameStatus.scores));

    this._game2View.game2Callback = (answer) => {
      this._gameModel.stopTimer();

      if (!this._gameModel.nextLevel(answer)) {
        application.showStatistics();
        return false;
      }

      application.showGame();
      return true;
    };
  }

  start() {
    return this._game2View.element();
  }
}
