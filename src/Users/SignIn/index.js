import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../Form";
import { signin } from "../../actions/users";

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
    this.props.dispatch(signin(this.state.email, this.state.password));
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        {this.props.loggedUser ? (
          <h1>Welcome back!</h1>
        ) : (
          <UserForm
            text="sign in 🔑"
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
  return {
    token: state.users.auth,
  };
};
export default connect(mapStateToProps)(SignIn);
