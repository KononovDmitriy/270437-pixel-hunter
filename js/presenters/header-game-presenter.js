import AbstractPresenter from './abstract-presenter.js';
import HeaderGameView from './../views/header-game-view.js';
import application from './../application.js';

export default class FooterPresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new HeaderGameView(gameModel.gameStatus.lives), gameModel);

    this._lives = this._gameModel.gameStatus.lives;

    this._gameModel.timerCallback = (time) => {
      if (!time) {
        if (this._gameModel.nextLevel(false)) {
          application.showGame();
        } else {
          application.showStatistics();
        }
      }

      this._view.timer = time;
    };
  }

  callback() {
    this._gameModel.stopTimer();
    application.showGreeting();
  }
}
