import React from "react";
import "../../App.css";

const LocationSearch = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {/* <label>Location</label> */}
        <input
          onChange={props.handleChange}
          type="text"
          name="location"
          value={props.values.location}
          placeholder="search by location"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LocationSearch;
