import startGame from '../index';
import { getRandom, getGCD } from '../utils';

const message = 'Find the greatest common divisor of given numbers.';

const startBrainGCD = () => {
  const getObjectFun = (() => {
    const a = getRandom(1, 21);
    const b = getRandom(1, 21);
    const obj = {};
    obj.answer = getGCD(a, b);
    obj.ques = `${a} ${b}`;
    return obj;
  });
  startGame(getObjectFun, message);
};

export default startBrainGCD;
