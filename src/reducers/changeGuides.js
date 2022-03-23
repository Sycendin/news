export const guideChange = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_GUIDES":
      return (state = action.payload);
    default:
      return state;
  }
};
