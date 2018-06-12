import main from '../main.js';

export default (gameStatus) => {

  let curLives = gameStatus.lives;
  const lives = [];

  for (let i = 0; i < 3; i++) {
    lives.unshift((curLives > 0) ? `img/heart__full.svg` : `img/heart__empty.svg`);
    curLives--;
  }

  const header = document.createElement(`header`);
  header.classList.add(`header`);
  header.innerHTML = `
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        <img src="${lives[0]}" class="game__heart" alt="Life" width="32" height="32">
        <img src="${lives[1]}" class="game__heart" alt="Life" width="32" height="32">
        <img src="${lives[2]}" class="game__heart" alt="Life" width="32" height="32">
      </div>`;

  header.querySelector(`button`).addEventListener(`click`, () => {
    main.changeGreetengScreen();
  });

  return header;
};
