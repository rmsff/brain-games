import {
  startGame, getRandom,
} from '../index';

const brainGCD = () => {
  const message = 'Find the greatest common divisor of given numbers.';

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

  startGame(correctAnswerFun, questionFun, message);
};

export default brainGCD;
