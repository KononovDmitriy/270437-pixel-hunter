import AbstractScreenGame from './abstract-screen-game.js';
import AnswersTypes from './../enums/answers-types-enum.js';

export default class Game2View extends AbstractScreenGame {
  constructor(gameStatus, statisticsBar) {
    super(gameStatus, statisticsBar);
  }

  get template() {
    return `<div class="game">
        <p class="game__task">${this._gameStatus.currentLevel.question}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this._gameStatus.currentLevel.answers[0].image.url}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
              <div class="debug__marker debug__marker-margin-top ${this.getDebugClass(this._gameStatus.debug, this._gameStatus.currentLevel.answers[0].type, AnswersTypes.PHOTO)}"></div>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="painting">
              <span>Рисунок</span>
              <div class="debug__marker debug__marker-margin-top ${this.getDebugClass(this._gameStatus.debug, this._gameStatus.currentLevel.answers[0].type, AnswersTypes.PAINTING)}"></div>
            </label>
          </div>
        </form>
        <div class="stats">
          ${this._statisticsBar}
        </div>
      </div>`;
  }

  _getResult(inputGroup) {
    const answer = {
      image1: null,
    };

    for (let input of inputGroup) {
      if (input.checked) {
        answer.image1 = input.value;
      }
    }

    return answer;
  }

  bind(screenElement) {
    const inputGroup = screenElement.querySelectorAll(`input[name="question1"]`);
    screenElement.querySelector(`.game__content`).
      addEventListener(`change`, () => {
        this.callback(this._getResult(inputGroup));
      });
  }

  callback() {}
}
