import React from "react";
import { Link } from "react-router-dom";
import defProfile from "../../defProfile.jpeg";

export default function UserProfile(props) {
  console.log(props);

  return (
    <div>
      {props.user.token === null ? (
        <div>
          If you alredy have an account,
          <Link to="/signin"> sing in</Link>
          🔑
          <br />
          If you don't,
          <Link to="/signup"> sing up</Link>
          🙌
        </div>
      ) : (
        <div>
          <h1>Welcome back {props.user.name}</h1>
          {props.user.image ? (
            <img src={props.user.image} alt="profile pic" />
          ) : (
            <img
              src={defProfile}
              alt="default profile pic"
              height="auto"
              width="500"
            />
          )}
        </div>
      )}
    </div>
  );
}
