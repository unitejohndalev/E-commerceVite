import React from "react";

//import Router file
import Router from "./components/Router";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

//import scroll to top component
//put it here so can be notice immediately 
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router />
      {/* added scroll to top function, in order for all components to start from the top and not in any location when navigate to a new component */}
      <ScrollToTop/>
    </>
  );
}

export default App;
