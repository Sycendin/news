export const filterSelect = (state = "NINTENDO", action) => {
  switch (action.type) {
    case "NINTENDO":
      return (state = "NINTENDO");
    case "PLAYSTATION":
      return (state = "PLAYSTATION");
    case "XBOX":
      return (state = "XBOX");
    case "PC":
      return (state = "PC");
    case "OTHER":
      return (state = "OTHER");
    default:
      return state;
  }
};
