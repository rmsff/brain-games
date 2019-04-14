import startGame from '../index';
import getRandom from '../utils';

const message = 'What is the result of the expression?';

const getOperator = () => {
  const number = getRandom(0, 3);
  return ['+', '-', '*'][number];
};

export const startBrainCalc = () => {
  const getGame = () => {
    const a = getRandom(0, 10);
    const b = getRandom(0, 10);
    const operator = getOperator();
    const game = {};

    switch (operator) {
      case '+':
        game.question = `${a} + ${b}`;
        game.answer = a + b;
        break;
      case '*':
        game.question = `${a} * ${b}`;
        game.answer = a * b;
        break;
      case '-':
        game.question = `${a} - ${b}`;
        game.answer = a - b;
        break;
      default:
    }

    return game;
  };

  startGame(getGame, message);
};

export default startBrainCalc;
