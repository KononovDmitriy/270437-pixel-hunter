
import footer from './screen-footer.js';
import header from './screen-header.js';
import AbstractView from './abstract-view.js';

class ScreenRules extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
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
      </div>`;
  }

  bind(screenElement) {
    const continueBtn = screenElement.querySelector(`.rules__button`);

    screenElement.querySelector(`.rules__form`).addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.rulesCallback(evt.target[0].value);
    });

    screenElement.querySelector(`.rules__input`).addEventListener(`input`, (evt) => {
      if (evt.target.value === ``) {
        continueBtn.disabled = true;
        return false;
      }

      continueBtn.disabled = false;
      return true;
    });
  }

  rulesCallback() {
    throw new Error(`rulesCallback is required`);
  }
}

const screenRules = new ScreenRules();

export default (callback) => {
  screenRules.rulesCallback = () => {
    callback();
  };
  const element = screenRules.element(footer(), header());
  return element;
};
