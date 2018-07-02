import Times from './../enums/times-enum.js';
import GameScreens from './../enums/game-screens-enum.js';

const NUMBER_LEVELS = 10;
const Question = {
  PHOTO: `Найдите фото среди изображений`,
  PAINTING: `Найдите рисунок среди изображений`
};
const AnswerType = {
  PAINTING: `painting`,
  PHOTO: `photo`
};

export default class GameModel {
  constructor(levelsData) {
    this.APP_ID = 97991230;
    this._LevelsData = levelsData;

    this._gameStatus = {
      userName: null,
      lives: null,
      currentLevel: null,
      currentLevelNum: null,
      scores: null
    };

    this._timer = null;
    this._intervalId = null;
  }

  get gameStatus() {
    return this._gameStatus;
  }

  set userName(name) {
    this._gameStatus.userName = name;
  }

  _checkScreenGame1(answer) {
    return answer.image1 === this._gameStatus.currentLevel.answers[0].type &&
      answer.image2 === this._gameStatus.currentLevel.answers[1].type;
  }

  _checkScreenGame2(answer) {
    return answer.image1 === this._gameStatus.currentLevel.answers[0].type;
  }

  _checkScreenGame3(answer) {
    const goodAnswer =
      (this._gameStatus.currentLevel.question === Question.PHOTO) ?
        AnswerType.PHOTO : AnswerType.PAINTING;

    return answer.image1 === goodAnswer;
  }

  _checkResult(answer) {
    let result;

    switch (this._gameStatus.currentLevel.type) {
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
          answer: (answer) ? this._checkResult(answer) : false,
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

    if (!(this._gameStatus.scores.length < NUMBER_LEVELS)) {
      return true;
    }

    return false;
  }

  timerCallback() {}

  initGame() {
    this._gameStatus = {
      userName: `Гость`,
      lives: 3,
      currentLevel: this._LevelsData[0],
      currentLevelNum: 0,
      scores: []
    };
  }

  nextLevel() {
    this._gameStatus.currentLevelNum++;
    this._gameStatus.currentLevel = this._LevelsData[this._gameStatus.currentLevelNum];
  }

  startTimer() {
    clearInterval(this._intervalId);
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
