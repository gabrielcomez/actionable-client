import React from "react";
import { Link } from "react-router-dom";

export default function GoalList(props) {
  console.log(">>>props @GoalList comp", props.user.goals);

  if (props.user.token === null) {
    return null;
  } else if (!props.user.goals) {
    return "Loading...";
  } else if (props.user.goals <= 0) {
    return "You have not added any events to your goal list yet";
  } else {
    return (
      <div>
        <br />
        <h4>Your goals: </h4>
        {props.user.goals.map((goal) => {
          return (
            <ul key={goal.id}>
              {goal.name}, in {goal.city}, on {goal.date},{" "}
              <Link to={`/events/${goal.city}/${goal.eventId}`}>+info</Link>
            </ul>
          );
        })}
      </div>
    );
  }
}
