import IntroView from './../views/intro-view.js';
import application from './../application.js';

export default class introScreen {
  constructor() {
    this._view = new IntroView();
    this._view.introCallback = () => {
      application.showGreeting();
    };
  }

  get element() {
    return this._view.element();
  }
}
