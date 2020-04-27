import React, { Component } from "react";
import LocationForm from "./LocationForm";
import { queryLocation } from "../../actions/location";
import { connect } from "react-redux";
import "../../App.css";

class LocationFormContainer extends Component {
  state = {
    location: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.queryLocation(this.state.location);
    this.props.history.push(`/events/${this.state.location}`);
    this.setState({ location: "" });
  };

  render() {
    return (
      <main>
        <div className="locationFormImg">
          <div className="cover-text">
            <h3>explore</h3>
          </div>
        </div>
        <br />
        <div>
          <LocationForm
            text="location"
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps, { queryLocation })(
  LocationFormContainer
);
