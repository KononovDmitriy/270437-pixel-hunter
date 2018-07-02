import AbstractView from './abstract-view.js';

export default class Game1View extends AbstractView {
  constructor(gameStatus, statisticsBar) {
    super();
    this._gameStatus = gameStatus;
    this._statisticsBar = statisticsBar;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._gameStatus.currentLevel.question}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${this._gameStatus.currentLevel.answers[0].image.url}" alt="Option 1" width="468" height="458">
            }
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${this._gameStatus.currentLevel.answers[1].image.url}" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        <div class="stats">
          ${this._statisticsBar}
        </div>
      </div>`;
  }

  _checkGroup(inputGrp) {
    let groupCheck = false;

    for (let input of inputGrp) {
      if (input.checked) {
        groupCheck = true;
        break;
      }
    }

    return groupCheck;
  }

  _checkResult(inputGroup1, inputGroup2) {
    const checkGroup1 = this._checkGroup(inputGroup1);
    const checkGroup2 = this._checkGroup(inputGroup2);

    return (checkGroup1 && checkGroup2) ? true : false;
  }

  _getResult(inputGroup1, inputGroup2) {
    const answer = {
      image1: null,
      image2: null
    };

    for (let input of inputGroup1) {
      if (input.checked) {
        answer.image1 = input.value;
      }
    }

    for (let input of inputGroup2) {
      if (input.checked) {
        answer.image2 = input.value;
      }
    }

    return answer;
  }

  bind(screenElement) {
    const inputGroup1 = screenElement.querySelectorAll(`input[name="question1"]`);
    const inputGroup2 = screenElement.querySelectorAll(`input[name="question2"]`);

    screenElement.querySelector(`.game__content`).
      addEventListener(`change`, () => {
        if (this._checkResult(inputGroup1, inputGroup2)) {
          this.callback(this._getResult(inputGroup1, inputGroup2));
        }
      });
  }

  callback() {}
}
