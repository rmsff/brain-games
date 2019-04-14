import startGame from '../index';
import { getRandom } from '../utils';

const brainEven = () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  const func = (() => {
    const a = getRandom(1, 21);
    const obj = {};
    obj.answer = (a % 2 === 0) ? 'yes' : 'no';
    obj.ques = `Question: ${a} => `;
    return obj;
  });

  startGame(func, message);
};

export default brainEven;
