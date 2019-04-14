import startGame from '../index';
import { getRandom } from '../utils';

export const brainCalc = () => {
  const message = 'What is the result of the expression?';

  const func = (() => {
    const a = getRandom(0, 10);
    const b = getRandom(0, 10);
    const oper = getRandom(0, 3);
    const obj = {};

    switch (oper) {
      case 0:
        obj.ques = `Question: ${a} + ${b} = `;
        obj.answer = a + b;
        break;
      case 1:
        obj.ques = `Question: ${a} * ${b} = `;
        obj.answer = a * b;
        break;
      case 2:
        obj.ques = `Question: ${a} - ${b} = `;
        obj.answer = a - b;
        break;
      default: console.log('default switch');
    }

    return obj;
  });

  startGame(func, message);
};

export default brainCalc;
