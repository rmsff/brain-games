
import readlineSync from 'readline-sync';

export const isEven = number => number % 2 === 0;
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const startGame = (funCorrect, funQuestion, message) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(message);

  const getUserAnswer = (value) => {
    switch (value.game) {
      case 'even':
        return readlineSync.question(`Question: ${value.a} => `);
      case 'calc':
        return readlineSync.question(`Question: ${value.a} ${value.oper} ${value.b} => `);
      case 'gcd':
        return readlineSync.question(`Question: ${value.a} ${value.b} => `);
      default: return 'error';
    }
  };

  const iter = (count, correctAnswerFun, questionFun) => {
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
      iter(count + 1, correctAnswerFun, questionFun);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  };
  iter(0, funCorrect, funQuestion);
};
