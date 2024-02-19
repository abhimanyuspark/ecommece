export const FLConverter = (value = String("")) => {
  const convert = value.charAt(0).toUpperCase() + value.slice(1);
  return convert;
};
