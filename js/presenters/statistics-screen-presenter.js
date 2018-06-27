import AbstractPresenter from './abstract-presenter.js';
import StatisticsView from './../views/statistics-view.js';
import utils from './../utils.js';

export default class StatisticsPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new StatisticsView(utils.scoring(gameModel.gameStatus.scores,
        gameModel.gameStatus.lives),
    utils.statisticBar(gameModel.gameStatus.scores)));
  }
}
