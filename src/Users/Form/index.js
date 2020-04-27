import React from "react";
import "../../App.css";

const UserForm = (props) => {
  console.log(">>>props @UserForm comp", props);

  const isSignIn = props.isSignIn;
  return (
    <div>
      <div className="userFormImg">
        <div className="home-text">
          <h3>{props.title}</h3>
        </div>
      </div>
      <br />
      <h4>{props.text}</h4>
      <form onSubmit={props.handleSubmit}>
        {!isSignIn && (
          <>
            {/* <label>name </label> */}
            <input
              onChange={props.handleChange}
              type="text"
              name="name"
              placeholder="write your name here"
              value={props.values.name}
            />
          </>
        )}
        <br />
        {/* <label>email </label> */}
        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          placeholder="write your email here"
          value={props.values.email}
        />
        <br />
        {/* <label>password </label> */}
        <input
          onChange={props.handleChange}
          type="text"
          name="password"
          placeholder="write your password here"
          value={props.values.password}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
