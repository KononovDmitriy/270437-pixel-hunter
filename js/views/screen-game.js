import GameScreens from '../game-screen-types.js';

import screenGame1 from './screen-game-1.js';
import screenGame2 from './screen-game-2.js';
import screenGame3 from './screen-game-3.js';

export default (gameStatus, statisticsBar, callback) => {
  let gameScreenTemp;

  switch (gameStatus.currLevel.screen) {
    case GameScreens.SCREEN1:
      gameScreenTemp = screenGame1(gameStatus, statisticsBar, callback);
      break;
    case GameScreens.SCREEN2:
      gameScreenTemp = screenGame2(gameStatus, statisticsBar, callback);
      break;
    case GameScreens.SCREEN3:
      gameScreenTemp = screenGame3(gameStatus, statisticsBar, callback);
      break;
  }

  return gameScreenTemp;
};
