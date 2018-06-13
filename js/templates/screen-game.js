import header from './screen-header-game.js';
import footer from './screen-footer.js';
import stats from './stats.js';
import utils from '../utils.js';
import GameScreens from '../game-screen-types.js';

const getGameScreen1 = (gameStatus, scores, callback) => {
  const GAME_SCREEN = `
    <div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        <div class="game__option">
          <img src="${gameStatus.currLevel.data.img1.url}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${gameStatus.currLevel.data.img2.url}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        ${stats(scores)}
      </div>
    </div>
    ${footer}`;

  const checkGroup = (inputGrp) => {
    let groupCheck = false;

    for (let input of inputGrp) {
      if (input.checked) {
        groupCheck = true;
        break;
      }
    }

    return groupCheck;
  };

  const checkResult = () => {
    const checkGroup1 = checkGroup(inputGrp1);
    const checkGroup2 = checkGroup(inputGrp2);

    return (checkGroup1 && checkGroup2) ? true : false;
  };

  const getResult = () => {
    const answer = {
      img1: ``,
      img2: ``
    };

    for (let input of inputGrp1) {
      if (input.checked) {
        answer.img1 = input.value;
      }
    }

    for (let input of inputGrp2) {
      if (input.checked) {
        answer.img2 = input.value;
      }
    }

    return answer;

  };

  const addHandlers = () => {
    screenElement.querySelector(`.game__content`).addEventListener(`change`, () => {
      if (checkResult()) {
        callback(getResult());
      }
    });
  };

  const screenElement = utils.createDom(GAME_SCREEN, header(gameStatus));

  const inputGrp1 = screenElement.querySelectorAll(`input[name="question1"]`);
  const inputGrp2 = screenElement.querySelectorAll(`input[name="question2"]`);

  addHandlers();

  return screenElement;
};

const getGameScreen2 = (gameStatus, scores, callback) => {
  const GAME_SCREEN = `
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${gameStatus.currLevel.data.img1.url}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        ${stats(scores)}
      </div>
    </div>
    ${footer}`;

  const getResult = () => {
    const answer = {
      img1: ``,
    };

    for (let input of inputGrp1) {
      if (input.checked) {
        answer.img1 = input.value;
      }
    }

    return answer;
  };

  const addHandlers = () => {
    screenElement.querySelector(`.game__content`).addEventListener(`change`, () => {
      callback(getResult());
    });
  };

  const screenElement = utils.createDom(GAME_SCREEN, header(gameStatus));
  const inputGrp1 = screenElement.querySelectorAll(`input[name="question1"]`);

  addHandlers();

  return screenElement;
};

const getGameScreen3 = (gameStatus, scores, callback) => {
  const GAME_SCREEN = `
    <div class="game">
      <p class="game__task">${gameStatus.currLevel.data.title}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option" data-name="img1">
          <img src="${gameStatus.currLevel.data.img1}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected" data-name="img2">
          <img src="${gameStatus.currLevel.data.img2}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option" data-name="img3">
          <img src="${gameStatus.currLevel.data.img3}" alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        ${stats(scores)}
      </div>
    </div>
    ${footer}`;

  const getResult = (evt) => {
    const element = (evt.target.dataset.name) ? evt.target : evt.target.parentNode;

    return {
      img1: element.dataset.name
    };
  };

  const addHandlers = () => {
    screenElement.querySelector(`.game__content`).addEventListener(`click`, (evt) => {
      callback(getResult(evt));
    });
  };

  const screenElement = utils.createDom(GAME_SCREEN, header(gameStatus));

  addHandlers();

  return screenElement;
};

const getGameScreeen = (gameStatus, scores, callback) => {
  let gameScreen;

  switch (gameStatus.currLevel.screen) {
    case GameScreens.SCREEN1:
      gameScreen = getGameScreen1(gameStatus, scores, callback);
      break;
    case GameScreens.SCREEN2:
      gameScreen = getGameScreen2(gameStatus, scores, callback);
      break;
    case GameScreens.SCREEN3:
      gameScreen = getGameScreen3(gameStatus, scores, callback);
      break;
  }

  return gameScreen;
};

export default getGameScreeen;
