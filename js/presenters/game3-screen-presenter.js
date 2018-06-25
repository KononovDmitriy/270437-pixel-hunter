import Game3View from './../views/game3-view.js';
import application from './../application.js';

import utils from './../utils.js';

export default class Game3Presenter {
  constructor(gameModel) {
    this._gameModel = gameModel;

    this._game3View = new Game3View(gameModel.gameStatus,
        utils.statisticBar(gameModel.gameStatus.scores));

    this._game3View.game3Callback = (answer) => {
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
    return this._game3View.element();
  }
}
