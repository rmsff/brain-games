import startGame from '../index';
import { getRandom } from '../utils';

const message = 'What is the result of the expression?';

export const startBrainCalc = () => {
  const getObjectFun = (() => {
    const a = getRandom(0, 10);
    const b = getRandom(0, 10);
    const operator = getRandom(0, 3);
    const obj = {};

    switch (operator) {
      case 0:
        obj.ques = `${a} + ${b}`;
        obj.answer = a + b;
        break;
      case 1:
        obj.ques = `${a} * ${b}`;
        obj.answer = a * b;
        break;
      case 2:
        obj.ques = `${a} - ${b}`;
        obj.answer = a - b;
        break;
      default:
    }

    return obj;
  });

  startGame(getObjectFun, message);
};

export default startBrainCalc;
