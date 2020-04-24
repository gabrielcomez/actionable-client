import React, { Component } from "react";
import { connect } from "react-redux";
import GoalButton from "./GoalButton";

class GoalButtonContainer extends Component {
  render() {
    return <GoalButton event={this.props.event} />;
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps)(GoalButtonContainer);
