const restApiAddresses = {
  LEVELS_DATA: `https://es.dump.academy/pixel-hunter/questions`,
  STATISTICS: `https://es.dump.academy/pixel-hunter/stats/`,
};

export default class Loader {
  static loadData() {
    return fetch(restApiAddresses.LEVELS_DATA)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
      });
  }

  static saveStatistic(appId, userName, data) {
    const headers = new Headers();
    headers.append(`Content-Type`, `application/json`);

    const request = new Request(`${restApiAddresses.STATISTICS}/${appId}-${userName}`,
        headers);

    return fetch(request)
      .then((response) => {
        if (response.ok) {
          console.log('save OK');
        } else {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
      });
  }
}
