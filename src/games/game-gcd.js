import {
  startGame, getRandom, startMessage,
} from '../index';

const brainGCD = () => {
  const userName = startMessage('Find the greatest common divisor of given numbers.');

  const count = 0;
  const questionFun = (() => {
    const result = {
      a: getRandom(1, 21),
      b: getRandom(1, 21),
      game: 'gcd',
    };
    return result;
  });

  const correctAnswerFun = ((question) => {
    const A = question.a;
    const B = question.b;

    const getGCD = (a, b) => {
      if (b) {
        return getGCD(b, a % b);
      }
      return Math.abs(a);
    };
    return String(getGCD(A, B));
  });

  startGame(count, correctAnswerFun, userName, questionFun);
};

export default brainGCD;
