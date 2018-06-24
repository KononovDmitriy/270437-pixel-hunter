import AbstractView from './abstract-view.js';

export default class ScreenHeader extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;
  }

  render() {
    const element = document.createElement(`header`);
    element.classList.add(`header`);
    element.innerHTML = this.template;

    return element;
  }

  bind(screenElement) {
    screenElement.querySelector(`button`).addEventListener(`click`, () => {
      this.screenHeaderCallback();
    });
  }

  screenHeaderCallback() {}

}
