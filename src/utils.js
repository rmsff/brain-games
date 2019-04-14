export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGCD = (a, b) => {
  if (b) {
    return getGCD(b, a % b);
  }
  return Math.abs(a);
};

export const isEven = number => (number % 2 === 0);
export const isPrime = (number, divider = 2) => {
  if (number / 2 < divider) return true;
  if (number % divider === 0) return false;
  return isPrime(number, divider + 1);
};
