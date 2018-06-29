const restApiAddresses = {
  LEVELS_DATA: `https://es.dump.academy/pixel-hunter/questions`,
  STATISTICS: `https://es.dump.academy/pixel-hunter/stats`,
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const parsingJson = (response) => {
  return response.json();
};

export default class Loader {

  static loadData() {
    return fetch(restApiAddresses.LEVELS_DATA)
      .then(checkStatus)
      .then(parsingJson);
  }

  static saveStatistic(appId, userName, data) {

    const requestInit = {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      },
      body: data
    };

    const request = new Request(`${restApiAddresses.STATISTICS}/${appId}-${userName}`,
        requestInit);

    return fetch(request)
      .then(checkStatus);
  }

  static loadStatistic(appId, userName) {
    return fetch(`${restApiAddresses.STATISTICS}/${appId}-${userName}`)
      .then(checkStatus)
      .then(parsingJson);
  }
}
