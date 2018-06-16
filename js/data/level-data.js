import pictures from './pictures-data.js';
import GameScreens from '../game-screen-types.js';

const Titles = {
  TITLE1: `Найдите рисунок среди изображений`,
  TITLE2: `Найдите фото среди изображений`,
};

const Answers = {
  PHOTO: `photo`,
  PAINT: `paint`,
  IMG1: `img1`,
  IMG2: `img2`,
  IMG3: `img3`,

};

export default [
  {
    screen: GameScreens.SCREEN1,
    data: {
      img1: {
        url: pictures.photos[0],
        answer: Answers.PHOTO
      },
      img2: {
        url: pictures.paintings[2],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN1,
    data: {
      img1: {
        url: pictures.paintings[0],
        answer: Answers.PAINT
      },
      img2: {
        url: pictures.photos[2],
        answer: Answers.PHOTO
      }
    }
  },
  {
    screen: GameScreens.SCREEN1,
    data: {
      img1: {
        url: pictures.photos[1],
        answer: Answers.PHOTO
      },
      img2: {
        url: pictures.paintings[1],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN2,
    data: {
      img1: {
        url: pictures.paintings[2],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN2,
    data: {
      img1: {
        url: pictures.photos[0],
        answer: Answers.PHOTO
      }
    }
  },
  {
    screen: GameScreens.SCREEN2,
    data: {
      img1: {
        url: pictures.paintings[1],
        answer: Answers.PAINT
      }
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE1,
      answer: Answers.IMG2,
      img1: pictures.photos[2],
      img2: pictures.paintings[2],
      img3: pictures.photos[0]
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE2,
      answer: Answers.IMG1,
      img1: pictures.photos[1],
      img2: pictures.paintings[2],
      img3: pictures.paintings[0]
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE1,
      answer: Answers.IMG2,
      img1: pictures.photos[2],
      img2: pictures.paintings[2],
      img3: pictures.photos[1]
    }
  },
  {
    screen: GameScreens.SCREEN3,
    data: {
      title: Titles.TITLE2,
      answer: Answers.IMG3,
      img1: pictures.paintings[1],
      img2: pictures.paintings[2],
      img3: pictures.photos[2]
    }
  },
];
