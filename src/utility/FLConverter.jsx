export const FLConverter = (value = "") => {
  if (value === "") return;
  const convert = value?.charAt(0).toUpperCase() + value?.slice(1);
  return convert;
};
