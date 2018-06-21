import AbstractScreenGame from './abstract-screen-game.js';

import header from './screen-header-game.js';
import footer from './screen-footer.js';

class ScreenGame3 extends AbstractScreenGame {
  constructor(gameStatus, scores) {
    super(gameStatus, scores);
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._gameStatus.currLevel.data.title}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-name="img1">
            <img src="${this._gameStatus.currLevel.data.img1}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected" data-name="img2">
            <img src="${this._gameStatus.currLevel.data.img2}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option" data-name="img3">
            <img src="${this._gameStatus.currLevel.data.img3}" alt="Option 1" width="304" height="455">
          </div>
        </form>
        <div class="stats">
          ${this._statisticsBar}
        </div>
      </div>`;
  }

  _getResult(evt) {
    const element = (evt.target.dataset.name) ? evt.target : evt.target.parentNode;
    return {
      img1: element.dataset.name
    };
  }

  bind(screenElement) {
    screenElement.querySelector(`.game__content`).addEventListener(`click`, (evt) => {
      this.screenGameCallback(this._getResult(evt));
    });
  }

  screenGameCallback() {}
}

const screenGame3 = new ScreenGame3();

export default (gameStatus, statisticsBar, callback) => {
  screenGame3.screenGameCallback = callback;

  return screenGame3.element(gameStatus, statisticsBar, footer(),
      header(gameStatus.lives));
};
