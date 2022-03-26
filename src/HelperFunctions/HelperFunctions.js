import { useDispatch } from "react-redux";
import { changeTopStories, changeGuides } from "../actions/actions";
export const PathFinder = (paths, type) => {
  let error = false;
  const dispatch = useDispatch();
  const currentUrl = window.location.pathname;
  let foundPath = paths.find((singlePath) => singlePath.path === currentUrl);

  // If url exists render page normally
  if (foundPath !== undefined) {
    if (type === "top") {
      dispatch(changeTopStories(foundPath.content));
    } else {
      dispatch(changeGuides(foundPath.content));
    }
  }
  // Otherwise set error to true to render the NotFound component instead
  else {
    error = true;
  }

  return error;
};
