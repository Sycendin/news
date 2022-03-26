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
export const bannerLoading = (state = false, action) => {
  switch (action.type) {
    case "LOAD_BANNER":
      return (state = true);

    default:
      return state;
  }
};
