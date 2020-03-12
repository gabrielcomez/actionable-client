import React from "react";
import defimg from "../../defimg.jpg";

export default function EventDetails(props) {
  console.log(">>>props @Event Details comp", props);
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
        {props.event.images ? (
          <img src={props.event.images.image.medium.url} />
        ) : (
          <img src={defimg} alt="event" height="auto" width="500" />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: props.event.description }}
        ></div>
      </div>
      <br />
      <a href={props.event.url}> + info</a>
    </main>
  );
}
