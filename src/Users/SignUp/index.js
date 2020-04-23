import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../Form";
import { signup } from "../../actions/users";
import { Link } from "react-router-dom";

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
        <UserForm
          text="sign up 🙌"
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
        <p>
          If you alredy have an account,
          <Link to="/signin"> sing in</Link>
          🔑
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(">>>state @signup comp", state);
  return {
    isSignUp: state.user.isSignUp,
  };
};

export default connect(mapStateToProps)(SingUpCont);
