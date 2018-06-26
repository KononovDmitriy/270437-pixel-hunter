import AbstractPresenter from './abstract-presenter.js';
import IntroView from './../views/intro-view.js';
import application from './../application.js';

export default class IntroScreen extends AbstractPresenter {
  constructor() {
    super(new IntroView());
  }

  callback() {
    application.showGreeting();
  }
}
