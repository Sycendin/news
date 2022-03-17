import { combineReducers } from "redux";
import { counterReducer } from "./counter";
const combinedReducers = combineReducers({
  //can also shorthand it to just counterReducer,
  // changeScore: changeScore,
  counterReducer: counterReducer,
});
export default combinedReducers;
