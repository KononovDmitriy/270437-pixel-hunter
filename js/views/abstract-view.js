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
}
