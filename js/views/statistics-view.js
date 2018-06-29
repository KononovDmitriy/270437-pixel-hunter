import AbstractView from './abstract-view.js';

export default class ScreenStats extends AbstractView {
  constructor(result) {
    super();

    this._result = result;

    this._currNumber = ``;
    this._currScore = ``;
    this._currStatusBar = ``;
  }

  get template() {
    return `
        <h1>${(this._result[0].score !== -1) ? `Победа!` : `Поражение!`}</h1>`;
  }

  get resultTable() {
    return `
      <table class="result__table">
        <tr>
          <td class="result__number">${this._currNumber}.</td>
          <td colspan="2">
            ${this._currStatusBar}
          </td>
            ${(this._currScore !== -1) ? `
              <td class="result__points">×&nbsp;100</td>
              <td class="result__total">${this._currScore.answer.answSum}</td>` : `
              <td class="result__points"></td>
              <td class="result__total  result__total--final">fail</td>`}
        </tr>
        ${(this._currScore !== -1 && this._currScore.fast.fastCnt > 0) ? `
          <tr>
          <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${this._currScore.fast.fastCnt}&nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${this._currScore.fast.fastSum}</td>
          </tr>` : ``}
        ${(this._currScore !== -1 && this._currScore.lives.livesCnt > 0) ? `
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this._currScore.lives.livesCnt}&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${this._currScore.lives.livesSum}</td>
          </tr>` : ``}
        ${(this._currScore !== -1 && this._currScore.slow.slowCnt > 0) ? `
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this._currScore.slow.slowCnt}&nbsp;<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${this._currScore.slow.slowSum}</td>
          </tr>` : ``}
        ${(this._currScore !== -1) ? `
          <tr>
            <td colspan="5" class="result__total  result__total--final">${this._currScore.scores}</td>
          </tr>` : ``}
      </table>
    `;
  }

  render() {
    const table = this._result.map((el) => {
      this._currNumber = el.number;
      this._currScore = el.score;
      this._currStatusBar = el.statisticBar;

      return this.resultTable;
    }).join(``);

    const screen = document.createElement(`div`);
    screen.classList.add(`result`);

    screen.innerHTML = this.template;
    screen.innerHTML += table;

    return screen;
  }
}
