import AbstractPresenter from './abstract-presenter.js';
import StatisticsView from './../views/statistics-view.js';
import utils from './../utils.js';

const getResults = (gameStatus, gameHistory) => {
  const result = [];

  gameHistory.sort((a, b) => {
    return b.date - a.date;
  });

  gameHistory.forEach((el, index) => {
    result.push({
      number: index + 1,
      score: utils.scoring(el.scores, el.lives),
      statisticBar: utils.statisticBar(el.scores)
    });
  });

  return result;
};

export default class StatisticsPresenter extends AbstractPresenter {
  constructor(gameModel, gameHistory) {
    super(new StatisticsView(getResults(gameModel.gameStatus, gameHistory)));
  }
}
