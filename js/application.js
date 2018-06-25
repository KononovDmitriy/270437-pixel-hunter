import GameScreens from './game-screen-types.js';
import GameModel from './model/game-model.js';

import header from './presenters/header-presenter.js';
import HeaderGame from './presenters/header-game-presenter.js';
import footer from './presenters/footer-presenter.js';

import IntroPresenter from './presenters/intro-screen-presenter.js';
import GreetingPresenter from './presenters/greeting-screen-presenter.js';
import RulesPresenter from './presenters/rules-screen-presenter.js';
import Game1Presenter from './presenters/game1-screen-presenter.js';
import Game2Presenter from './presenters/game2-screen-presenter.js';
import Game3Presenter from './presenters/game3-screen-presenter.js';
import StaristicsPresenter from './presenters/statistics-screen-presenter.js';

import utils from './utils.js';

const gameModel = new GameModel();

class Application {
  initGame() {
    gameModel.initGame();
  }

  showIntro() {
    const introPresenter = new IntroPresenter();
    utils.changeScreen(introPresenter.element, footer());
  }

  showGreeting() {
    const greetingPresenter = new GreetingPresenter();
    utils.changeScreen(greetingPresenter.element, footer());
  }

  showRules() {
    const rulesPresenter = new RulesPresenter();
    utils.changeScreen(rulesPresenter.element, footer(), header());
  }

  showGame() {
    const headerGamePresenter = new HeaderGame(gameModel);

    let gamePresenter;

    switch (gameModel.gameStatus.currLevel.screen) {
      case GameScreens.SCREEN1:
        gamePresenter = new Game1Presenter(gameModel);
        break;
      case GameScreens.SCREEN2:
        gamePresenter = new Game2Presenter(gameModel);
        break;
      case GameScreens.SCREEN3:
        gamePresenter = new Game3Presenter(gameModel);
        break;
    }

    utils.changeScreen(gamePresenter.start(), footer(), headerGamePresenter.start());
  }

  showStatistics() {
    const rulesPresenter = new StaristicsPresenter(gameModel);
    utils.changeScreen(rulesPresenter.start, footer(), header());
  }
}

const application = new Application();

export default application;
