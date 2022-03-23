export const topStoriesChange = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_TOPSTORIES":
      return (state = action.payload);

    default:
      return state;
  }
};
