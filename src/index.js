
import readlineSync from 'readline-sync';

export const startMessage = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getUserAnswer = qestion => readlineSync.question(`Question: ${qestion} `);
const isEver = number => number % 2 === 0;
const startGame = (count, correctAnswerFun, userName, questionFun) => {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const qestion = questionFun();
  const userAnswer = getUserAnswer(qestion);
  const correctAnswer = correctAnswerFun(qestion);
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
  const questionFun = (() => getRandom(1, 21));
  const correctAnswerFun = (number => (isEver(number) ? 'yes' : 'no'));

  startGame(count, correctAnswerFun, userName, questionFun);
};

export const brainCalc = () => {
  const userName = startMessage('What is the result of the expression?');
  const count = 0;
  const qestionFun = (() => {
    const a = getRandom(0, 10);
    const b = getRandom(0, 10);
    const operator = getRandom(0, 3);

    switch (operator) {
      case 0: return `${a} + ${b}`;
      case 1: return `${a} * ${b}`;
      case 2: return `${a} - ${b}`;
      default: return 'error';
    }
  });
  const correctAnswerFun = ((qestion) => {
    const a = Number(qestion[0]);
    const b = Number(qestion[4]);
    const operator = qestion[2];

    switch (operator) {
      case '+': return String(a + b);
      case '*': return String(a * b);
      case '-': return String(a - b);
      default: return 'error';
    }
  });

  return startGame(count, correctAnswerFun, userName, qestionFun);
};
