// change-screen.js

const changeScreen = (screen) => {
  const mainNode = document.querySelector(`.central`);

  mainNode.innerHTML = ``;
  mainNode.appendChild(screen);

};

export default changeScreen;
