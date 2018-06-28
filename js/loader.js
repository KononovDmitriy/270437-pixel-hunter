import application from './application.js';

export default class Loader {

  static loadData() {
    fetch(`https://es.dump.academy/pixel-hunter/questions`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
      })
      .then((data) => {
        application.initGame(data);
      })
      .catch(() => {
        application.showError();
      });
  }
}
