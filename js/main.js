import levelData from './data/level-data.js';
import gameStatus from './data/game-status-data.js';

import utils from './utils.js';
import scoring from './scoring.js';

import introScreen from './templates/screen-intro.js';
import greetScreen from './templates/screen-greeting.js';
import rulesScreen from './templates/screen-rules.js';
import gameScreen from './templates/screen-game.js';
import statScreen from './templates/screen-stats.js';

const GameScreens = {
  SCREEN1: `screen-game-1`,
  SCREEN2: `screen-game-2`,
  SCREEN3: `screen-game-3`,
};

const initGame = () => {
  gameStatus.playerName = ``;
  gameStatus.lives = 3;
  gameStatus.currLevel = {};
  gameStatus.currLevelNum = 0;
  gameStatus.scores = [];
};

const checkScreenGame1 = (answer) => {
  const result = (answer.img1 === gameStatus.currLevel.data.img1.answer &&
    answer.img2 === gameStatus.currLevel.data.img2.answer) ? true : false;

  gameStatus.scores.push(
      {
        answer: result,
        time: 15
      }
  );

  return result;
};

const checkScreenGame2 = (answer) => {
  const result = (answer.img1 === gameStatus.currLevel.data.img1.answer) ? true :
    false;

  gameStatus.scores.push(
      {
        answer: result,
        time: 15
      }
  );

  return result;
};

const checkScreenGame3 = (answer) => {
  const result = (answer.img1 === gameStatus.currLevel.data.answer) ? true :
    false;

  gameStatus.scores.push(
      {
        answer: result,
        time: 15
      }
  );

  return result;
};

const checkresult = (answer) => {
  let result;

  switch (gameStatus.currLevel.screen) {
    case GameScreens.SCREEN1:
      result = checkScreenGame1(answer);
      break;
    case GameScreens.SCREEN2:
      result = checkScreenGame2(answer);
      break;
    case GameScreens.SCREEN3:
      result = checkScreenGame3(answer);
      break;
  }

  return result;
};

const gameCallback = (answer) => {
  if (!checkresult(answer)) {
    gameStatus.lives--;

    if (gameStatus.lives < 0) {
      utils.changeScreen(statScreen(scoring(gameStatus.scores, gameStatus.lives), gameStatus.scores));
      return;
    }
  }

  gameStatus.currLevelNum++;
  gameStatus.currLevel = levelData[gameStatus.currLevelNum];

  if (gameStatus.currLevelNum < levelData.length) {
    utils.changeScreen(gameScreen(gameStatus, gameStatus.scores, gameCallback));
  } else {
    utils.changeScreen(statScreen(scoring(gameStatus.scores, gameStatus.lives), gameStatus.scores));
  }
};

const rulesScrCallback = (name) => {
  gameStatus.playerName = name;
  gameStatus.currLevel = levelData[gameStatus.currLevelNum];

  utils.changeScreen(gameScreen(gameStatus, gameStatus.scores, gameCallback));
};

const greetScrCallback = () => {
  initGame();
  utils.changeScreen(rulesScreen(rulesScrCallback));
};

const introScreenCallback = () => {
  utils.changeScreen(greetScreen(greetScrCallback));
};

utils.changeScreen(introScreen(introScreenCallback));

export default {
  changeGreetengScreen: () => {
    utils.changeScreen(greetScreen(greetScrCallback));
  }
};
