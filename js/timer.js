const timer = (sec) => {
  const Timer = function (usrTime) {
    this.time = usrTime;
    this.reduce = () => {
      this.time--;
      return (this.time > 0) ? false : true;
    };
  };

  if (typeof sec !== `number` || !isFinite(sec)) {
    throw new Error(`time must be a number`);
  }

  return new Timer(sec);
};

export default timer;
