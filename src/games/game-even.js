import {
  startGame, getRandom, startMessage, isEver,
} from '../index';

const brainEven = () => {
  const userName = startMessage('Answer "yes" if number even otherwise answer "no".');

  const count = 0;
  const questionFun = (() => {
    const result = {
      a: getRandom(1, 21),
      game: 'ever',
    };
    return result;
  });

  const correctAnswerFun = ((question) => {
    const number = question.a;
    return (isEver(number) ? 'yes' : 'no');
  });

  startGame(count, correctAnswerFun, userName, questionFun);
};

export default brainEven;
