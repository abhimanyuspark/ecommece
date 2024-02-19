const Ruppess = 83.06;

export const RuppessConverter = (value) => {
  //* 1 dollar = 83.06 Ruppess
  const convert = value * Ruppess;
  return Math.floor(convert);
};
