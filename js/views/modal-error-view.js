import AbstractView from './abstract-view.js';

export default class ModalErrorView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div class="modal-error__inner">
      <h2 class="modal-error__title">Произошла ошибка!</h2>
      <p class="modal-error__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
    </div>`;
  }

  render() {
    const element = document.createElement(`section`);

    element.classList.add(`modal-error`);
    element.classList.add(`modal-error__wrap`);

    element.innerHTML = this.template;

    return element;
  }
}
