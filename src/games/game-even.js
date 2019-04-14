import startGame from '../index';
import { getRandom, isEven } from '../utils';

const message = 'Answer "yes" if number even otherwise answer "no".';

const startBrainEven = () => {
  const getObjectFun = (() => {
    const question = getRandom(1, 21);
    const obj = {};
    obj.answer = isEven(question) ? 'yes' : 'no';
    obj.ques = `${question}`;
    return obj;
  });

  startGame(getObjectFun, message);
};

export default startBrainEven;
