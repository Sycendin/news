export const increment = (num = 0) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const nintendo = (num = 0) => {
  return {
    type: "NINTENDO",
    payload: num,
  };
};

export const xbox = (num = 0) => {
  return {
    type: "XBOX",
    payload: num,
  };
};

export const playStation = (num = 0) => {
  return {
    type: "PLAYSTATION",
    payload: num,
  };
};

export const pc = (num = 0) => {
  return {
    type: "PC",
    payload: num,
  };
};

export const other = (num = 0) => {
  return {
    type: "OTHER",
    payload: num,
  };
};

export const changeBanner = (url = 0) => {
  return {
    type: "CHANGE_BANNER",
    payload: url,
  };
};
export const changeTopStories = (url = 0) => {
  return {
    type: "CHANGE_TOPSTORIES",
    payload: url,
  };
};
export const changeGuides = (url = 0) => {
  return {
    type: "CHANGE_GUIDES",
    payload: url,
  };
};

export const bannerLoad = (url = 0) => {
  return {
    type: "LOAD_BANNER",
    payload: url,
  };
};
