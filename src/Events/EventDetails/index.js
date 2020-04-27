import React, { Component } from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { showOneEvent } from "../../actions/events";
import { thisGoal } from "../../actions/goals";

class EventDetailsContainer extends Component {
  componentDidMount() {
    this.props.showOneEvent(this.props.match.params.id);
    this.props.thisGoal(this.props.match.params.id);
  }
  render() {
    return <EventDetails event={this.props.event} />;
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps, { showOneEvent, thisGoal })(
  EventDetailsContainer
);
