import React, { Component } from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { showOneEvent } from "../../actions/events";

class EventDetailsContainer extends Component {
  componentDidMount() {
    console.log(">>>this.props @eventDetails container", this.props);
    this.props.showOneEvent();
  }
  render() {
    // console.log(">>>this.props @event details container", this.props);

    return (
      <div>
        <EventDetails events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps, { showOneEvent })(
  EventDetailsContainer
);
