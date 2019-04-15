import startGame from '../index';
import getRandom from '../utils';

const message = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b) {
    return getGCD(b, a % b);
  }
  return Math.abs(a);
};

const startBrainGCD = () => {
  const getGameData = () => {
    const a = getRandom(1, 21);
    const b = getRandom(1, 21);
    const gameData = {};
    gameData.answer = String(getGCD(a, b));
    gameData.question = `${a} ${b}`;
    return gameData;
  };
  startGame(getGameData, message);
};

export default startBrainGCD;
