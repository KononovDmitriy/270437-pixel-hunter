const mainNode = document.querySelector(`.central`);

export default {
  changeScreen: (screen) => {
    mainNode.innerHTML = ``;
    mainNode.appendChild(screen);
  },

  statisticBar: (scores) => {
    const StatsPictures = {
      UNKNOWN: `unknown`,
      CORRECT: `correct`,
      WRONG: `wrong`,
      FAST: `fast`,
      SLOW: `slow`
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
          currentClass = (scores[i].times < 10) ? StatsPictures.FAST :
            StatsPictures.CORRECT;
          currentClass = (scores[i].times > 20) ? StatsPictures.SLOW :
            StatsPictures.CORRECT;
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
