import GameScreens from './game-screen-types.js';
import GameModel from './model/game-model.js';

import header from './presenters/header-presenter.js';
import HeaderGame from './presenters/header-game-presenter.js';
import footer from './presenters/footer-presenter.js';

import IntroScreen from './presenters/intro-screen-presenter.js';
import GreetingScreen from './presenters/greeting-screen-presenter.js';
import RulesScreen from './presenters/rules-screen-presenter.js';
import Game1Presenter from './presenters/game1-screen-presenter.js';

import utils from './utils.js';

const gameModel = new GameModel();

class Application {
  showIntro() {
    const introScreen = new IntroScreen();
    utils.changeScreen(introScreen.element, footer());
  }

  showGreeting() {
    const greetingScreen = new GreetingScreen();
    utils.changeScreen(greetingScreen.element, footer());
  }

  showRules() {
    const rulesScreen = new RulesScreen();
    utils.changeScreen(rulesScreen.element, footer(), header());
  }

  showGame(level) {
    const headerGamePresenter = new HeaderGame(gameModel);

    let gamePresenter;

    switch (gameModel.gameStatus.currLevel.screen) {
      case GameScreens.SCREEN1:
        gamePresenter = new Game1Presenter(gameModel);
        break;
    }

    utils.changeScreen(gamePresenter.start(), footer(), headerGamePresenter.start());
  }
}

const application = new Application();

export default application;
