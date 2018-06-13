const ErrorMessages = {
  NOT_ARRAY: `playerAnswers expected array`,
  NOT_NUMBER: `playerLife expected number`
};

const scoring = (playerAnswers, playerLife) => {

  if (!Array.isArray(playerAnswers)) {
    throw new Error(ErrorMessages.NOT_ARRAY);
  }

  if (typeof playerLife !== `number` || !isFinite(playerLife)) {
    throw new Error(ErrorMessages.NOT_NUMBER);
  }

  if (playerAnswers.length < 10) {
    return -1;
  }

  const points = playerAnswers.reduce((pointsSum, curEl) => {

    if (curEl.answer) {
      pointsSum.answer.positiveAnswCnt++;
      pointsSum.answer.answSum += 100;

      if (curEl.time < 10) {
        pointsSum.fast.fastCnt++;
        pointsSum.fast.fastSum += 50;
      }

      if (curEl.time > 20) {
        pointsSum.slow.slowCnt++;
        pointsSum.slow.slowSum -= 50;
      }
    }

    return pointsSum;

  }, {
    answer: {
      positiveAnswCnt: 0,
      answSum: 0
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

  points.lives.livesCnt = playerLife;
  points.lives.livesSum = 50 * playerLife;

  points.scores = points.answer.answSum + points.fast.fastSum +
    points.slow.slowSum + points.lives.livesSum;

  return points;
};

export default scoring;
