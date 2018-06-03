// utils.js

export default {
  changeScreen: (screen) => {
    const mainNode = document.querySelector(`.central`);

    mainNode.innerHTML = ``;
    mainNode.appendChild(screen);
  },

  createDom: (template) => {
    const domObj = document.createElement(`div`);
    domObj.innerHTML = template;

    return domObj;
  }
};
