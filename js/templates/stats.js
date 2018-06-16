const StatsPictures = {
  UNKNOWN: `unknown`,
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

export default (scores) => {

  const classes = [];
  for (let i = 0; i < 10; i++) {
    if (scores[i] !== undefined) {
      if (scores[i].answer) {
        let currentClass = (scores[i].times < 10) ? StatsPictures.FAST :
          StatsPictures.CORRECT;
        currentClass = (scores[i].times > 20) ? StatsPictures.SLOW :
          StatsPictures.CORRECT;
        classes.push(currentClass);
      } else {
        classes.push(StatsPictures.WRONG);
      }
    } else {
      classes.push(StatsPictures.UNKNOWN);
    }
  }

  return `
    <ul class="stats">
      <li class="stats__result stats__result--${classes[0]}"></li>
      <li class="stats__result stats__result--${classes[1]}"></li>
      <li class="stats__result stats__result--${classes[2]}"></li>
      <li class="stats__result stats__result--${classes[3]}"></li>
      <li class="stats__result stats__result--${classes[4]}"></li>
      <li class="stats__result stats__result--${classes[5]}"></li>
      <li class="stats__result stats__result--${classes[6]}"></li>
      <li class="stats__result stats__result--${classes[7]}"></li>
      <li class="stats__result stats__result--${classes[8]}"></li>
      <li class="stats__result stats__result--${classes[9]}"></li>
    </ul>`;
};
