import startGame from '../index';
import { getRandom, isPrime } from '../utils';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startbBrainPrime = () => {
  const getGame = (() => {
    const question = getRandom(1, 501);
    const game = {};
    game.answer = isPrime(question) ? 'yes' : 'no';
    game.question = `${question}`;
    return game;
  });

  startGame(getGame, message);
};

export default startbBrainPrime;
