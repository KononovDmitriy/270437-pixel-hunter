import utils from '../utils.js';
import footer from './screen-footer.js';

const SCREEN = `
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footer}`;

const screen = (callback) => {
  const screenElement = utils.createDom(SCREEN);

  screenElement.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    callback();
  });

  return screenElement;
};

export default screen;
