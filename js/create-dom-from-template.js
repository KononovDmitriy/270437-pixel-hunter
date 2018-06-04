// create-dom-from-template.js

const createDom = (template) => {
  const domObj = document.createElement(`div`);
  domObj.innerHTML = template;

  return domObj;
};

export default createDom;
