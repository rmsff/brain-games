import readlineSync from 'readline-sync';

const startGame = (getObjectFun, message) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(message);

  const iter = (count) => {
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const obj = getObjectFun();
    const userAnswer = readlineSync.question(`Question: ${obj.ques} `);
    console.log(`Your answer: ${userAnswer}`);

    if (String(obj.answer) === userAnswer) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${obj.answer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  iter(0);
};

export default startGame;
