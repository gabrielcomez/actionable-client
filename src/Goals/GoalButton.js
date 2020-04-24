import React, { Component } from "react";
import { connect } from "react-redux";

class GoalButton extends Component {
  onClick = (event) => {
    event.preventDefault();
    console.log("GOAL ADDED @GoalButton");
  };

  render() {
    console.log(">>>props @GoalButton comp", this.props);
    return <button onClick={this.onClick}>+ goal</button>;
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(GoalButton);
