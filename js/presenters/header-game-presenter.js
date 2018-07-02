import AbstractPresenter from './abstract-presenter.js';
import HeaderGameView from './../views/header-game-view.js';
import application from './../application.js';

export default class HeaderGamePresenter extends AbstractPresenter {
  constructor(gameModel) {
    super(new HeaderGameView(gameModel.gameStatus.lives), gameModel);

    this._lives = this._gameModel.gameStatus.lives;

    this._gameModel.timerCallback = (time) => {
      if (!time) {

        this._gameModel.pushAnswer(false);

        if (this._gameModel.checkGameOver()) {
          application.showStatistics();
        } else {
          this._gameModel.nextLevel();
          application.showGame();
        }
      }

      this._view.timer = time;
    };
  }

  callback() {
    application.showConfirm();
  }
}
