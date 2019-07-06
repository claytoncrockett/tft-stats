import React from "react";
import { Route } from "react-router-dom";
import ApplicationView from "./ApplicationView/ApplicationView.jsx";

function App() {
  return <Route path="/" component={ApplicationView} />;
}

export default App;
