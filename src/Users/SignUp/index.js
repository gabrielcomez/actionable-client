import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../Form";
import { signup } from "../../actions/users";

class SingUpCont extends Component {
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
    console.log(">>>this.props @signup comp", this.props);

    this.props.dispatch(
      signup(this.state.name, this.state.email, this.state.password)
    );
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        {this.props.isSignUp ? (
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
  console.log(">>>state @signup comp", state);
  return {
    isSignUp: state.users.isSignUp,
  };
};

export default connect(mapStateToProps)(SingUpCont);
