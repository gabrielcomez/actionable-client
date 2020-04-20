import React from "react";
import "./App.css";
import Home from "./Events/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Location from "./Events/Location/";
import LocationList from "./Events/Location/LocationListContainer";
import EventDetails from "./Events/EventDetails";
import SignIn from "./Users/SignIn";
import SignUp from "./Users/SignUp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Location} />
          <Route exact path="/events/:location" component={LocationList} />
          <Route exact path="/events/:location/:id" component={EventDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(">>>state @app comp", state);

  return {};
};
export default connect(mapStateToProps)(App);
