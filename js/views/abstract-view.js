export default class {
  get template() {
    throw new Error(`Template is required`);
  }

  render(header) {
    const element = document.createElement(`div`);

    element.innerHTML = this.template;

    if (header) {
      element.insertBefore(header, element.firstChild);
    }

    return element;
  }

  bind() {
    throw new Error(`bind is required`);
  }

  element(header) {
    if (!this._element) {
      this._element = (header) ? this.render(header) : this.render();
      this.bind(this._element);
    }

    return this._element;
  }
}
