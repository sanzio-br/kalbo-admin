import React from "react";

const Itinerary = ({ itinerary }) => {
  return (
    <div className="text-start">
      <h5 className="details-header">Itinerary</h5>
      {itinerary && itinerary.map(({ heading, description }) => {
        return (
          <div className="day-details">
            <h6 className="day-header">
              <span>{heading}</span>
            </h6>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Itinerary;
