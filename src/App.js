import React from "react";
import "./App.css";
import Home from "./Events/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Location from "./Events/Location/";
import LocationList from "./Events/Location/LocationListContainer";
import EventDetails from "./Events/EventDetails";
import Login from "./Users/Login";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Location} />
          <Route exact path="/events/:location" component={LocationList} />
          <Route exact path="/events/:location/:id" component={EventDetails} />
          <Route exact path="/sign/in" component={Login} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(">>>state @app comp", state);

  return {
    // loggedUser: state.users.token !== null,
  };
};
export default connect(mapStateToProps)(App);
