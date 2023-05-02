import React from "react";
import FacilityCalendar from "./FacilityCalendar";
import "../styles/Facilities.css";

const Facilities = () => {
  return (
    <div className="facilities-container">
      <div className="facilities-header">
        <h1>Facilities</h1>
      </div>
      <div className="facilities-content">
        <div className="facility">
          <h2>SAC</h2>
          <FacilityCalendar facilityName="SAC" />
        </div>
        <div className="facility">
          <h2>Pool</h2>
          <FacilityCalendar facilityName="Pool" />
        </div>
        <div className="facility">
          <h2>Badminton Court</h2>
          <FacilityCalendar facilityName="Badminton Court" />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
