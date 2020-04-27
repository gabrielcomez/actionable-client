import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addingGoal } from "../actions/goals";
import { deletingGoal } from "../actions/goals";

class GoalButton extends Component {
  add = (event) => {
    event.preventDefault();
    // console.log(">>>this.props @GoalButton onClick", this.props);
    this.props.dispatch(
      addingGoal(
        this.props.userId,
        this.props.event.title,
        this.props.event.city,
        this.props.event.start_time,
        this.props.event.id
      )
    );
  };

  del = (event) => {
    event.preventDefault();
    console.log(
      ">>>this.props @GoalButton DELETE onClick",
      this.props.event.id
    );
    this.props.dispatch(deletingGoal(this.props.event.id));
  };

  render() {
    // console.log(">>>props @GoalButton comp", this.props);
    if (this.props.userIsSignedIn) {
      return (
        <div>
          {this.props.isAdded ? (
            <button onClick={this.del}> - goal</button>
          ) : (
            <button onClick={this.add}>+ goal</button>
          )}
        </div>
      );
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
    isAdded: state.goal.isAdded,
    userId: state.user.id,
    userIsSignedIn: state.user.token !== null,
  };
};

export default connect(mapStateToProps)(GoalButton);
