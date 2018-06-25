import AbstractView from './abstract-view.js';

export default class ScreenStats extends AbstractView {
  constructor(result, statisticsBar) {
    super();
    this._result = result;
    this._statisticsBar = statisticsBar;

    console.dir(this._result);
  }

  get template() {
    return `
      <div class="result">
        <h1>${(this._result !== -1) ? `Победа!` : `Поражение!`}</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">
              ${this._statisticsBar}
            </td>
              ${(this._result !== -1) ? `
                <td class="result__points">×&nbsp;100</td>
                <td class="result__total">${this._result.answer.answSum}</td>` : `
                <td class="result__points"></td>
                <td class="result__total  result__total--final">fail</td>`}
          </tr>
          ${(this._result !== -1 && this._result.fast.fastCnt > 0) ? `
            <tr>
            <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${this._result.fast.fastCnt}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${this._result.fast.fastSum}</td>
            </tr>` : ``}
          ${(this._result !== -1 && this._result.lives.livesCnt > 0) ? `
            <tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${this._result.lives.livesCnt}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${this._result.lives.livesSum}</td>
            </tr>` : ``}
          ${(this._result !== -1 && this._result.slow.slowCnt > 0) ? `
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${this._result.slow.slowCnt}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${this._result.slow.slowSum}</td>
            </tr>` : ``}
          ${(this._result !== -1) ? `
            <tr>
              <td colspan="5" class="result__total  result__total--final">${this._result.scores}</td>
            </tr>` : ``}
        </table>
        <table class="result__table">
          <tr>
            <td class="result__number">2.</td>
            <td>
              <ul class="stats">
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--correct"></li>
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--wrong"></li>
              </ul>
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>
        <table class="result__table">
          <tr>
            <td class="result__number">3.</td>
            <td colspan="2">
              <ul class="stats">
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--correct"></li>
                <li class="stats__result stats__result--wrong"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--slow"></li>
                <li class="stats__result stats__result--unknown"></li>
                <li class="stats__result stats__result--fast"></li>
                <li class="stats__result stats__result--unknown"></li>
              </ul>
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">900</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">100</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">950</td>
          </tr>
        </table>
      </div>`;
  }
}
