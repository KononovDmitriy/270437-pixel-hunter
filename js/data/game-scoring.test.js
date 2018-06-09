import {assert} from 'chai';
import scoring from '../scoring.js';

const TEST_QUERIES = {
  gameOverTest1: {
    answer: [{answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: false, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}],
    life: 3,
  },

  gameOverTest2: {
    answer: [{answer: false, time: 12}, {answer: false, time: 12},
      {answer: false, time: 12}, {answer: false, time: 12}, {answer: false, time: 12},
      {answer: false, time: 12}, {answer: false, time: 12}, {answer: false, time: 12},
      {answer: false, time: 12}, {answer: false, time: 12}],
    life: 3,
  },

  gameOverTest3: {
    answer: [{answer: false, time: 12}],
    life: 3,
  },

  returnsTest1: {
    answer: [{answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}],
    life: 3,
    return: 1150
  },

  returnsTest2: {
    answer: [{answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}],
    life: 1,
    return: 1550
  },

  returnsTest3: {
    answer: [{answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}],
    life: 3,
    return: 1650
  },

  returnsTest4: {
    answer: [{answer: true, time: 50}, {answer: true, time: 20},
      {answer: true, time: 10}, {answer: true, time: 8}, {answer: true, time: 12},
      {answer: true, time: 5}, {answer: true, time: 99}, {answer: true, time: 66},
      {answer: true, time: 3}, {answer: true, time: 1}],
    life: 2,
    return: 1150
  },

  returnsTest5: {
    answer: [{answer: true, time: 30}, {answer: true, time: 35},
      {answer: true, time: 30}, {answer: true, time: 20}, {answer: true, time: 20},
      {answer: true, time: 21}, {answer: true, time: 19}, {answer: true, time: 19},
      {answer: true, time: 18}, {answer: true, time: 21}],
    life: 2,
    return: 850
  },
};

describe(`Module scoring`, () => {

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

  it(`gameOver (return -1)`, () => {
    assert.equal(scoring(TEST_QUERIES.gameOverTest1.answer,
        TEST_QUERIES.gameOverTest1.life), -1);

    assert.equal(scoring(TEST_QUERIES.gameOverTest2.answer,
        TEST_QUERIES.gameOverTest2.life), -1);

    assert.equal(scoring(TEST_QUERIES.gameOverTest2.answer,
        TEST_QUERIES.gameOverTest2.life), -1);
  });

  it(`return is number`, () => {
    assert.isNumber(scoring(TEST_QUERIES.returnsTest1.answer,
        TEST_QUERIES.returnsTest1.life));

    assert.isNumber(scoring(TEST_QUERIES.returnsTest2.answer,
        TEST_QUERIES.returnsTest2.life));

    assert.isNumber(scoring(TEST_QUERIES.returnsTest3.answer,
        TEST_QUERIES.returnsTest3.life));

    assert.isNumber(scoring(TEST_QUERIES.returnsTest4.answer,
        TEST_QUERIES.returnsTest4.life));

    assert.isNumber(scoring(TEST_QUERIES.returnsTest5.answer,
        TEST_QUERIES.returnsTest5.life));
  });

  it(`return values`, () => {
    assert.equal(scoring(TEST_QUERIES.returnsTest1.answer,
        TEST_QUERIES.returnsTest1.life), TEST_QUERIES.returnsTest1.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest2.answer,
        TEST_QUERIES.returnsTest2.life), TEST_QUERIES.returnsTest2.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest3.answer,
        TEST_QUERIES.returnsTest3.life), TEST_QUERIES.returnsTest3.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest4.answer,
        TEST_QUERIES.returnsTest4.life), TEST_QUERIES.returnsTest4.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest5.answer,
        TEST_QUERIES.returnsTest5.life), TEST_QUERIES.returnsTest5.return);
  });
});
