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
    const game = {};
    game.answer = isPrime(question) ? 'yes' : 'no';
    game.question = `${question}`;
    return game;
  };

  startGame(getGame, message);
};

export default startbBrainPrime;
