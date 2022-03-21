import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { filterSelect } from "./filterSelect";
const combinedReducers = combineReducers({
  //can also shorthand it to just counterReducer,
  // changeScore: changeScore,
  counterReducer: counterReducer,
  filterSelect: filterSelect,
});
export default combinedReducers;
