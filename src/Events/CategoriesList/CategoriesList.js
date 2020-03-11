import React from "react";
// import { Link } from "react-router-dom";

export default function CategoriesList(props) {
  console.log(">>>props @CategoriesList comp", props);
  if (!props.category) {
    return "loading...";
  } else if (props.category.length === 0) {
    return "we don't have categories to show";
  } else {
    return (
      <main>
        <h2>These are the categories of events you can search through:</h2>
        <div>
          {props.category.map(cat => {
            return <button key={cat.id}>{cat.id}</button>;
          })}
        </div>
      </main>
    );
  }
}

//<Link key={cat.id} to={`/category/${cat.id}/events`}>
//<button>{cat.id}</button>
//</Link>
