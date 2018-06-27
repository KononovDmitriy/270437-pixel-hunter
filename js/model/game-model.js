import Times from './../enums/times-enum.js';
import GameScreens from './../enums/game-screens-enum.js';
import LevelsData from './../data/levels-data.js';

export default class GameModel {
  constructor() {
    this._NUMBER_LEVELS = 10;
    this._LevelsData = LevelsData;

    this._gameStatus = {
      playerName: ``,
      lives: 3,
      currLevel: this._LevelsData[0],
      currLevelNum: 0,
      scores: []
    };

    this._timer = ``;
    this._intervalId = ``;
  }

  get gameStatus() {
    return this._gameStatus;
  }

  set playerName(name) {
    this._gameStatus.playerName = name;
  }

  _checkScreenGame1(answer) {
    return answer.img1 === this._gameStatus.currLevel.data.img1.answer &&
      answer.img2 === this._gameStatus.currLevel.data.img2.answer;
  }

  _checkScreenGame2(answer) {
    return answer.img1 === this._gameStatus.currLevel.data.img1.answer;
  }

  _checkScreenGame3(answer) {
    return answer.img1 === this._gameStatus.currLevel.data.answer;
  }

  _checkresult(answer) {
    let result;

    switch (this._gameStatus.currLevel.screen) {
      case GameScreens.SCREEN1:
        result = this._checkScreenGame1(answer);
        break;
      case GameScreens.SCREEN2:
        result = this._checkScreenGame2(answer);
        break;
      case GameScreens.SCREEN3:
        result = this._checkScreenGame3(answer);
        break;
    }
    return result;
  }

  pushAnswer(answer) {
    this._gameStatus.scores.push(
        {
          answer: (answer) ? this._checkresult(answer) : false,
          time: this._timer
        }
    );
  }

  checkGameOver() {
    if (!this._gameStatus.scores[this._gameStatus.scores.length - 1].answer) {
      this._gameStatus.lives--;

      if (this._gameStatus.lives < 0) {
        return true;
      }
    }

    if (!(this._gameStatus.scores.length < this._NUMBER_LEVELS)) {
      return true;
    }

    return false;
  }

  timerCallback() {}

  initGame() {
    this._gameStatus = {
      playerName: ``,
      lives: 3,
      currLevel: this._LevelsData[0],
      currLevelNum: 0,
      scores: []
    };
  }

  nextLevel() {
    this._gameStatus.currLevelNum++;
    this._gameStatus.currLevel = this._LevelsData[this._gameStatus.currLevelNum];
  }

  startTimer() {
    this._timer = Times.START_TIME;

    this._intervalId = setInterval(() => {
      this._timer--;

      if (this._timer === 0) {
        clearInterval(this._intervalId);
        this.timerCallback(false);
      } else {
        this.timerCallback(this._timer);
      }

    }, Times.INTERVAL);
  }

  stopTimer() {
    clearInterval(this._intervalId);
  }
}
