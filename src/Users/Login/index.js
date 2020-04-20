import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../Form";

class Login extends Component {
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

    // this.props.dispatch(login(this.state.email, this.state.password));

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        {this.props.loggedUser ? (
          <h1>Welcome back!</h1>
        ) : (
          <UserForm
            text="Login 👋"
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
  console.log(">>>state @login comp", state.users);
  return {};
};

export default connect(mapStateToProps)(Login);
