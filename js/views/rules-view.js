import AbstractView from './abstract-view.js';

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div id="main" class="rules">
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

          <label class="debug"><input id="debug" type="checkbox"> Отладка (будут показываться правильные ответы)</label>
        </form>
      </div>`;
  }

  bind(screenElement) {
    const continueBtn = screenElement.querySelector(`.rules__button`);
    const inputElement = screenElement.querySelector(`.rules__input`);
    const checkboxDebugElement = screenElement.querySelector(`#debug`);

    screenElement.querySelector(`.rules__form`).addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.callback({name: inputElement.value,
        debug: checkboxDebugElement.checked});
    });

    inputElement.addEventListener(`input`, (evt) => {
      if (evt.target.value === ``) {
        continueBtn.disabled = true;
        return false;
      }

      continueBtn.disabled = false;
      return true;
    });
  }

  callback() {
    throw new Error(`rulesCallback is required`);
  }
}
