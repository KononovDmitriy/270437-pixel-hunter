const mainNode = document.querySelector(`.central`);

export default {
  changeScreen: (screen) => {
    mainNode.innerHTML = ``;
    mainNode.appendChild(screen);
  },

  createDom: (template, header) => {
    const domObject = document.createElement(`div`);
    domObject.innerHTML = template;

    if (header) {
      domObject.insertBefore(header, domObject.firstChild);
    }

    return domObject;
  }
};
