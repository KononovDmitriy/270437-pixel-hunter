const HIDE_DEBUG_ELEMENT_CLASS = `debug__display-none`;

export default class {
  get template() {
    throw new Error(`Template is required`);
  }

  render() {
    const element = document.createElement(`div`);
    element.innerHTML = this.template;

    return element;
  }

  bind() {}

  element(footer, header) {
    if (!this._element) {
      this._element = this.render(footer, header);
      this.bind(this._element);
    }

    return this._element;
  }

  getDebugClass(debug, answerType, pattern) {
    if (!debug) {
      return HIDE_DEBUG_ELEMENT_CLASS;
    }

    return (answerType === pattern) ? `` : HIDE_DEBUG_ELEMENT_CLASS;
  }
}
