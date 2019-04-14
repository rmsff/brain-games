import startGame from '../index';
import { getRandom } from '../utils';

const message = 'What number is missing in the progression?';

const getQuestion = (step, questionLength, startNum) => {
  const iter = (count, num, acc) => {
    if (count === 10) return acc;
    const numb = num + step;
    const value = `${acc} ${count === questionLength ? '..' : numb}`;
    return iter(count + 1, numb, value);
  };
  return iter(0, startNum, '');
};
const getAnswer = (step, questionLength, startNum) => {
  const iter = (count, num) => {
    const numb = num + step;
    if (count === questionLength) return numb;
    return iter(count + 1, numb);
  };
  return iter(0, startNum);
};
const startBrainProgress = () => {
  const getObjectFun = (() => {
    const step = getRandom(2, 9);
    const questionLength = getRandom(0, 9);
    const startNum = getRandom(7, 17);
    const obj = {
      ques: getQuestion(step, questionLength, startNum),
      answer: getAnswer(step, questionLength, startNum),
    };
    return obj;
  });

  startGame(getObjectFun, message);
};

export default startBrainProgress;
