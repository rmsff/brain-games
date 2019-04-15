import startGame from '../index';
import getRandom from '../utils';

const message = 'What number is missing in the progression?';

const getQuestion = (step, index, startNum) => {
  const iter = (count, num, acc) => {
    const numberOfDigits = 10;
    if (count === numberOfDigits) return acc;
    const number = num + step;
    const value = `${acc} ${count === index ? '..' : number}`;
    return iter(count + 1, number, value);
  };
  return iter(0, startNum, '');
};

const startBrainProgress = () => {
  const getGameData = () => {
    const step = getRandom(2, 9);
    const hiddenNumberIndex = getRandom(0, 9);
    const startNum = getRandom(7, 17);
    const gameData = {
      question: getQuestion(step, hiddenNumberIndex, startNum),
      answer: String(startNum + step * (hiddenNumberIndex + 1)),
    };
    return gameData;
  };

  startGame(getGameData, message);
};

export default startBrainProgress;
