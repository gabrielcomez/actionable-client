import React from "react";
import { Link } from "react-router-dom";

export default function LocationList(props) {
  console.log(">>>props @LocationList comp", props);
  // if (!props.location) {
  //   return "loading...";
  // } else
  if (props.location.length === 0) {
    return "loading...";
  } else {
    return (
      <main>
        <div>
          {props.location.map(loc => {
            console.log("mapped loc", loc);

            return (
              <Link
                key={loc.id}
                to={`/events/${props.params.location}/${loc.id}`}
              >
                <button>{loc.title}</button>
              </Link>
            );
          })}
        </div>
      </main>
    );
  }
}
