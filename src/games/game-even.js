import startGame from '../index';
import { getRandom, isEven } from '../utils';

const brainEven = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const func = (() => {
    const question = getRandom(1, 21);
    const obj = {};
    obj.answer = isEven(question);
    obj.ques = `${question}`;
    return obj;
  });

  startGame(func, message);
};

export default brainEven;
