import utils from '../utils.js';
import footer from './screen-footer.js';
import header from './screen-header.js';

const screen = (callback) => {
  const SCREEN = `
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}`;

  const addHandlers = (scrEl) => {
    const continueBtn = scrEl.querySelector(`.rules__button`);

    scrEl.querySelector(`.rules__form`).addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      callback(evt.target[0].value);
    });

    scrEl.querySelector(`.rules__input`).addEventListener(`input`, (evt) => {
      if (evt.target.value === ``) {
        continueBtn.disabled = true;
        return false;
      }

      continueBtn.disabled = false;
      return true;
    });
  };

  const scrEl = utils.createDom(SCREEN, header);

  addHandlers(scrEl, callback);

  return scrEl;
};

export default screen;
