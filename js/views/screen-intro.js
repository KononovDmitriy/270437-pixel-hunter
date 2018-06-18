import footer from './screen-footer.js';
import AbstractView from './abstract-view.js';

class ScreenIntro extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>
      ${footer}`;
  }

  bind(screenElement) {
    screenElement.querySelector(`.intro__asterisk`).addEventListener(
        `click`, () => {
          this.introCallback();
        });
  }

  introCallback() {}
}

const screenIntro = new ScreenIntro();

export default (callback) => {
  screenIntro.introCallback = () => {
    callback();
  };
  const element = screenIntro.element();
  return element;
};
