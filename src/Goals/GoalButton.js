import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class GoalButton extends Component {
  onClick = (event) => {
    event.preventDefault();
    console.log("GOAL ADDED @GoalButton");
  };

  render() {
    console.log(">>>props @GoalButton comp", this.props);
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
    userIsSignedIn: state.user.token !== null,
  };
};

export default connect(mapStateToProps)(GoalButton);
