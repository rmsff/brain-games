import startGame from '../index';
import getRandom from '../utils';

const message = 'What is the result of the expression?';

const getOperator = () => {
  const indexOperator = getRandom(0, 3);
  const arrayOfOperators = ['+', '-', '*'];
  return arrayOfOperators[indexOperator];
};

export const startBrainCalc = () => {
  const getGameData = () => {
    const a = getRandom(0, 9);
    const b = getRandom(0, 9);
    const operator = getOperator();
    const gameData = {};

    switch (operator) {
      case '+':
        gameData.question = `${a} + ${b}`;
        gameData.answer = String(a + b);
        break;
      case '*':
        gameData.question = `${a} * ${b}`;
        gameData.answer = String(a * b);
        break;
      case '-':
        gameData.question = `${a} - ${b}`;
        gameData.answer = String(a - b);
        break;
      default:
    }

    return gameData;
  };

  startGame(getGameData, message);
};

export default startBrainCalc;
