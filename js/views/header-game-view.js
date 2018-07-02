import AbstractView from './abstract-view.js';
import {MAXIMUM_NUMBERS_LIVES} from './../constants.js';
import Times from './../enums/times-enum.js';

export default class HeaderGameView extends AbstractView {
  constructor(lives) {
    super();
    this._lives = lives;
    this._timer = null;
  }

  get template() {
    return `
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      <h1 class="game__timer">30</h1>
      <div class="game__lives">
  ${this._livesArr.map((currentValue) => {
    return currentValue;
  }).join(``)}
      </div>`;
  }

  set timer(time) {
    this._timer.innerHTML = (time) ? time : 0;

    if (time <= Times.BLINKING_START && time > 0) {
      setTimeout(() => {
        this._timer.innerHTML = ``;
      }, Times.BLINKING_INTERVAL);
    }
  }

  render() {
    const element = document.createElement(`header`);
    element.classList.add(`header`);
    element.innerHTML = this.template;

    return element;
  }

  bind(screenElement) {
    screenElement.querySelector(`button`).addEventListener(`click`, () => {
      this.callback();
    });
  }

  callback() {}

  element() {
    this._livesArr = [];

    for (let i = 0; i < MAXIMUM_NUMBERS_LIVES; i++) {
      this._livesArr.unshift((this._lives > 0) ?
        `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">` :
        `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`);
      this._lives--;
    }

    const element = this.render();
    this.bind(element);

    this._timer = element.querySelector(`.game__timer`);

    return element;
  }
}
