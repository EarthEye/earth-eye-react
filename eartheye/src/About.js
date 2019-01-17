import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class About extends Component {
  render() {
    return (
      <>
        <br />
        <h1>ABOUT EARTH-EYE</h1>
        <br />
        <br />
        <br />
        <br />
        <h4>
          EarthEye is a scientific application envisioned during Fischackathon
          KuwaitCity 2018. The application intends to help scientists and
          environmental activists around the world in observing and maintaining
          marine life and landscape development by evaluating the changes in the
          environment through measurable means. The application is operational
          for offline use to accommodate to a wide range of uses and locations.
          Compare: The “compare” function in EarthEye can be used to compare two
          images from different time frames. It highlights the differences to
          calculate the percentage of change between the two images. Measure:
          The “measure” function can be used to measure the length of an object
          or location in a drone image. The user must supply the software with
          the camera’s sensor height and width. The measurements are displayed
          in meters.
        </h4>
        <div className="row h-50">
          <NavLink className="btn btn-primary m-auto" to="/home">
            Home
          </NavLink>
        </div>
      </>
    );
  }
}

export default About;
