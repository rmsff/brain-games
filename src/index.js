
import readlineSync from 'readline-sync';

export const startMessage = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getUserAnswer = (question) => {
  switch (question.game) {
    case 'ever':
      return readlineSync.question(`Question: ${question.a} => `);
    case 'calc':
      return readlineSync.question(`Question: ${question.a} ${question.operator} ${question.b} =>`);
    case 'gcd':
      return readlineSync.question(`Question: ${question.a} ${question.b} => `);
    default: return 'error';
  }
};

const isEver = number => number % 2 === 0;

const startGame = (count, correctAnswerFun, userName, questionFun) => {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const question = questionFun();
  const userAnswer = getUserAnswer(question);
  const correctAnswer = correctAnswerFun(question);
  console.log(`Your answer: ${userAnswer}`);

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    startGame(count + 1, correctAnswerFun, userName, questionFun);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
};

export const brainEven = () => {
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

export const brainGCD = () => {
  const userName = startMessage('Find the greatest common divisor of given numbers.');

  const count = 0;
  const questionFun = (() => {
    const result = {
      a: getRandom(1, 21),
      b: getRandom(1, 21),
      game: 'gcd',
    };
    return result;
  });

  const correctAnswerFun = ((question) => {
    const A = question.a;
    const B = question.b;

    const getGCD = (a, b) => {
      if (b) {
        return getGCD(b, a % b);
      }
      return Math.abs(a);
    };
    return String(getGCD(A, B));
  });

  startGame(count, correctAnswerFun, userName, questionFun);
};
