export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getGCD = (a, b) => {
  if (b) {
    return getGCD(b, a % b);
  }
  return Math.abs(a);
};
