export default class {
  get template() {
    throw new Error(`Template is required`);
  }

  render() {
    const element = document.createElement(`div`);
    element.innerHTML = this.template;

    return element;
  }

  bind() {
    throw new Error(`bind is required`);
  }

  element() {
    if (!this._element) {
      this._element = this.render();
      this.bind(this._element);
    }

    return this._element;
  }
}
