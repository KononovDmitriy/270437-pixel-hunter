import picts from './pictures-data.js';
export default [
  {
    screen: `screen-game-1`,
    data: {
      img1: {
        url: picts.photos[0],
        answer: `photo`
      },
      img2: {
        url: picts.paintings[2],
        answer: `paint`
      }
    }
  },
  {
    screen: `screen-game-1`,
    data: {
      img1: {
        url: picts.paintings[0],
        answer: `paint`
      },
      img2: {
        url: picts.photos[2],
        answer: `photo`
      }
    }
  },
  {
    screen: `screen-game-1`,
    data: {
      img1: {
        url: picts.photos[1],
        answer: `photo`
      },
      img2: {
        url: picts.paintings[1],
        answer: `paint`
      }
    }
  },
  {
    screen: `screen-game-2`,
    data: {
      img1: {
        url: picts.paintings[2],
        answer: `paint`
      }
    }
  },
  {
    screen: `screen-game-2`,
    data: {
      img1: {
        url: picts.photos[0],
        answer: `photo`
      }
    }
  },
  {
    screen: `screen-game-2`,
    data: {
      img1: {
        url: picts.paintings[1],
        answer: `paint`
      }
    }
  },
  {
    screen: `screen-game-3`,
    data: {
      title: `Найдите рисунок среди изображений`,
      answer: `img2`,
      img1: picts.photos[2],
      img2: picts.paintings[2],
      img3: picts.photos[0]
    }
  },
  {
    screen: `screen-game-3`,
    data: {
      title: `Найдите фото среди изображений`,
      answer: `img1`,
      img1: picts.photos[1],
      img2: picts.paintings[2],
      img3: picts.paintings[0]
    }
  },
  {
    screen: `screen-game-3`,
    data: {
      title: `Найдите рисунок среди изображений`,
      answer: `img2`,
      img1: picts.photos[2],
      img2: picts.paintings[2],
      img3: picts.photos[1]
    }
  },
  {
    screen: `screen-game-3`,
    data: {
      title: `Найдите фото среди изображений`,
      answer: `img3`,
      img1: picts.paintings[1],
      img2: picts.paintings[2],
      img3: picts.photos[2]
    }
  },
];
