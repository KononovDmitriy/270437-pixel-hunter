import main from '../main.js';
import AbstractView from './abstract-view.js';

class ScreenHeaderGame extends AbstractView {
  constructor() {
    super();

  }

  get template() {
    return `
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
  ${this._lives.map((currentValue) => {
    return currentValue;
  }).join(``)}
      </div>`;
  }

  render() {
    const element = document.createElement(`header`);
    element.classList.add(`header`);
    element.innerHTML = this.template;

    return element;
  }

  bind(screenElement) {
    screenElement.querySelector(`button`).addEventListener(`click`, () => {
      this.screenHeaderCallback();
    });
  }

  screenHeaderCallback() {}

  element(playerLives) {
    this._lives = [];

    for (let i = 0; i < 3; i++) {
      this._lives.unshift((playerLives > 0) ?
        `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">` :
        `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`);
      playerLives--;
    }

    const element = this.render();
    this.bind(element);

    return element;
  }
}

const screenHeaderGame = new ScreenHeaderGame();

export default (playerLives) => {
  screenHeaderGame.screenHeaderCallback = () => {
    main.changeGreetengScreen();
  };

  return screenHeaderGame.element(playerLives);
};
