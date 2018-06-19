import main from '../main.js';
import AbstractView from './abstract-view.js';

class ScreenHeaderGame extends AbstractView {
  constructor(gameStatus) {
    super();
    this._gameStatus = gameStatus;
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
        <img src="${this.lives[0]}" class="game__heart" alt="Life" width="32" height="32">
        <img src="${this.lives[1]}" class="game__heart" alt="Life" width="32" height="32">
        <img src="${this.lives[2]}" class="game__heart" alt="Life" width="32" height="32">
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

  element(footer, header) {
    if (!this._element) {
      let currentLives = this._gameStatus.lives;
      this.lives = [];

      for (let i = 0; i < 3; i++) {
        this.lives.unshift((currentLives > 0) ? `img/heart__full.svg` : `img/heart__empty.svg`);
        currentLives--;
      }

      this._element = this.render(footer, header);
      this.bind(this._element);
    }

    return this._element;
  }
}

export default (gameStatus) => {
  const screenHeaderGame = new ScreenHeaderGame(gameStatus);

  screenHeaderGame.screenHeaderCallback = () => {
    main.changeGreetengScreen();
  };

  return screenHeaderGame.element();
};
