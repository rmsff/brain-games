export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGCD = (a, b) => {
  if (b) {
    return getGCD(b, a % b);
  }
  return Math.abs(a);
};

export const isEven = number => (number % 2 === 0);
export const isPrime = (num) => {
  if (num >= 0) {
    switch (num) {
      case 0:
      case 1:
        return false;
      case 2:
        return true;
      default:
        for (let i = 2; i < num; i + 1) {
          if (num % i === 0) return false;
        }
        return true;
    }
  } else {
    return false;
  }
};
