import GameModel from './model/game-model.js';

import HeaderPresenter from './presenters/header-presenter.js';
import HeaderGame from './presenters/header-game-presenter.js';
import FooterPresenter from './presenters/footer-presenter.js';

import IntroPresenter from './presenters/intro-screen-presenter.js';
import GreetingPresenter from './presenters/greeting-screen-presenter.js';
import RulesPresenter from './presenters/rules-screen-presenter.js';
import Game1Presenter from './presenters/game1-screen-presenter.js';
import Game2Presenter from './presenters/game2-screen-presenter.js';
import Game3Presenter from './presenters/game3-screen-presenter.js';
import StaristicsPresenter from './presenters/statistics-screen-presenter.js';

import utils from './utils.js';
import Enums from './enums.js';

class Application {
  constructor() {
    this._gameModel = new GameModel();
  }

  initGame() {
    this._gameModel.initGame();
  }

  showIntro() {
    const introPresenter = new IntroPresenter();
    const footerPresenter = new FooterPresenter();

    utils.changeScreen(introPresenter.start(), footerPresenter.start());
  }

  showGreeting() {
    const greetingPresenter = new GreetingPresenter();
    const footerPresenter = new FooterPresenter();

    utils.changeScreen(greetingPresenter.start(), footerPresenter.start());
  }

  showRules() {
    const rulesPresenter = new RulesPresenter();
    const headerPresenter = new HeaderPresenter();
    const footerPresenter = new FooterPresenter();

    utils.changeScreen(rulesPresenter.start(), footerPresenter.start(),
        headerPresenter.start());
  }

  showGame() {
    const headerGamePresenter = new HeaderGame(this._gameModel);
    const footerPresenter = new FooterPresenter();

    let gamePresenter;

    switch (this._gameModel.gameStatus.currLevel.screen) {
      case Enums.GameScreens.SCREEN1:
        gamePresenter = new Game1Presenter(this._gameModel);
        break;
      case Enums.GameScreens.SCREEN2:
        gamePresenter = new Game2Presenter(this._gameModel);
        break;
      case Enums.GameScreens.SCREEN3:
        gamePresenter = new Game3Presenter(this._gameModel);
        break;
    }

    utils.changeScreen(gamePresenter.start(), footerPresenter.start(),
        headerGamePresenter.start());
  }

  showStatistics() {
    const rulesPresenter = new StaristicsPresenter(this._gameModel);
    const headerPresenter = new HeaderPresenter();
    const footerPresenter = new FooterPresenter();

    utils.changeScreen(rulesPresenter.start(), footerPresenter.start(),
        headerPresenter.start());
  }
}

const application = new Application();

export default application;
