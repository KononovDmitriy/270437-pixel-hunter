import GameScreens from './../enums/game-screens-enum.js';
import Pictures from './pictures.js';
import Answers from './answers.js';
import Titles from './titles.js';

export default [
  {
    screen: GameScreens.SCREEN1,
    data: {
      img1: {
        url: Pictures.PHOTOS[0],
        answer: Answers.PHOTO
      },
      img2: {
        url: Pictures.PAINTINGS[2],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN1,
    data: {
      img1: {
        url: Pictures.PAINTINGS[0],
        answer: Answers.PAINT
      },
      img2: {
        url: Pictures.PHOTOS[2],
        answer: Answers.PHOTO
      }
    }
  },
  {
    screen: GameScreens.SCREEN1,
    data: {
      img1: {
        url: Pictures.PHOTOS[1],
        answer: Answers.PHOTO
      },
      img2: {
        url: Pictures.PAINTINGS[1],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN2,
    data: {
      img1: {
        url: Pictures.PAINTINGS[2],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN2,
    data: {
      img1: {
        url: Pictures.PHOTOS[0],
        answer: Answers.PHOTO
      }
    }
  },
  {
    screen: GameScreens.SCREEN2,
    data: {
      img1: {
        url: Pictures.PAINTINGS[1],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE1,
      answer: Answers.IMG2,
      img1: Pictures.PHOTOS[2],
      img2: Pictures.PAINTINGS[2],
      img3: Pictures.PHOTOS[0]
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE2,
      answer: Answers.IMG1,
      img1: Pictures.PHOTOS[1],
      img2: Pictures.PAINTINGS[2],
      img3: Pictures.PAINTINGS[0]
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE1,
      answer: Answers.IMG2,
      img1: Pictures.PHOTOS[2],
      img2: Pictures.PAINTINGS[2],
      img3: Pictures.PHOTOS[1]
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE2,
      answer: Answers.IMG3,
      img1: Pictures.PAINTINGS[1],
      img2: Pictures.PAINTINGS[2],
      img3: Pictures.PHOTOS[2]
    }
  },
];
