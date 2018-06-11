import {assert} from 'chai';
import timer from '../timer.js';

const testingTimer = (time) => {
  const tmpTimer = timer(time);

  for (let i = 0; i < time - 1; i++) {
    assert.isNotTrue(tmpTimer.reduce());
  }

  assert.isTrue(tmpTimer.reduce());
};

describe(`Module timer`, () => {
  it(`it should throw Error if the input value is not an number`, () => {
    assert.throws(() => timer(`15`));
    assert.throws(() => timer(null));
    assert.throws(() => timer(undefined));
    assert.throws(() => timer(Infinity));
    assert.throws(() => timer([]));
    assert.throws(() => timer({}));
    assert.doesNotThrow(() => timer(3333));
  });

  describe(`Test return values`, () => {
    it(`it should return Object`, () => {
      assert.isObject(timer(10));
      assert.isObject(timer(4444));
      assert.isObject(timer(1));
    });

    it(`it has 'reduce' property`, () => {
      const tmpTimer = timer(1);
      assert.equal(typeof tmpTimer.reduce, `function`);
    });
  });

  describe(`Test work`, () => {
    it(`it should return 'true' after 1 second`, () => {
      testingTimer(1);
    });

    it(`it should return 'true' after 5 second`, () => {
      testingTimer(5);
    });

    it(`it should return 'true' after 15 second`, () => {
      testingTimer(15);
    });

    it(`it should return 'true' after 55 second`, () => {
      testingTimer(55);
    });
  });
});
