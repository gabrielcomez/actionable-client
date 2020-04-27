import React from "react";
import { connect } from "react-redux";
import { queryLocation } from "../../actions/location";
import LocationList from "./LocationList";
import "../../App.css";

class LocationFormContainer extends React.Component {
  componentDidMount() {
    this.props.queryLocation(this.props.match.params.location);
  }
  render() {
    return (
      <main>
        <div className="locationFormImg">
          <div className="cover-text">
            <h3>events at {this.props.match.params.location}</h3>
          </div>
        </div>
        <br />
        <LocationList
          location={this.props.location}
          params={this.props.match.params}
        />
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
