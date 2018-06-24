import GameScreens from '../game-screen-types.js';

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
        screen: GameScreens.SCREEN1,
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
        screen: GameScreens.SCREEN1,
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
        screen: GameScreens.SCREEN1,
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
        screen: GameScreens.SCREEN2,
        data: {
          img1: {
            url: this._Pictures.PAINTINGS[2],
            answer: this._Answers.PAINT
          }
        }
      },
      {
        screen: GameScreens.SCREEN2,
        data: {
          img1: {
            url: this._Pictures.PHOTOS[0],
            answer: this._Answers.PHOTO
          }
        }
      },
      {
        screen: GameScreens.SCREEN2,
        data: {
          img1: {
            url: this._Pictures.PAINTINGS[1],
            answer: this._Answers.PAINT
          }
        }
      },
      {
        screen: GameScreens.SCREEN3,
        data: {
          title: this._Titles.TITLE1,
          answer: this._Answers.IMG2,
          img1: this._Pictures.PHOTOS[2],
          img2: this._Pictures.PAINTINGS[2],
          img3: this._Pictures.PHOTOS[0]
        }
      },
      {
        screen: GameScreens.SCREEN3,
        data: {
          title: this._Titles.TITLE2,
          answer: this._Answers.IMG1,
          img1: this._Pictures.PHOTOS[1],
          img2: this._Pictures.PAINTINGS[2],
          img3: this._Pictures.PAINTINGS[0]
        }
      },
      {
        screen: GameScreens.SCREEN3,
        data: {
          title: this._Titles.TITLE1,
          answer: this._Answers.IMG2,
          img1: this._Pictures.PHOTOS[2],
          img2: this._Pictures.PAINTINGS[2],
          img3: this._Pictures.PHOTOS[1]
        }
      },
      {
        screen: GameScreens.SCREEN3,
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
      lives: 0,
      currLevel: this._LevelData[0],
      currLevelNum: 0,
      scores: []
    };
  }

  get getGameModel() {
    return this._gameStatus;
  }

  get nextLevel() {
    if (this._gameStatus.currLevelNum < this.LevelData.lenght - 1) {
      this._gameStatus.currLevelNum++;
      this._gameStatus.currLevel = this._LevelData[this._gameStatus.currLevelNum];

      return this._gameStatus;
    }

    return false;
  }

  set playerName(name) {
    this._gameStatus.playerName = name;
  }
}
