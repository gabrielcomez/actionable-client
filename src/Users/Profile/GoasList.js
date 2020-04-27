import React from "react";
import { Link } from "react-router-dom";

export default function GoalList(props) {
  // console.log(">>>props @GoalList comp", props.user.goals);

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
            <Link key={goal.id} to={`/events/${goal.city}/${goal.eventId}`}>
              <button>
                {goal.name}, in {goal.city}, on {goal.date},{" "}
              </button>
            </Link>
          );
        })}
      </div>
    );
  }
}
