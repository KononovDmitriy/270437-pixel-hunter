import AbstractScreenGame from './abstract-screen-game.js';
import utils from './../utils.js';

export default class Game2View extends AbstractScreenGame {
  constructor(gameStatus, statisticsBar) {
    super(gameStatus, statisticsBar);
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._gameStatus.currentLevel.question}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-type="${this._gameStatus.currentLevel.answers[0].type}">
            <img src="${this._gameStatus.currentLevel.answers[0].image.url}" alt="Option 1" width="304" height="455">
            <div class="debug__marker ${this.getDebugClass(this._gameStatus.debug, this._gameStatus.currentLevel.answers[0].type, utils.getQuestion(this._gameStatus.currentLevel.question))}"></div>
          </div>
          <div class="game__option  game__option--selected" data-type="${this._gameStatus.currentLevel.answers[1].type}">
            <img src="${this._gameStatus.currentLevel.answers[1].image.url}" alt="Option 1" width="304" height="455">
            <div class="debug__marker ${this.getDebugClass(this._gameStatus.debug, this._gameStatus.currentLevel.answers[1].type, utils.getQuestion(this._gameStatus.currentLevel.question))}"></div>
          </div>
          <div class="game__option" data-type="${this._gameStatus.currentLevel.answers[2].type}">
            <img src="${this._gameStatus.currentLevel.answers[2].image.url}" alt="Option 1" width="304" height="455">
            <div class="debug__marker ${this.getDebugClass(this._gameStatus.debug, this._gameStatus.currentLevel.answers[2].type, utils.getQuestion(this._gameStatus.currentLevel.question))}"></div>
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
      image1: element.dataset.type
    };
  }

  bind(screenElement) {
    screenElement.querySelector(`.game__content`).addEventListener(`click`, (evt) => {
      this.callback(this._getResult(evt));
    });
  }

  callback() {}
}
