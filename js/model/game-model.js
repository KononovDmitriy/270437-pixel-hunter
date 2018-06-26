import Enums from '../enums.js';

export default class GameModel {
  constructor() {
    this._Answers = {
      PHOTO: `photo`,
      PAINT: `paint`,
      IMG1: `img1`,
      IMG2: `img2`,
      IMG3: `img3`,
    };

    this._Pictures = {
      PAINTINGS: [
        // People
        `https://k42.kn3.net/CF42609C8.jpg`,

        // Animals
        `https://k42.kn3.net/D2F0370D6.jpg`,

        // Nature
        `https://k32.kn3.net/5C7060EC5.jpg`
      ],
      PHOTOS: [
        // People
        `http://i.imgur.com/1KegWPz.jpg`,

        // Animals
        `https://i.imgur.com/DiHM5Zb.jpg`,

        // Nature
        `http://i.imgur.com/DKR1HtB.jpg`
      ]
    };

    this._Titles = {
      TITLE1: `Найдите рисунок среди изображений`,
      TITLE2: `Найдите фото среди изображений`,
    };

    this._LevelData = [
      {
        screen: Enums.GameScreens.SCREEN1,
        data: {
          img1: {
            url: this._Pictures.PHOTOS[0],
            answer: this._Answers.PHOTO
          },
          img2: {
            url: this._Pictures.PAINTINGS[2],
            answer: this._Answers.PAINT
          }
        }
      },
      {
        screen: Enums.GameScreens.SCREEN1,
        data: {
          img1: {
            url: this._Pictures.PAINTINGS[0],
            answer: this._Answers.PAINT
          },
          img2: {
            url: this._Pictures.PHOTOS[2],
            answer: this._Answers.PHOTO
          }
        }
      },
      {
        screen: Enums.GameScreens.SCREEN1,
        data: {
          img1: {
            url: this._Pictures.PHOTOS[1],
            answer: this._Answers.PHOTO
          },
          img2: {
            url: this._Pictures.PAINTINGS[1],
            answer: this._Answers.PAINT
          }
        }
      },
      {
        screen: Enums.GameScreens.SCREEN2,
        data: {
          img1: {
            url: this._Pictures.PAINTINGS[2],
            answer: this._Answers.PAINT
          }
        }
      },
      {
        screen: Enums.GameScreens.SCREEN2,
        data: {
          img1: {
            url: this._Pictures.PHOTOS[0],
            answer: this._Answers.PHOTO
          }
        }
      },
      {
        screen: Enums.GameScreens.SCREEN2,
        data: {
          img1: {
            url: this._Pictures.PAINTINGS[1],
            answer: this._Answers.PAINT
          }
        }
      },
      {
        screen: Enums.GameScreens.SCREEN3,
        data: {
          title: this._Titles.TITLE1,
          answer: this._Answers.IMG2,
          img1: this._Pictures.PHOTOS[2],
          img2: this._Pictures.PAINTINGS[2],
          img3: this._Pictures.PHOTOS[0]
        }
      },
      {
        screen: Enums.GameScreens.SCREEN3,
        data: {
          title: this._Titles.TITLE2,
          answer: this._Answers.IMG1,
          img1: this._Pictures.PHOTOS[1],
          img2: this._Pictures.PAINTINGS[2],
          img3: this._Pictures.PAINTINGS[0]
        }
      },
      {
        screen: Enums.GameScreens.SCREEN3,
        data: {
          title: this._Titles.TITLE1,
          answer: this._Answers.IMG2,
          img1: this._Pictures.PHOTOS[2],
          img2: this._Pictures.PAINTINGS[2],
          img3: this._Pictures.PHOTOS[1]
        }
      },
      {
        screen: Enums.GameScreens.SCREEN3,
        data: {
          title: this._Titles.TITLE2,
          answer: this._Answers.IMG3,
          img1: this._Pictures.PAINTINGS[1],
          img2: this._Pictures.PAINTINGS[2],
          img3: this._Pictures.PHOTOS[2]
        }
      },
    ];

    this._gameStatus = {
      playerName: ``,
      lives: 3,
      currLevel: this._LevelData[0],
      currLevelNum: 0,
      scores: []
    };

    this._timer = 10;
    this._intervalId = ``;
  }

  get gameStatus() {
    return this._gameStatus;
  }

  set playerName(name) {
    this._gameStatus.playerName = name;
  }

  _checkScreenGame1(answer) {
    const result = (answer.img1 === this._gameStatus.currLevel.data.img1.answer &&
    answer.img2 === this._gameStatus.currLevel.data.img2.answer) ? true : false;

    return result;
  }

  _checkScreenGame2(answer) {
    return (answer.img1 === this._gameStatus.currLevel.data.img1.answer)
      ? true : false;
  }

  _checkScreenGame3(answer) {
    return (answer.img1 === this._gameStatus.currLevel.data.answer)
      ? true : false;
  }

  _checkresult(answer) {
    let result;

    switch (this._gameStatus.currLevel.screen) {
      case Enums.GameScreens.SCREEN1:
        result = this._checkScreenGame1(answer);
        break;
      case Enums.GameScreens.SCREEN2:
        result = this._checkScreenGame2(answer);
        break;
      case Enums.GameScreens.SCREEN3:
        result = this._checkScreenGame3(answer);
        break;
    }
    return result;
  }

  _pushAnswer(answer) {
    const result = (answer) ? this._checkresult(answer) : false;

    this._gameStatus.scores.push(
        {
          answer: result,
          time: this._timer
        }
    );

    if (!result) {
      this._gameStatus.lives--;

      if (this._gameStatus.lives < 0) {
        return false;
      }
    }

    return true;
  }

  timerCallback() {}

  initGame() {
    this._gameStatus = {
      playerName: ``,
      lives: 3,
      currLevel: this._LevelData[0],
      currLevelNum: 0,
      scores: []
    };
  }

  nextLevel(answer) {
    if (!this._pushAnswer(answer)) {
      return false;
    }

    let level = false;

    if (this._gameStatus.currLevelNum < this._LevelData.length - 1) {
      this._gameStatus.currLevelNum++;
      this._gameStatus.currLevel = this._LevelData[this._gameStatus.currLevelNum];

      level = true;
    }

    return level;
  }

  startTimer() {
    this._timer = Enums.Times.START_TIME;

    this._intervalId = setInterval(() => {
      this._timer--;

      if (this._timer === 0) {
        clearInterval(this._intervalId);
        this.timerCallback(false);
      } else {
        this.timerCallback(this._timer);
      }

    }, Enums.Times.INTERVAL);
  }

  stopTimer() {
    clearInterval(this._intervalId);
  }
}