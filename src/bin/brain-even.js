#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
  const getRandomInt = (min = 1, max = 21) => Math.floor(Math.random() * (max - min)) + min;
  const checkAnswer = number => ((number % 2 === 0) ? 'yes' : 'no');

  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);

  const startGame = (numberOfCorrectAnswers = 0) => {
    if (numberOfCorrectAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const number = getRandomInt();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);

    const correctAnswer = checkAnswer(number);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      // eslint-disable-next-line consistent-return
      return startGame(numberOfCorrectAnswers + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  };
  return startGame();
};

brainEven();
