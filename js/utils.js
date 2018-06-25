const mainNode = document.querySelector(`.central`);

export default {
  changeScreen: (mainScreen, footer, header) => {
    mainNode.innerHTML = ``;

    if (header) {
      mainNode.appendChild(header);
    }

    mainNode.appendChild(mainScreen);
    mainNode.appendChild(footer);
  },

  statisticBar: (scores) => {
    const StatsPictures = {
      UNKNOWN: `unknown`,
      CORRECT: `correct`,
      WRONG: `wrong`,
      FAST: `fast`,
      SLOW: `slow`
    };

    const TimeIntervals = {
      FAST: 20,
      SLOW: 10
    };

    const getUlTemplate = (list) => {
      return `<ul class="stats">${list}</ul>`;
    };

    const getLiTemplate = (currentClass) => {
      return `<li class="stats__result stats__result--${currentClass}"></li>`;
    };

    const classes = [];
    let currentClass;
    for (let i = 0; i < 10; i++) {
      if (scores[i] !== undefined) {
        if (scores[i].answer) {

          let time = scores[i].time;

          if (time > TimeIntervals.FAST) {
            currentClass = StatsPictures.FAST;
          }

          if (time < TimeIntervals.SLOW) {
            currentClass = StatsPictures.SLOW;
          }

          if (time >= TimeIntervals.SLOW && time <= TimeIntervals.FAST) {
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
  }
};
