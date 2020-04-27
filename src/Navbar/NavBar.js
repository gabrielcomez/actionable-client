import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function NavBar(props) {
  // console.log(">>>props @navbar comp", props);
  return (
    <nav className="NavBar">
      <Link className="NavBar-item1" to="/">
        {" "}
        ac+ionable{" "}
      </Link>
      <Link className="NavBar-item2" to={"/events"}>
        search by location
      </Link>
      <Link className="NavBar-item3" to="/signin">
        {" "}
        users
      </Link>
      {props.user.token !== null && props.user.name !== null ? (
        <Link className="NavBar-item4" to={`/profile/${props.user.id}`}>
          {" "}
          signed in as {props.user.name}
        </Link>
      ) : null}
    </nav>
  );
}
