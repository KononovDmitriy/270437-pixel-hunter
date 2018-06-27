
export default class Loader {

  static loadData(successCallback, errorCallback) {
    fetch(`https://es.dump.academy/pixel-hunter/questions`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
      })
      .catch((error) => {
        errorCallback(error);
      })
      .then((data) => {
        successCallback(data);
      });
  }
}
