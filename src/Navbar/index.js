import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./NavBar";

class NavbarContainer extends Component {
  render() {
    return <Navbar user={this.props.user} />;
  }
}
const mapStateToProps = (state) => {
  console.log(">>>state @navbar comp", state);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
