import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    this.props.history.push("/profile/:id");
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        <UserForm
          text="sign in 🔑"
          isLogin
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <p>
          If you don't have an account yet,
          <Link to="/signup"> sing up</Link>
          🙌
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(">>>state @signin comp", state);
  return {
    token: state.user.auth,
  };
};
export default connect(mapStateToProps)(SignIn);
