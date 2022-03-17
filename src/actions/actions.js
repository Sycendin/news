export const increment = (num = 0) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
