import {assert} from 'chai';

const TEST_QUERIES = {
  gameOverTest1: {
    answer: [{answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: false, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}],
    life: 3,
  },

  returnsTest1: {
    answer: [{answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}],
    life: 3
  }
};

const scoring = (playerAnswers, playerLife) => {
  let score = 0;

  if (!Array.isArray(playerAnswers)) {
    throw new Error(`playerAnswers expected array`);
  }

  if (typeof playerLife !== `number` || !isFinite(playerLife)) {
    throw new Error(`playerLife expected number`);
  }

  for (let i = 0; i < playerAnswers.length; i++) {
    if (!playerAnswers[i].answer) {
      return -1;
    }

    score += 100;
    score += (playerAnswers[i].time < 10) ? 50 : 0;
    score += (playerAnswers[i].time > 20) ? -50 : 0;
  }

  score += 50 * playerLife;

  return score;
};

const getplayerAnswers2 = () => {
  let playerAnswers = [];

  for (let i = 0; i < 10; i++) {
    playerAnswers.push({answer: true, time: 12});
  }

  return playerAnswers;
};

describe(`Function scoring`, () => {

  it(`input playerplayerAnswers are correct`, () => {
    assert.throws(() => scoring(`gg`, 33));
    assert.throws(() => scoring(33, 33));
    assert.throws(() => scoring(null, 33));
    assert.throws(() => scoring(undefined, 33));
    assert.throws(() => scoring(Infinity, 33));
    assert.throws(() => scoring({}, 33));
    assert.doesNotThrow(() => scoring([], 33));
  });

  it(`input playerLife are correct`, () => {
    assert.throws(() => scoring([], `gg`));
    assert.throws(() => scoring([], null));
    assert.throws(() => scoring([], undefined));
    assert.throws(() => scoring([], Infinity));
    assert.throws(() => scoring([], {}));
    assert.throws(() => scoring([], []));
    assert.doesNotThrow(() => scoring([], 33));
  });

  it(`GameOver (return -1)`, () => {
    let answer = scoring(TEST_QUERIES.gameOverTest1.answer,
        TEST_QUERIES.gameOverTest1.life);

    assert.isNumber(answer, `return expected number`);
    assert.equal(answer, -1);
  });

  it(`return is number`, () => {
    assert.isNumber(scoring(getplayerAnswers2(), 3));
  });

  it(`average time, all lives`, () => {
    let answer = scoring(TEST_QUERIES.returnsTest1.answer,
        TEST_QUERIES.returnsTest1.life);

    assert.isNumber(answer, `return expected number`);
    assert.equal(answer, 1150);
  });
});
