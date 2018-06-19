import AbstractView from './abstract-view.js';

class StatisticsBar extends AbstractView {
  constructor(scores) {
    super();

    this._StatsPictures = {
      UNKNOWN: `unknown`,
      CORRECT: `correct`,
      WRONG: `wrong`,
      FAST: `fast`,
      SLOW: `slow`
    };
    this._scores = scores;

  }

  get template() {
    return `
      <ul class="stats">
        <li class="stats__result stats__result--${this._classes[0]}"></li>
        <li class="stats__result stats__result--${this._classes[1]}"></li>
        <li class="stats__result stats__result--${this._classes[2]}"></li>
        <li class="stats__result stats__result--${this._classes[3]}"></li>
        <li class="stats__result stats__result--${this._classes[4]}"></li>
        <li class="stats__result stats__result--${this._classes[5]}"></li>
        <li class="stats__result stats__result--${this._classes[6]}"></li>
        <li class="stats__result stats__result--${this._classes[7]}"></li>
        <li class="stats__result stats__result--${this._classes[8]}"></li>
        <li class="stats__result stats__result--${this._classes[9]}"></li>
      </ul>`;
  }

  element() {
    this._classes = [];
    for (let i = 0; i < 10; i++) {
      if (this._scores[i] !== undefined) {
        if (this._scores[i].answer) {
          let currentClass = (this._scores[i].times < 10) ? this._StatsPictures.FAST :
            this._StatsPictures.CORRECT;
          currentClass = (this._scores[i].times > 20) ? this._StatsPictures.SLOW :
            this._StatsPictures.CORRECT;
          this._classes.push(currentClass);
        } else {
          this._classes.push(this._StatsPictures.WRONG);
        }
      } else {
        this._classes.push(this._StatsPictures.UNKNOWN);
      }
    }

    return this.template;
  }
}

export default (scores) => {
  const statisticsBar = new StatisticsBar(scores);
  return statisticsBar.element();
};
