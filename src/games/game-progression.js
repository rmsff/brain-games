import startGame from '../index';
import { getRandom } from '../utils';

const message = 'What number is missing in the progression?';

const getQuestion = (step, index, startNum) => {
  const iter = (count, num, acc) => {
    if (count === 10) return acc;
    const number = num + step;
    const value = `${acc} ${count === index ? '..' : number}`;
    return iter(count + 1, number, value);
  };
  return iter(0, startNum, '');
};

const startBrainProgress = () => {
  const getGame = (() => {
    const step = getRandom(2, 9);
    const index = getRandom(0, 9);
    const startNum = getRandom(7, 17);
    const game = {
      question: getQuestion(step, index, startNum),
      answer: startNum + step * (index + 1),
    };
    return game;
  });

  startGame(getGame, message);
};

export default startBrainProgress;
