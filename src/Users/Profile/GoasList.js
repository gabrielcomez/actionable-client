import React from "react";
import { Link } from "react-router-dom";

export default function GoalList(props) {
  console.log(">>>props @GoalList comp", props);

  // if (!props.tickets) {
  //   return "Loading...";
  // } else if (props.tickets.length === 0) {
  //   return "No tickets for this event yet";
  // } else {
  return "HI";
  // <div>
  //   <br />
  //   <h4>Tickets</h4>
  //   {props.tickets.map((ticket) => {
  //     return (
  //       <div key={ticket.id}>
  //         <Link to={`/event/${ticket.eventId}/tickets/${ticket.id}`}>
  //           <button ticket={ticket.eventId}>
  //             <img
  //               src={ticket.img || defotick}
  //               alt="ticket"
  //               height="auto"
  //               width="300"
  //             />
  //             <br />
  //             <ul>
  //               Price <strong>{ticket.price}€</strong>
  //               <br />
  //               <strong>Description </strong> {ticket.description}
  //             </ul>
  //           </button>
  //         </Link>
  //       </div>
  //     );
  //   })}
  // </div>
}
// }
