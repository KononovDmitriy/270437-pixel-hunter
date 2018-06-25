import HeaderGameView from './../views/header-game-view.js';
import application from './../application.js';

export default class HeaderGamePresenter {
  constructor(gameModel) {
    this._gameModel = gameModel;
    this._lives = this._gameModel.gameStatus.lives;

    this._headerGameView = new HeaderGameView(this._lives);
    this._headerGameView.headerGameCallback = () => {
      this._gameModel.stopTimer();
      application.showGreeting();
    };

    this._gameModel.timerCallback = (time) => {
      if (!time) {
        console.log('GameOver!!');
      }

      this._headerGameView.timer = time;
    };

  }

  start() {
    this._gameModel.startTimer();
    return this._headerGameView.element();
  }
}
