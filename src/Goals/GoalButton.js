import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import addingGoal from "../actions/goals";

class GoalButton extends Component {
  onClick = (event) => {
    event.preventDefault();
    console.log(">>>this.props @GoalButton onClick", this.props);
    this.props.dispatch(
      addingGoal(
        this.props.userId,
        this.props.event.title,
        this.props.event.start_time
      )
    );
  };

  render() {
    // console.log(">>>props @GoalButton comp", this.props);
    if (this.props.userIsSignedIn) {
      return <button onClick={this.onClick}>+ goal</button>;
    }
    return (
      <div>
        To add this event to your goals
        <Link to="/signin"> sing in</Link>
        🔑
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    userIsSignedIn: state.user.token !== null,
  };
};

export default connect(mapStateToProps)(GoalButton);
