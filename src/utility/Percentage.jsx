export const Percentage = (value, percentage) => {
  // Calculate the discount value
  const discount = (value * percentage) / 100;

  const convert = value - discount;

  // Return the discount value
  return Math.floor(convert);
};
