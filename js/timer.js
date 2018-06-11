const timer = (sec) => {
  if (typeof sec !== `number` || !isFinite(sec)) {
    throw new Error(`time must be a number`);
  }

  return {
    timer: sec,
    reduce() {
      this.timer--;
      return (this.timer) ? false : true;
    }
  };
};

export default timer;
