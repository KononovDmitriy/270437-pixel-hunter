import GameModel from './model/game-model.js';

import HeaderScreenPresenter from './presenters/header-presenter.js';
import HeaderGamePresenter from './presenters/header-game-presenter.js';
import FooterPresenter from './presenters/footer-presenter.js';

import IntroPresenter from './presenters/intro-screen-presenter.js';
import GreetingPresenter from './presenters/greeting-screen-presenter.js';
import RulesPresenter from './presenters/rules-screen-presenter.js';
import Game1Presenter from './presenters/game1-screen-presenter.js';
import Game2Presenter from './presenters/game2-screen-presenter.js';
import Game3Presenter from './presenters/game3-screen-presenter.js';
import StaristicsPresenter from './presenters/statistics-screen-presenter.js';

import utils from './utils.js';
import Loader from './loader.js';
import GameScreens from './enums/game-screens-enum.js';

class Application {
  constructor() {
    this._gameModel = ``;
  }

  _getScreenHeader() {
    const headerScreenPresenter = new HeaderScreenPresenter();
    return headerScreenPresenter.start();
  }

  _getGameHeader() {
    const headerGamePresenter = new HeaderGamePresenter(this._gameModel);
    return headerGamePresenter.start();
  }

  _getFooter() {
    const footerPresenter = new FooterPresenter();
    return footerPresenter.start();
  }

  start() {
    const successCallback = (levelData) => {
      this._gameModel = new GameModel(levelData);
    };

    const errorCallback = (error) => {
      this.showError(error);
    };

    this.showIntro();
    Loader.loadData(successCallback, errorCallback);
  }

  initGame() {
    this._gameModel.initGame();
  }

  showIntro() {
    const introPresenter = new IntroPresenter();

    utils.changeScreen(introPresenter.start(), this._getFooter());
  }

  showGreeting() {
    const greetingPresenter = new GreetingPresenter();

    utils.changeScreen(greetingPresenter.start(), this._getFooter());
  }

  showRules() {
    const rulesPresenter = new RulesPresenter();

    utils.changeScreen(rulesPresenter.start(), this._getFooter(),
        this._getScreenHeader());
  }

  showGame() {
    let gamePresenter;

    switch (this._gameModel.gameStatus.currLevel.type) {
      case GameScreens.SCREEN1:
        gamePresenter = new Game1Presenter(this._gameModel);
        break;
      case GameScreens.SCREEN2:
        gamePresenter = new Game2Presenter(this._gameModel);
        break;
      case GameScreens.SCREEN3:
        gamePresenter = new Game3Presenter(this._gameModel);
        break;
    }

    utils.changeScreen(gamePresenter.start(), this._getFooter(),
        this._getGameHeader());
  }

  showStatistics() {
    const rulesPresenter = new StaristicsPresenter(this._gameModel);

    utils.changeScreen(rulesPresenter.start(), this._getFooter(),
        this._getScreenHeader());
  }

  showError(error) {
    console.dir(error);
  }
}

const application = new Application();

export default application;
