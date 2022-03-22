import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { filterSelect } from "./filterSelect";
import { bannerChange } from "./changeBanner";
const combinedReducers = combineReducers({
  //can also shorthand it to just counterReducer,
  // changeScore: changeScore,
  counterReducer: counterReducer,
  filterSelect: filterSelect,
  bannerChange: bannerChange,
});
export default combinedReducers;
