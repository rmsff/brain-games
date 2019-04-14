import startGame from '../index';
import { getRandom } from '../utils';

const message = 'What is the result of the expression?';

export const startBrainCalc = () => {
  const getGame = (() => {
    const a = getRandom(0, 10);
    const b = getRandom(0, 10);
    const operator = getRandom(0, 3);
    const game = {};

    switch (operator) {
      case 0:
        game.question = `${a} + ${b}`;
        game.answer = a + b;
        break;
      case 1:
        game.question = `${a} * ${b}`;
        game.answer = a * b;
        break;
      case 2:
        game.question = `${a} - ${b}`;
        game.answer = a - b;
        break;
      default:
    }

    return game;
  });

  startGame(getGame, message);
};

export default startBrainCalc;
