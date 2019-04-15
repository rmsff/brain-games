import startGame from '../index';
import getRandom from '../utils';

const message = 'What is the result of the expression?';

const getOperator = () => {
  const startIndex = 0;
  const followingTheLastIndex = 3;
  const indexOperator = getRandom(startIndex, followingTheLastIndex);
  const arrayOfOperators = ['+', '-', '*'];
  return arrayOfOperators[indexOperator];
};

export const startBrainCalc = () => {
  const getGameData = () => {
    const a = getRandom(0, 10);
    const b = getRandom(0, 10);
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
