import { startGame, getRandom, startMessage } from '../index';

export const brainCalc = () => {
  const userName = startMessage('What is the result of the expression?');
  const count = 0;
  const questionFun = (() => {
    const result = {
      a: getRandom(0, 10),
      b: getRandom(0, 10),
      operator: getRandom(0, 3),
      game: 'calc',
    };

    switch (result.operator) {
      case 0:
        result.operator = '+';
        break;
      case 1:
        result.operator = '*';
        break;
      case 2:
        result.operator = '-';
        break;
      default: result.operator = 'error';
    }
    return result;
  });

  const correctAnswerFun = ((question) => {
    switch (question.operator) {
      case '+': return String(question.a + question.b);
      case '*': return String(question.a * question.b);
      case '-': return String(question.a - question.b);
      default: return 'error';
    }
  });

  return startGame(count, correctAnswerFun, userName, questionFun);
};

export default brainCalc;
