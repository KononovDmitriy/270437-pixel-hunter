import AbstractView from './abstract-view.js';

export default class AbstractScreenGame extends AbstractView {
  constructor() {
    super();
  }

  element(gameStatus, statisticsBar, footerElement, headerElement) {
    this._gameStatus = gameStatus;
    this._statisticsBar = statisticsBar;

    const element = this.render(footerElement, headerElement);
    this.bind(element);

    return element;
  }
}
