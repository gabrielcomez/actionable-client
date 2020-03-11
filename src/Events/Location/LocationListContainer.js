import React from "react";
import { connect } from "react-redux";
import { queryLocation } from "../../actions/location";
import LocationList from "./LocationList";

class LocationFormContainer extends React.Component {
  componentDidMount() {
    console.log(">>>this.props @location container", this.props);
    this.props.queryLocation(this.props.match.params.location);
  }
  render() {
    return (
      <div>
        <h3>
          These are the events we have listed for{" "}
          {this.props.match.params.location}
        </h3>
        <LocationList
          location={this.props.location}
          params={this.props.match.params}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(">>>state @location mapStateToProps", state);
  return {
    location: state.location
  };
};

export default connect(mapStateToProps, { queryLocation })(
  LocationFormContainer
);
