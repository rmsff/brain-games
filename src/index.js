
import readlineSync from 'readline-sync';

export const startMessage = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

export const isEver = number => number % 2 === 0;

export const startGame = (count, correctAnswerFun, userName, questionFun) => {
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
