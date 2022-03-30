export const PathFinder = (paths) => {
  let error = false;

  const currentUrl = window.location.pathname;
  let foundPath = paths.find((singlePath) => singlePath.path === currentUrl);

  // If url exists render page normally
  if (foundPath !== undefined) {
    return foundPath;
  }
  // Otherwise set error to true to render the NotFound component instead
  else {
    error = true;
  }

  return error;
};
