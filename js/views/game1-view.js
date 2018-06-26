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
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${this._gameStatus.currLevel.data.img1.url}" alt="Option 1" width="468" height="458">
            }
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${this._gameStatus.currLevel.data.img2.url}" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="paint">
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

  _checkResult(inputGrp1, inputGrp2) {
    const checkGroup1 = this._checkGroup(inputGrp1);
    const checkGroup2 = this._checkGroup(inputGrp2);

    return (checkGroup1 && checkGroup2) ? true : false;
  }

  _getResult(inputGrp1, inputGrp2) {
    const answer = {
      img1: ``,
      img2: ``
    };

    for (let input of inputGrp1) {
      if (input.checked) {
        answer.img1 = input.value;
      }
    }

    for (let input of inputGrp2) {
      if (input.checked) {
        answer.img2 = input.value;
      }
    }

    return answer;
  }

  bind(screenElement) {
    const inputGrp1 = screenElement.querySelectorAll(`input[name="question1"]`);
    const inputGrp2 = screenElement.querySelectorAll(`input[name="question2"]`);

    screenElement.querySelector(`.game__content`).
      addEventListener(`change`, () => {
        if (this._checkResult(inputGrp1, inputGrp2)) {
          this.viewCallback(this._getResult(inputGrp1, inputGrp2));
        }
      });
  }

  viewCallback() {}
}