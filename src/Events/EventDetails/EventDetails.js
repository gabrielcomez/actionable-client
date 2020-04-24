import React from "react";
import EventDetailsImg from "./EventDetailsImg";

export default function EventDetails(props) {
  if (!props.event) {
    return "loading";
  }
  return (
    <main>
      <div>
        <h2>{props.event.title}</h2>
        <p>
          {props.event.venue_name ? props.event.venue_name + " // " : null}
          {props.event.address
            ? <strong>{props.event.address} </strong> + " // "
            : null}
          {props.event.city ? props.event.city : null}
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
