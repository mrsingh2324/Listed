import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Card3 = () => {
  return (
    <div className="card-div1">
       <div className="card-header">
        <div>
          <h3>Today's schedules</h3>
        </div>
        <div className="date">
          <span>
            See All
            <FontAwesomeIcon icon={faAngleRight} className="date-icon"/>
          </span>
        </div>
      </div>
      <div className="card-content">
        <div className="line"></div>
        <div className="schedule">
          <p>Meeting with suppliers from Kuta Bali</p>
          <span>14.00-15.00</span>
          <span>at Sunset Road, Kuta, Bali</span>
        </div>
      </div>
      <div className="card-content">
        <div className="line"></div>
        <div className="schedule">
          <p>Meeting with suppliers from Kuta Bali</p>
          <span>14.00-15.00</span>
          <span>at Sunset Road, Kuta, Bali</span>
        </div>
      </div>
    </div>
  );
};

export default Card3;
