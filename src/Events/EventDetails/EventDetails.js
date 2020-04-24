import React from "react";
import EventDetailsImg from "./EventDetailsImg";

export default function EventDetails(props) {
  if (!props.event) {
    return "loading";
  }
  console.log(">>>props @EventDetails", props);

  return (
    <main>
      <div>
        <h2>{props.event.title}</h2>
        <p>
          {props.event.venue_name}
          {" // "}
          <strong>{props.event.address} </strong>
          {" // "}
          {props.event.city}
        </p>
        <EventDetailsImg event={props.event} />

        <div
          dangerouslySetInnerHTML={{ __html: props.event.description }}
        ></div>
      </div>
      <br />
      {props.event && props.event.url ? (
        <a href={props.event.url}> + info</a>
      ) : null}
    </main>
  );
}
