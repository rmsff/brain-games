import readlineSync from 'readline-sync';

const startGame = (getGameData, message) => {
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
    const gameData = getGameData();
    const userAnswer = readlineSync.question(`Question: ${gameData.question} `);
    console.log(`Your answer: ${userAnswer}`);

    if (String(gameData.answer) === userAnswer) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  iter(0);
};

export default startGame;
