import startGame from '../index';
import getRandom from '../utils';

const message = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const startBrainEven = () => {
  const getGame = () => {
    const question = getRandom(1, 21);
    const gameData = {};
    gameData.answer = isEven(question) ? 'yes' : 'no';
    gameData.question = `${question}`;
    return gameData;
  };

  startGame(getGame, message);
};

export default startBrainEven;
