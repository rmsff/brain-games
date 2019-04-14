import startGame from '../index';
import { getRandom, getGCD } from '../utils';

const message = 'Find the greatest common divisor of given numbers.';

const startBrainGCD = () => {
  const getGame = (() => {
    const a = getRandom(1, 21);
    const b = getRandom(1, 21);
    const game = {};
    game.answer = getGCD(a, b);
    game.question = `${a} ${b}`;
    return game;
  });
  startGame(getGame, message);
};

export default startBrainGCD;
