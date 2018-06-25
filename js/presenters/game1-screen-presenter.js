import Game1View from './../views/game1-view.js';
import application from './../application.js';

import utils from './../utils.js';

export default class Game1Presenter {
  constructor(gameModel) {
    this._gameModel = gameModel;

    this._game1View = new Game1View(gameModel.gameStatus,
        utils.statisticBar(gameModel.gameStatus.scores));

    this._game1View.game1Callback = (answer) => {
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
    return this._game1View.element();
  }
}
