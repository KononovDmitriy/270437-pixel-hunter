import StatisticsView from './../views/statistics-view.js';
import utils from './../utils.js';

export default class RulesPresenter {
  constructor(gameModel) {
    this._gameModel = gameModel;
    this._view = new StatisticsView(
        utils.scoring(this._gameModel.gameStatus.scores,
            this._gameModel.gameStatus.lives),
        utils.statisticBar(this._gameModel.gameStatus.scores));
  }

  get start() {
    return this._view.element();
  }
}
