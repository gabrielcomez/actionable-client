import React, { Component } from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { showOneEvent } from "../../actions/events";

class EventDetailsContainer extends Component {
  componentDidMount() {
    console.log("this is being dispatched");
    this.props.showOneEvent(this.props.match.params.id);
  }
  render() {
    console.log(">>>props @EventDetailsCont", this.state);

    return (
      "This is being rendered", (<EventDetails event={this.props.event} />)
    );
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.event,
  };
};

export default connect(mapStateToProps, { showOneEvent })(
  EventDetailsContainer
);
