import symbols from '../../data/symbols';

export const calculate = (num1, num2) => {
  let result = num1 * num2;
  return result.toLocaleString()
};

export const getLabel = (key) => {
  return symbols[key];
};
