import React from "react";
import { connect } from "react-redux";
import { queryLocation } from "../../actions/location";
import LocationList from "./LocationList";

class LocationFormContainer extends React.Component {
  componentDidMount() {
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
  return {
    location: state.location
  };
};

export default connect(mapStateToProps, { queryLocation })(
  LocationFormContainer
);
