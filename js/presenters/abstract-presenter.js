export default class AbstractPresenter {
  constructor(view, gameModel) {
    this._gameModel = gameModel;
    this._view = view;

    this._view.viewCallback = (answer) => {
      this.callback(answer);
    };
  }

  callback() {}

  start() {
    return this._view.element();
  }
}
