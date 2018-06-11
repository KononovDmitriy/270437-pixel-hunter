const scoring = (playerAnswers, playerLife) => {

  if (!Array.isArray(playerAnswers)) {
    throw new Error(`playerAnswers expected array`);
  }

  if (typeof playerLife !== `number` || !isFinite(playerLife)) {
    throw new Error(`playerLife expected number`);
  }

  if (playerAnswers.length < 10) {
    return -1;
  }

  const points = playerAnswers.reduce((pointsSum, curEl) => {

    if (curEl.answer) {
      pointsSum.positiveAnswCnt++;
      pointsSum.score += 100;
    }

    pointsSum.score += (curEl.time < 10) ? 50 : 0;
    pointsSum.score += (curEl.time > 20) ? -50 : 0;

    return pointsSum;

  }, {score: 0, positiveAnswCnt: 0});

  points.score += 50 * playerLife;

  return points.score;
};

export default scoring;
