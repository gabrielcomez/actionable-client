import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  render() {
    return <UserProfile user={this.props.user} />;
  }
}

const mapStateToProps = (state) => {
  console.log(">>>state @profile comp", state);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
