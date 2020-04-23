import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  console.log(">>>props @navbar comp", props);
  return (
    <nav className="NavBar">
      <Link to="/"> home </Link>
      <Link to="/signup"> users</Link>
      {props.user.token !== null && props.user.name !== null ? (
        <p>
          You are signed in as <Link to="/profile/:id"> {props.user.name}</Link>{" "}
        </p>
      ) : null}
    </nav>
  );
}
