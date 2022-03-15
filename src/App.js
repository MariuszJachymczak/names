import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./components/pages/Home/Home";

const App = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
