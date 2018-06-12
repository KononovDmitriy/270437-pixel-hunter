const mainNode = document.querySelector(`.central`);

export default {
  changeScreen: (screen) => {
    mainNode.innerHTML = ``;
    mainNode.appendChild(screen);
  },

  createDom: (template, header) => {
    const domObj = document.createElement(`div`);
    domObj.innerHTML = template;

    if (header) {
      domObj.insertBefore(header, domObj.firstChild);
    }

    return domObj;
  }
};
