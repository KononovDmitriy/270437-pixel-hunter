import AbstractView from './abstract-view.js';

export default class ScreenStats extends AbstractView {
  constructor(result) {
    super();

    this._result = result;

    this._currentNumber = null;
    this._currentScore = null;
    this._currentStatusBar = null;
  }

  get template() {
    return `
        <h1>${(this._result[0].score !== -1) ? `Победа!` : `Поражение!`}</h1>`;
  }

  get resultTable() {
    return `
      <table class="result__table">
        <tr>
          <td class="result__number">${this._currentNumber}.</td>
          <td colspan="2">
            ${this._currentStatusBar}
          </td>
            ${(this._currentScore !== -1) ? `
              <td class="result__points">×&nbsp;100</td>
              <td class="result__total">${this._currentScore.answer.answSum}</td>` : `
              <td class="result__points"></td>
              <td class="result__total  result__total--final">fail</td>`}
        </tr>
        ${(this._currentScore !== -1 && this._currentScore.fast.fastCnt > 0) ? `
          <tr>
          <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${this._currentScore.fast.fastCnt}&nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${this._currentScore.fast.fastSum}</td>
          </tr>` : ``}
        ${(this._currentScore !== -1 && this._currentScore.lives.livesCnt > 0) ? `
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this._currentScore.lives.livesCnt}&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${this._currentScore.lives.livesSum}</td>
          </tr>` : ``}
        ${(this._currentScore !== -1 && this._currentScore.slow.slowCnt > 0) ? `
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this._currentScore.slow.slowCnt}&nbsp;<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${this._currentScore.slow.slowSum}</td>
          </tr>` : ``}
        ${(this._currentScore !== -1) ? `
          <tr>
            <td colspan="5" class="result__total  result__total--final">${this._currentScore.scores}</td>
          </tr>` : ``}
      </table>
    `;
  }

  render() {
    const table = this._result.map((el) => {
      this._currentNumber = el.number;
      this._currentScore = el.score;
      this._currentStatusBar = el.statisticBar;

      return this.resultTable;
    }).join(``);

    const screen = document.createElement(`div`);
    screen.classList.add(`result`);

    screen.innerHTML = this.template;
    screen.innerHTML += table;

    return screen;
  }
}
