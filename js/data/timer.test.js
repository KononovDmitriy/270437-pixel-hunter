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
  it(`Incoming argument is a number`, () => {
    assert.throws(() => timer(`15`));
    assert.throws(() => timer(null));
    assert.throws(() => timer(undefined));
    assert.throws(() => timer(Infinity));
    assert.throws(() => timer([]));
    assert.throws(() => timer({}));
    assert.doesNotThrow(() => timer(3333));
  });

  describe(`Return values`, () => {
    it(`Return value - Object`, () => {
      assert.isObject(timer(10));
      assert.isObject(timer(4444));
      assert.isObject(timer(1));
    });

    it(`object has a method reduce`, () => {
      const tmpTimer = timer(1);
      assert.equal(typeof tmpTimer.reduce, `function`);
    });
  });

  describe(`Testing work`, () => {
    it(`timer - 1s`, () => {
      testingTimer(1);
    });

    it(`timer - 5s`, () => {
      testingTimer(5);
    });

    it(`timer - 15s`, () => {
      testingTimer(15);
    });

    it(`timer - 55s`, () => {
      testingTimer(55);
    });
  });
});
