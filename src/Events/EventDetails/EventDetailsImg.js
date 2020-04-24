import React from "react";
import defimg from "../../defimg.jpg";

export default function EventDetailsImg(props) {
  console.log(">>>props.event @EventDetailsImg", props.event);
  if (!props.event.images) {
    return <img src={defimg} alt="default event" height="auto" width="500" />;
  } else if (props.event.images.image && props.event.images.image.medium) {
    return <img src={props.event.images.image.medium.url} alt="event" />;
  } else if (props.event.images.image && props.event.images.image.small) {
    return (
      <img
        src={props.event.images.image.small.url}
        alt="event"
        height="auto"
        width="500"
      />
    );
  } else if (
    props.event.images.image &&
    !props.event.images.image.medium &&
    !props.event.images.image.small
  ) {
    return (
      <div>
        {props.event.images.image.map((img) => (
          <img
            key={img.id}
            src={img.medium.url}
            alt="event"
            height="auto"
            width="200"
          />
        ))}
      </div>
    );
  }
}
