import readlineSync from 'readline-sync';

const startGame = (getGameData, message) => {
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Welcome to the Brain Games, ${userName}!`);
  console.log(message);
  const numberOfIterations = Number(readlineSync.question('How many questions do you want to answer? '));

  const iter = (count) => {
    if (count === numberOfIterations) {
      console.log(`Congratulations, ${userName}!`);
      // eslint-disable-next-line no-use-before-define
      replay();
      return;
    }
    const gameData = getGameData();
    const userAnswer = readlineSync.question(`Question: ${gameData.question} `);
    console.log(`Your answer: ${userAnswer}`);

    if (gameData.answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      // eslint-disable-next-line no-use-before-define
      return;
    }
    iter(count + 1);
  };

  const replay = () => {
    if (readlineSync.question('To play again? (yes/no) ') === 'yes') {
      if (readlineSync.question('Play the same game? (yes/no) ') === 'yes') {
        iter(0);
      } else {
        console.log('Choose a game from the list and just enter the name of the game!\nbrain-calc\nbrain-even\nbrain-gcd\nbrain-prime\nbrain-progression');
      }
    } else {
      console.log('Game over!\nBye-Bye!');
    }
  };

  iter(0);
};

export default startGame;
