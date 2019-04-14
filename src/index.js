import readlineSync from 'readline-sync';

const startGame = (getGame, message) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(message);
  const numberOfIterations = 3;
  const iter = (count) => {
    if (count === numberOfIterations) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const game = getGame();
    const userAnswer = readlineSync.question(`Question: ${game.question} `);
    console.log(`Your answer: ${userAnswer}`);

    if (String(game.answer) === userAnswer) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${game.answer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  iter(0);
};

export default startGame;
