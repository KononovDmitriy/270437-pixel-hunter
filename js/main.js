"use strict";

const SCREENS = [`central`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`,
  `stats`];
const Keys = {
  LEFT: 37,
  RIGHT: 39
};

const BUTTON_ARROW_STYLE =
  `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>`;

const bodyNode = document.querySelector(`body`);
const mainNode = bodyNode.querySelector(`.central`);

let screensNodes = [];
let curScr = 0;

const getScreensNodes = () => {
  screensNodes = SCREENS.map((screen) => {
    return (screen === `central`) ?
      document.querySelector(`.${screen}`).cloneNode(true) :
      document.querySelector(`#${screen}`);
  });
};

const switchScreen = (scrNum) => {
  if (scrNum < 0) {
    scrNum = 0;
  }
  if (scrNum > screensNodes.length - 1) {
    scrNum = screensNodes.length - 1;
  }

  mainNode.innerHTML = screensNodes[scrNum].innerHTML;
  return scrNum;
};

const createGraphicalArrow = () => {
  const createButton = (val) => {
    let buttonNode = document.createElement(`button`);

    buttonNode.classList.add(`arrows__btn`);
    buttonNode.appendChild(document.createTextNode(val));

    return buttonNode;
  };

  const arrowNode = document.createElement(`div`);

  arrowNode.classList.add(`arrows__wrap`);
  arrowNode.innerHTML = BUTTON_ARROW_STYLE;

  let buttonLeft = createButton(`<-`);
  let buttonRight = createButton(`->`);

  buttonLeft.addEventListener(`click`, () => {
    curScr = switchScreen(--curScr);
  });
  buttonRight.addEventListener(`click`, () => {
    curScr = switchScreen(++curScr);
  });

  arrowNode.appendChild(buttonLeft);
  arrowNode.appendChild(buttonRight);

  bodyNode.appendChild(arrowNode);
};

getScreensNodes();
createGraphicalArrow();

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case Keys.LEFT:
      evt.preventDefault();
      curScr = switchScreen(--curScr);
      break;
    case Keys.RIGHT:
      evt.preventDefault();
      curScr = switchScreen(++curScr);
      break;
  }
});
