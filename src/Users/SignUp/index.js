import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../Form";

class SingUp extends Component {
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
    this.props.history.push("/event");
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        {this.props.newUser ? (
          <h1>Welcome back!</h1>
        ) : (
          <UserForm
            text="sign in 🙌"
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            values={this.state}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("signup comp", state);
  return {};
};

export default connect(mapStateToProps)(SingUp);
