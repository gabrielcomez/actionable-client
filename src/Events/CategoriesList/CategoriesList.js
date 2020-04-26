import React from "react";

export default function CategoriesList(props) {
  if (!props.category) {
    return "loading...";
  } else if (props.category.length === 0) {
    return "we don't have categories to show";
  } else {
    return (
      <main>
        <h2>These are the categories of events you can search through:</h2>
        <div>
          {props.category.map((cat) => {
            return <p key={cat.id}>{cat.id}</p>;
          })}
        </div>
      </main>
    );
  }
}
