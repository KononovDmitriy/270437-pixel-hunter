import utils from '../utils.js';
import stats from './stats.js';

import footer from './screen-footer.js';
import header from './screen-header.js';

const screen = (result, answers) => {
  const answer = (result !== -1) ? `
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${result.answer.answSum}</td>` : `
    <td class="result__points"></td>
    <td class="result__total  result__total--final">fail</td>`;

  const fast = (result !== -1 && result.fast.fastCnt > 0) ?
    `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${result.fast.Cnt}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${result.fast.fastSum}</td>
      </tr>` : ``;

  const lives = (result !== -1 && result.lives.livesCnt > 0) ?
    `<tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${result.lives.livesCnt}&nbsp;<span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${result.lives.livesSum}</td>
    </tr>` : ``;

  const slow = (result !== -1 && result.slow.slowCnt > 0) ?
    `<tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${result.slow.livesCnt}&nbsp;<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${result.slow.livesSum}</td>
    </tr>` : ``;

  const total = (result !== -1) ?
    `<tr>
      <td colspan="5" class="result__total  result__total--final">${result.scores}</td>
    </tr>` : ``;

  const SCREEN = `
    <div class="result">
      <h1>${(result !== -1) ? `Победа!` : `Поражение!`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${stats(answers)}
          </td>
            ${answer}
        </tr>
        ${fast}
        ${lives}
        ${slow}
        ${total}
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
    </div>
    ${footer}`;

  return utils.createDom(SCREEN, header);
};

export default screen;
