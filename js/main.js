"use strict";

const SCREENS = [`central`, `greeting`, `rules`, `game-2`, `game-1`, `game-3`,
  `stats`];
const Keys = {
  'LEFT': 37,
  'RIGHT': 39
};

const mainNode = document.querySelector(`.central`);

let screensNodes = [];
let screenNum = 0;

const getScreensNodes = () => {

  SCREENS.forEach((screen) => {
    let node = (screen === `central`) ?
      document.querySelector(`.${screen}`).cloneNode(true) :
      document.querySelector(`#${screen}`);

    screensNodes.push(node);

  });
};

const drawScreen = (ScrNum) => {
  mainNode.innerHTML = screensNodes[ScrNum].innerHTML;
};

const switchScreen = (switchRight) => {
  if (switchRight) {
    screenNum += (screenNum < screensNodes.length - 1) ? 1 : 0;
    return true;
  }

  screenNum -= (screenNum > 0) ? 1 : 0;
  return true;
};

getScreensNodes();
document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case Keys.LEFT:
      evt.preventDefault();
      switchScreen(false);
      drawScreen(screenNum);

      break;
    case Keys.RIGHT:
      evt.preventDefault();
      switchScreen(true);
      drawScreen(screenNum);
      break;

  }
});
