export const truncate = (str: string, num: number) => {
  return str.length > num ? `${str.slice(0, num)}...` : str;
};
