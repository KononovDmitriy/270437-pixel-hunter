import {assert} from 'chai';
import scoring from '../scoring.js';

const TEST_QUERIES = {
  gameOverTest1: {
    answers: [{answer: true, time: 12}, {answer: true, time: 12},
      {answer: false, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: false, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12}],
    lives: 3,
  },

  gameOverTest2: {
    answers: [{answer: false, time: 12}, {answer: false, time: 12},
      {answer: false, time: 12}, {answer: false, time: 12}, {answer: false, time: 12},
      {answer: false, time: 12}, {answer: false, time: 12}, {answer: false, time: 12},
      {answer: false, time: 12}, {answer: false, time: 12}],
    lives: 3,
  },

  gameOverTest3: {
    answers: [{answer: false, time: 12}],
    lives: 3,
  },

  returnsTest1: {
    answers: [{answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}, {answer: true, time: 12},
      {answer: true, time: 12}, {answer: true, time: 12}],
    lives: 3,
    return: 1150
  },

  returnsTest2: {
    answers: [{answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}],
    lives: 1,
    return: 1550
  },

  returnsTest3: {
    answers: [{answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}, {answer: true, time: 8},
      {answer: true, time: 8}, {answer: true, time: 8}],
    lives: 3,
    return: 1650
  },

  returnsTest4: {
    answers: [{answer: true, time: 50}, {answer: true, time: 20},
      {answer: true, time: 10}, {answer: true, time: 8}, {answer: true, time: 12},
      {answer: true, time: 5}, {answer: true, time: 99}, {answer: true, time: 66},
      {answer: true, time: 3}, {answer: true, time: 1}],
    lives: 2,
    return: 1150
  },

  returnsTest5: {
    answers: [{answer: true, time: 30}, {answer: true, time: 35},
      {answer: true, time: 30}, {answer: true, time: 20}, {answer: true, time: 20},
      {answer: true, time: 21}, {answer: true, time: 19}, {answer: true, time: 19},
      {answer: true, time: 18}, {answer: true, time: 21}],
    lives: 2,
    return: 850
  },

  returnsTest6: {
    answers: [{answer: true, time: 30}, {answer: true, time: 35},
      {answer: true, time: 30}, {answer: true, time: 20}, {answer: true, time: 20},
      {answer: true, time: 21}, {answer: false, time: 19}, {answer: true, time: 19},
      {answer: true, time: 18}, {answer: true, time: 21}, {answer: true, time: 18},
      {answer: false, time: 21}],
    lives: 2,
    return: 800
  },

  returnsTest7: {
    answers: [{answer: true, time: 8}, {answer: true, time: 35},
      {answer: true, time: 30}, {answer: true, time: 20}, {answer: true, time: 20},
      {answer: true, time: 21}, {answer: false, time: 5}, {answer: true, time: 19},
      {answer: true, time: 3}, {answer: true, time: 21}, {answer: true, time: 18},
      {answer: false, time: 21}, {answer: false, time: 2}, {answer: true, time: 21}],
    lives: 1,
    return: 1050
  },


};

describe(`Module scoring`, () => {

  it(`it should throw Error if the first input value is not an array`, () => {
    assert.throws(() => scoring(`gg`, 33));
    assert.throws(() => scoring(33, 33));
    assert.throws(() => scoring(null, 33));
    assert.throws(() => scoring(undefined, 33));
    assert.throws(() => scoring(Infinity, 33));
    assert.throws(() => scoring({}, 33));
    assert.doesNotThrow(() => scoring([], 33));
  });

  it(`it should throw Error if the second input value is not an number`, () => {
    assert.throws(() => scoring([], `gg`));
    assert.throws(() => scoring([], null));
    assert.throws(() => scoring([], undefined));
    assert.throws(() => scoring([], Infinity));
    assert.throws(() => scoring([], {}));
    assert.throws(() => scoring([], []));
    assert.doesNotThrow(() => scoring([], 33));
  });

  it(`it should return -1`, () => {
    assert.equal(scoring(TEST_QUERIES.gameOverTest1.answers,
        TEST_QUERIES.gameOverTest1.lives), -1);

    assert.equal(scoring(TEST_QUERIES.gameOverTest2.answers,
        TEST_QUERIES.gameOverTest2.lives), -1);

    assert.equal(scoring(TEST_QUERIES.gameOverTest3.answers,
        TEST_QUERIES.gameOverTest3.lives), -1);
  });

  it(`it should return correct values`, () => {
    assert.equal(scoring(TEST_QUERIES.returnsTest1.answers,
        TEST_QUERIES.returnsTest1.lives), TEST_QUERIES.returnsTest1.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest2.answers,
        TEST_QUERIES.returnsTest2.lives), TEST_QUERIES.returnsTest2.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest3.answers,
        TEST_QUERIES.returnsTest3.lives), TEST_QUERIES.returnsTest3.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest4.answers,
        TEST_QUERIES.returnsTest4.lives), TEST_QUERIES.returnsTest4.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest5.answers,
        TEST_QUERIES.returnsTest5.lives), TEST_QUERIES.returnsTest5.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest6.answers,
        TEST_QUERIES.returnsTest6.lives), TEST_QUERIES.returnsTest6.return);

    assert.equal(scoring(TEST_QUERIES.returnsTest7.answers,
        TEST_QUERIES.returnsTest7.lives), TEST_QUERIES.returnsTest7.return);

  });
});
