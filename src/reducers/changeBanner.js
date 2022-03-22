export const bannerChange = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_BANNER":
      return (state = action.payload);

    case "BANNER2":
      return (state = action.payload);

    case "BANNER3":
      return (state = action.payload);

    default:
      return state;
  }
};
