import AbstractView from './abstract-view.js';

export default class Game2View extends AbstractView {
  constructor(gameStatus, statisticsBar) {
    super();
    this._gameStatus = gameStatus;
    this._statisticsBar = statisticsBar;
  }

  get template() {
    return `<div class="game">
        <p class="game__task">Угадай, фото или рисунок?</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this._gameStatus.currLevel.data.img1.url}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        <div class="stats">
          ${this._statisticsBar}
        </div>
      </div>`;
  }

  _getResult(inputGrp1) {
    const answer = {
      img1: ``,
    };

    for (let input of inputGrp1) {
      if (input.checked) {
        answer.img1 = input.value;
      }
    }

    return answer;
  }

  bind(screenElement) {
    const inputGrp1 = screenElement.querySelectorAll(`input[name="question1"]`);
    screenElement.querySelector(`.game__content`).
      addEventListener(`change`, () => {
        this.viewCallback(this._getResult(inputGrp1));
      });
  }

  viewCallback() {}
}
