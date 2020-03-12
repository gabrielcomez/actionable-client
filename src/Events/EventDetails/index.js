import React, { Component } from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { showOneEvent } from "../../actions/events";

class EventDetailsContainer extends Component {
  componentDidMount() {
    console.log(
      ">>>this.props @eventDetails container",
      this.props.match.params.id
    );
    this.props.showOneEvent(this.props.match.params.id);
  }
  render() {
    // console.log(">>>this.props @event details container", this.props);

    return (
      <div>
        <EventDetails event={this.props.event} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(">>>state @eventdetails comp", state);
  return {
    event: state.event
  };
};

export default connect(mapStateToProps, { showOneEvent })(
  EventDetailsContainer
);
