import { startGame, getRandom } from '../index';

export const brainCalc = () => {
  const message = 'What is the result of the expression?';

  const questionFun = (() => {
    const result = {
      a: getRandom(0, 10),
      b: getRandom(0, 10),
      oper: getRandom(0, 3),
      game: 'calc',
    };

    switch (result.oper) {
      case 0:
        result.oper = '+';
        break;
      case 1:
        result.oper = '*';
        break;
      case 2:
        result.oper = '-';
        break;
      default: result.oper = 'error';
    }
    return result;
  });

  const correctAnswerFun = ((question) => {
    switch (question.oper) {
      case '+': return String(question.a + question.b);
      case '*': return String(question.a * question.b);
      case '-': return String(question.a - question.b);
      default: return 'error';
    }
  });

  return startGame(correctAnswerFun, questionFun, message);
};

export default brainCalc;
