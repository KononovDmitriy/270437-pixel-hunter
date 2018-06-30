import AbstractView from './abstract-view.js';

export default class Game2View extends AbstractView {
  constructor(gameStatus, statisticsBar) {
    super();
    this._gameStatus = gameStatus;
    this._statisticsBar = statisticsBar;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._gameStatus.currLevel.question}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-type="${this._gameStatus.currLevel.answers[0].type}">
            <img src="${this._gameStatus.currLevel.answers[0].image.url}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected" data-type="${this._gameStatus.currLevel.answers[1].type}">
            <img src="${this._gameStatus.currLevel.answers[1].image.url}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option" data-type="${this._gameStatus.currLevel.answers[2].type}">
            <img src="${this._gameStatus.currLevel.answers[2].image.url}" alt="Option 1" width="304" height="455">
          </div>
        </form>
        <div class="stats">
          ${this._statisticsBar}
        </div>
      </div>`;
  }

  _getResult(evt) {
    const element = (evt.target.dataset.type) ? evt.target : evt.target.parentNode;
    return {
      img1: element.dataset.type
    };
  }

  bind(screenElement) {
    screenElement.querySelector(`.game__content`).addEventListener(`click`, (evt) => {
      this.callback(this._getResult(evt));
    });
  }

  callback() {}
}
