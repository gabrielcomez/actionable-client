import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../Form";
import { signup } from "../../actions/users";
import { Link } from "react-router-dom";

class SingUpContainer extends Component {
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
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          text="sign up 🙌"
          title="welcome!"
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

export default connect()(SingUpContainer);
