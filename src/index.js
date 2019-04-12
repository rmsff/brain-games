
import readlineSync from 'readline-sync';

export const start = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const brainEven = () => {
  const userName = start('Answer "yes" if number even otherwise answer "no".');
  const isEver = number => number % 2 === 0;

  const startBrainEven = (correctAnswersCount) => {
    if (correctAnswersCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const number = getRandom(1, 21);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);

    const correctAnswer = isEver(number) ? 'yes' : 'no';
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      startBrainEven(correctAnswersCount + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  };

  startBrainEven(0);
};

export const brainCalc = () => {
  const userName = start('What is the result of the expression?');

  const getExpression = (a, b, operator) => {
    switch (operator) {
      case 0: return `(${a} + ${b})`;
      case 1: return `(${a} * ${b})`;
      case 2: return `(${a} - ${b})`;
      default: return 'error';
    }
  };
  const getCorrectAnswer = (a, b, operator) => {
    switch (operator) {
      case 0: return String(a + b);
      case 1: return String(a * b);
      case 2: return String(a - b);
      default: return 'error';
    }
  };

  const startBrainCalc = (correctAnswersCount) => {
    if (correctAnswersCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const a = getRandom(0, 11);
    const b = getRandom(0, 11);
    const operator = getRandom(0, 3);
    const expression = getExpression(a, b, operator);
    const correctAnswer = getCorrectAnswer(a, b, operator);

    const userAnswer = readlineSync.question(`Question: ${expression} `);
    console.log(`Your answer: ${userAnswer}`);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      startBrainCalc(correctAnswersCount + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  };

  return startBrainCalc(0);
};
