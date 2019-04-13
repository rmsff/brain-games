import {
  startGame, getRandom, isEven,
} from '../index';

const brainEven = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';

  const questionFun = (() => {
    const result = {
      a: getRandom(1, 21),
      game: 'even',
    };
    return result;
  });

  const correctAnswerFun = ((question) => {
    const number = question.a;
    return (isEven(number) ? 'yes' : 'no');
  });

  startGame(correctAnswerFun, questionFun, message);
};

export default brainEven;
