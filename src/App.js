import React from "react";
import Home from "./Events/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Location from "./Events/Location/";
import LocationList from "./Events/Location/LocationListContainer";
import EventDetails from "./Events/EventDetails";
import SignIn from "./Users/SignIn";
import SignUp from "./Users/SignUp";
import UserProfile from "./Users/Profile";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="Content">
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Location} />
          <Route exact path="/events/:location" component={LocationList} />
          <Route exact path="/events/:location/:id" component={EventDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile/:id" component={UserProfile} />
        </div>
      </Router>
    );
  }
}
