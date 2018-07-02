import AbstractView from './abstract-view.js';

export default class ModalConfirmView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <form class="modal-confirm__inner">
        <button name="exit_button" class="modal-confirm__close" type="button">Закрыть</button>
        <h2 class="modal-confirm__title">Подтверждение</h2>
        <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
        <div class="modal-confirm__btn-wrap">
          <button name="ok_button" class="modal-confirm__btn">Ок</button>
          <button name="cancel_button" class="modal-confirm__btn">Отмена</button>
        </div>
      </form>`;
  }

  render() {
    const element = document.createElement(`section`);

    element.classList.add(`modal-confirm`);
    element.classList.add(`modal-confirm__wrap`);

    element.innerHTML = this.template;

    return element;
  }

  bind(screenElement) {
    screenElement.querySelector(`form`).
      addEventListener(`click`, (evt) => {
        evt.preventDefault();

        switch (evt.target.name) {
          case `ok_button`:
            this.onButtonOkClick();
            break;
          case `cancel_button`:
            this.onButtonCancelClick();
            break;
          case `exit_button`:
            this.onButtonCancelClick();
            break;
        }
      });
  }

  onButtonOkClick() {}
  onButtonCancelClick() {}
}
