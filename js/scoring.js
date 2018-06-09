const scoring = (playerAnswers, playerLife) => {
  let score = 0;

  if (!Array.isArray(playerAnswers)) {
    throw new Error(`playerAnswers expected array`);
  }

  if (typeof playerLife !== `number` || !isFinite(playerLife)) {
    throw new Error(`playerLife expected number`);
  }

  for (let currAnswer of playerAnswers) {
    if (!currAnswer.answer) {
      return -1;
    }

    score += 100;
    score += (currAnswer.time < 10) ? 50 : 0;
    score += (currAnswer.time > 20) ? -50 : 0;
  }

  score += 50 * playerLife;

  return score;
};

export default scoring;
