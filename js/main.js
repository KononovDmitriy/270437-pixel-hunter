import levelData from './data/level-data.js';
import gameStatus from './data/game-status-data.js';

import utils from './utils.js';
import scoring from './scoring.js';

import introScr from './templates/screen-intro.js';
import greetScr from './templates/screen-greeting.js';
import rulesScr from './templates/screen-rules.js';
import gameScr from './templates/screen-game.js';
import statScr from './templates/screen-stats.js';

const initGame = () => {
  gameStatus.playerName = ``;
  gameStatus.lives = 3;
  gameStatus.currLevel = {};
  gameStatus.currLevelNum = 0;
  gameStatus.scores = [];
};

const checkScreenGame1 = (answer) => {
  const rezult = (answer.img1 === gameStatus.currLevel.data.img1.answer &&
    answer.img2 === gameStatus.currLevel.data.img2.answer) ? true : false;

  gameStatus.scores.push(
      {
        answer: rezult,
        time: 15
      }
  );

  return rezult;
};

const checkScreenGame2 = (answer) => {
  const rezult = (answer.img1 === gameStatus.currLevel.data.img1.answer) ? true :
    false;

  gameStatus.scores.push(
      {
        answer: rezult,
        time: 15
      }
  );

  return rezult;
};

const checkScreenGame3 = (answer) => {
  const rezult = (answer.img1 === gameStatus.currLevel.data.answer) ? true :
    false;

  gameStatus.scores.push(
      {
        answer: rezult,
        time: 15
      }
  );

  return rezult;
};

const checkRezult = (answer) => {
  let rezult;

  switch (gameStatus.currLevel.screen) {
    case `screen-game-1`:
      rezult = checkScreenGame1(answer);
      break;
    case `screen-game-2`:
      rezult = checkScreenGame2(answer);
      break;
    case `screen-game-3`:
      rezult = checkScreenGame3(answer);
      break;
  }

  return rezult;
};

const gameCallback = (answer) => {
  if (!checkRezult(answer)) {
    gameStatus.lives--;

    if (gameStatus.lives < 0) {
      utils.changeScreen(statScr(scoring(gameStatus.scores, gameStatus.lives), gameStatus.scores));
      return;
    }
  }

  gameStatus.currLevelNum++;
  gameStatus.currLevel = levelData[gameStatus.currLevelNum];

  if (gameStatus.currLevelNum < levelData.length) {
    utils.changeScreen(gameScr(gameStatus, gameStatus.scores, gameCallback));
  } else {
    utils.changeScreen(statScr(scoring(gameStatus.scores, gameStatus.lives), gameStatus.scores));
  }
};

const rulesScrCallback = (name) => {
  gameStatus.playerName = name;
  gameStatus.currLevel = levelData[gameStatus.currLevelNum];

  utils.changeScreen(gameScr(gameStatus, gameStatus.scores, gameCallback));
};

const greetScrCallback = () => {
  initGame();
  utils.changeScreen(rulesScr(rulesScrCallback));
};

const introScrCallback = () => {
  utils.changeScreen(greetScr(greetScrCallback));
};

utils.changeScreen(introScr(introScrCallback));

export default {
  changeGreetengScreen: () => {
    utils.changeScreen(greetScr(greetScrCallback));
  }
};
