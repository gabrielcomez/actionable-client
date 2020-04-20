import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../Form";

class SignIn extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        {this.props.loggedUser ? (
          <h1>Welcome back!</h1>
        ) : (
          <UserForm
            text="sign in 👋"
            isLogin
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(">>>state @signin comp", state);
  return {};
};

export default connect(mapStateToProps)(SignIn);
