
import readlineSync from 'readline-sync';

const brainEven = () => {
  const getRandomInt = (min = 1, max = 21) => Math.floor(Math.random() * (max - min)) + min;
  const isEver = number => number % 2 === 0;

  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);

  const startGame = (correctAnswersCount) => {
    if (correctAnswersCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const number = getRandomInt();
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);

    if (isEver(number) && userAnswer === 'yes') {
      console.log('Correct!');
      startGame(correctAnswersCount + 1);
    }
    const correctAnswer = isEver(number) && userAnswer === 'yes' ? 'yes' : 'no';
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  };

  return startGame();
};
export default brainEven;
