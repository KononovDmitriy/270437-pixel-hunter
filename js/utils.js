import Times from './enums/times-enum.js';
import {NUMBER_LEVELS, MAXIMUM_NUMBERS_LIVES} from './constants.js';
import AnswersTypes from './enums/answers-types-enum.js';

const mainNode = document.querySelector(`.central`);

const StatsPictures = {
  UNKNOWN: `unknown`,
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

const Scores = {
  ANSWER: 100,
  FAST_ANSWER: 50,
  SLOW_ANSWER: 50,
  LIVE: 50
};

const GAME_OVER = -1;

const ErrorMessages = {
  NOT_ARRAY: `playerAnswers expected array`,
  NOT_NUMBER: `playerLife expected number`
};

const Question = {
  PHOTO: `Найдите фото среди изображений`,
  PAINTING: `Найдите рисунок среди изображений`
};

export default {
  changeScreen: (mainScreen, footer, header) => {
    mainNode.innerHTML = ``;

    if (header) {
      mainNode.appendChild(header);
    }

    mainNode.appendChild(mainScreen);
    mainNode.appendChild(footer);
  },

  showModal: (modal) => {
    mainNode.appendChild(modal);
  },

  getStatisticBar: (scores) => {


    const getUlTemplate = (list) => {
      return `<ul class="stats">${list}</ul>`;
    };

    const getLiTemplate = (currentClass) => {
      return `<li class="stats__result stats__result--${currentClass}"></li>`;
    };

    const classes = [];
    let currentClass;
    for (let i = 0; i < NUMBER_LEVELS; i++) {
      if (scores[i] !== undefined) {
        if (scores[i].answer) {

          let time = scores[i].time;

          if (time > Times.FAST_ANSWER) {
            currentClass = StatsPictures.FAST;
          }

          if (time < Times.SLOW_ANSWER) {
            currentClass = StatsPictures.SLOW;
          }

          if (time >= Times.SLOW_ANSWER && time <= Times.FAST_ANSWER) {
            currentClass = StatsPictures.CORRECT;
          }

          classes.push(getLiTemplate(currentClass));
        } else {
          classes.push(getLiTemplate(StatsPictures.WRONG));
        }
      } else {
        classes.push(getLiTemplate(StatsPictures.UNKNOWN));
      }
    }

    return getUlTemplate(classes.map((currentValue) => {
      return currentValue;
    }).join(``));
  },

  scoring: (playerAnswers, playerLife) => {

    if (!Array.isArray(playerAnswers)) {
      throw new Error(ErrorMessages.NOT_ARRAY);
    }

    if (typeof playerLife !== `number` || !isFinite(playerLife)) {
      throw new Error(ErrorMessages.NOT_NUMBER);
    }

    const points = playerAnswers.reduce((pointsSum, currentElement) => {

      if (currentElement.answer) {
        pointsSum.answer.positiveAnswCnt++;
        pointsSum.answer.answSum += Scores.ANSWER;

        if (currentElement.time > Times.FAST_ANSWER) {
          pointsSum.fast.fastCnt++;
          pointsSum.fast.fastSum += Scores.FAST_ANSWER;
        }

        if (currentElement.time < Times.SLOW_ANSWER) {
          pointsSum.slow.slowCnt++;
          pointsSum.slow.slowSum -= Scores.SLOW_ANSWER;
        }
      } else {
        pointsSum.answer.badAnswer++;
      }

      return pointsSum;

    }, {
      answer: {
        positiveAnswCnt: 0,
        answSum: 0,
        badAnswer: 0
      },
      fast: {
        fastCnt: 0,
        fastSum: 0
      },
      slow: {
        slowCnt: 0,
        slowSum: 0
      },
      lives: {
        livesCnt: 0,
        livesSum: 0
      },
      scores: 0
    });

    if (points.answer.badAnswer > MAXIMUM_NUMBERS_LIVES) {
      return GAME_OVER;
    }

    points.lives.livesCnt = playerLife;
    points.lives.livesSum = Scores.LIVE * playerLife;

    points.scores = points.answer.answSum + points.fast.fastSum +
      points.slow.slowSum + points.lives.livesSum;

    return points;
  },

  formatData: (gameScoring, gameLives) => {
    return JSON.stringify(
        {
          lives: gameLives,
          scores: gameScoring
        }
    );
  },

  getQuestion: (question) => {
    return (question === Question.PHOTO) ?
      AnswersTypes.PHOTO : AnswersTypes.PAINTING;
  }
};
