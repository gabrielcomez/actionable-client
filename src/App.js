import React from "react";
import "./App.css";
import CategoriesList from "./Events/CategoriesList";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Welcome to actionable
      <br /> */}
      <Route exact path="/" component={CategoriesList} />
    </div>
  );
}

export default App;
