import AbstractView from './abstract-view.js';

export default class AbstractScreenGame extends AbstractView {
  constructor(gameStatus, statisticsBar) {
    super();
    this._gameStatus = gameStatus;
    this._statisticsBar = statisticsBar;
  }
}
