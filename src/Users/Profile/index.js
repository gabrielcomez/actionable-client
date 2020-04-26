import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import GoalList from "./GoasList";
import { userGoals } from "../../actions/users";

class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.dispatch(userGoals(this.props.user.token));
  }
  render() {
    return (
      <main>
        <div>
          <UserProfile user={this.props.user} />
        </div>
        <div>
          <GoalList user={this.props.user} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(">>>state @profile comp", state);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
