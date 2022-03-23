import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { filterSelect } from "./filterSelect";
import { bannerChange } from "./changeBanner";
import { topStoriesChange } from "./changeTopStories";
import { guideChange } from "./changeGuides";
const combinedReducers = combineReducers({
  //can also shorthand it to just counterReducer,
  // changeScore: changeScore,
  counterReducer: counterReducer,
  filterSelect: filterSelect,
  bannerChange: bannerChange,
  guideChange: guideChange,
  topStoriesChange: topStoriesChange,
});
export default combinedReducers;
