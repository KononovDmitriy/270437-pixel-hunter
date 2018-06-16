const ErrorMessages = {
  NOT_NUMBER: `time must be a number`
};

const timer = (sec) => {
  if (typeof sec !== `number` || !isFinite(sec)) {
    throw new Error(ErrorMessages.NOT_NUMBER);
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
