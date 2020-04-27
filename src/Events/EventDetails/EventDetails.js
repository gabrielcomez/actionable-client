import React from "react";
// import EventDetailsImg from "./EventDetailsImg";
import Goals from "../../Goals";
import "../../App.js";

export default function EventDetails(props) {
  if (!props.event) {
    return "loading";
  }
  return (
    <main>
      {/* If the event's category is fetched: */}
      {props.event.categories ? (
        <p>
          This event's category is{" "}
          {props.event.categories.category.map((cat, index) => (
            <strong key={index}> {cat.id} </strong>
          ))}
        </p>
      ) : null}

      <div className="eventImg">
        <div className="eventText">
          <h1>{props.event.title}</h1>
          <p>
            {/* If the event's venue is fetched: */}
            {props.event.venue_name ? props.event.venue_name + " // " : null}

            {/* If the event's address is fetched: */}
            {props.event.address ? props.event.address + " // " : null}

            {/* If the event's city is fetched: */}
            {props.event.city ? props.event.city : null}
          </p>
        </div>
      </div>

      {/* <EventDetailsImg event={props.event} /> */}

      <br />
      <div
        className="info"
        dangerouslySetInnerHTML={{ __html: props.event.description }}
      />
      <a href={props.event.url}> + info</a>
      <Goals />
      <br />
    </main>
  );
}
