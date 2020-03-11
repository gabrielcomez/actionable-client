import React from "react";
import CategoryList from "../CategoriesList";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to actionable</h1>
      <br />
      <CategoryList />
      <br />
      <Link to={"/events"}>
        <button>
          <h1>Search by location</h1>
        </button>
      </Link>
    </div>
  );
}
