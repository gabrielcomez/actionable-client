import React from "react";
import EventDetailsImg from "./EventDetailsImg";
import Goals from "../../Goals";

export default function EventDetails(props) {
  if (!props.event) {
    return "loading";
  }
  return (
    <main>
      {/* If the event's category is fetched: */}
      {props.event.categories ? (
        <div>
          {props.event.categories.category.map((cat, index) => (
            <p key={index}>
              This event's category is <strong>{cat.id}</strong>
            </p>
          ))}
        </div>
      ) : null}

      <h2>{props.event.title}</h2>
      <p>
        {/* If the event's venue is fetched: */}
        {props.event.venue_name ? props.event.venue_name + " // " : null}

        {/* If the event's address is fetched: */}
        {props.event.address ? props.event.address + " // " : null}

        {/* If the event's city is fetched: */}
        {props.event.city ? props.event.city : null}
      </p>
      <EventDetailsImg event={props.event} />
      <div dangerouslySetInnerHTML={{ __html: props.event.description }}></div>

      <br />
      <a href={props.event.url}> + info</a>
      <Goals />
    </main>
  );
}
