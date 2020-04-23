import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="NavBar">
      <Link to="/"> home </Link>
      <Link to="/signup"> users</Link>
    </nav>
  );
}
