import startGame from '../index';
import { getRandom, isPrime } from '../utils';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startbBrainPrime = () => {
  const getObjectFun = (() => {
    const question = getRandom(1, 501);
    const obj = {};
    obj.answer = isPrime(question) ? 'yes' : 'no';
    obj.ques = `${question}`;
    return obj;
  });

  startGame(getObjectFun, message);
};

export default startbBrainPrime;
