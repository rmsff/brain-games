import startGame from '../index';
import getRandom from '../utils';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, divider = 2) => {
  if (number < 2) return false;
  if (number / 2 < divider) return true;
  if (number % divider === 0) return false;
  return isPrime(number, divider + 1);
};

const startbBrainPrime = () => {
  const getGame = () => {
    const question = getRandom(1, 501);
    const gameData = {};
    gameData.answer = isPrime(question) ? 'yes' : 'no';
    gameData.question = `${question}`;
    return gameData;
  };

  startGame(getGame, message);
};

export default startbBrainPrime;
