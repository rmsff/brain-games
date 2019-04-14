import startGame from '../index';
import { getRandom } from '../utils';

const brainProgression = () => {
  const message = 'What number is missing in the progression?';

  const func = (() => {
    const step = getRandom(2, 9);
    const answRand = getRandom(0, 9);
    const startNum = getRandom(7, 17);
    const obj = {};

    const iter = (count, num, acc) => {
      if (count === 10) {
        obj.ques = `${acc} => `;
        return;
      }

      const numb = num + step;
      const value = `${acc} ${count === answRand ? '..' : numb}`;
      if (count === answRand) obj.answer = numb;

      iter(count + 1, numb, value);
    };
    iter(0, startNum, '');

    return obj;
  });

  startGame(func, message);
};

export default brainProgression;
