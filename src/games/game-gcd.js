import startGame from '../index';
import { getRandom, getGCD } from '../utils';

const brainGCD = () => {
  const message = 'Find the greatest common divisor of given numbers.';

  const func = (() => {
    const a = getRandom(1, 21);
    const b = getRandom(1, 21);
    const obj = {};
    obj.answer = getGCD(a, b);
    obj.ques = `Question: ${a} ${b} => `;
    return obj;
  });
  startGame(func, message);
};

export default brainGCD;
