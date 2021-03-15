const Route = ({ children, path }) => {
  if (path === window.location.pathname) {
    return children;
  } else return null;
};

export default Route;
