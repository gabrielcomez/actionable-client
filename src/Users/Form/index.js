import React from "react";

const UserForm = (props) => {
  const isLogin = props.isLogin;
  return (
    <div>
      <h1>Have you already {props.text} ?</h1>
      <br />
      <form onSubmit={props.handleSubmit}>
        {!isLogin && (
          <>
            <label>Name:</label>
            <input
              onChange={props.handleChange}
              type="name"
              name="name"
              value={props.values.name}
            />
          </>
        )}
        <br />
        <label>Email:</label>
        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
        />
        <br />
        <label>Password:</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="password"
          value={props.values.password}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
