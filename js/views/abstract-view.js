export default class {
  get template() {
    throw new Error(`Template is required`);
  }

  render(footer, header) {
    const element = document.createElement(`div`);
    element.innerHTML = this.template;

    if (footer) {
      element.appendChild(footer);
    }

    if (header) {
      element.insertBefore(header, element.firstChild);
    }
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
