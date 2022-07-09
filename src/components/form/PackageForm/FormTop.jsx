import React from "react";

const FormTop = ({ handleChange }) => {
  return (
    <>
      <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
        <div className="col-lg-6 wow " data-aos="fade-down-left">
          <div className="form-group m-2">
            <div className="form-label">Destination</div>
            <input
              required
              type="text"
              name="destination"
              className="form-control"
              placeholder="Trip Destination"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-lg-6 wow " data-aos="fade-down-right">
          <div className="form-group m-2">
            <div className="form-label">Pick up & return location</div>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Pick up location"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
        <div className="col-lg-6 wow " data-aos="fade-down-left">
          <div className="form-group m-2">
            <div className="form-label">Description</div>
            <textarea
              required
              type="text"
              name="description"
              className="form-control"
              placeholder="Description of package"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-lg-6 wow " data-aos="fade-down-right">
          <div className="form-group m-2">
            <div className="form-label">Maximum number of people</div>
            <input
              type="number"
              name="people"
              min={1}
              className="form-control"
              placeholder="Maximum number of people"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
        <div className="col-lg-6 wow ">
          <div className="form-group m-2">
            <div className="form-label">Price</div>
            <input
              required
              type="number"
              name="price"
              min={0}
              className="form-control"
              placeholder="Price of package"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-lg-6 wow ">
          <div className="form-group m-2">
            <div className="form-label">Number of days</div>
            <input
              required
              type="number"
              name="days"
              min={1}
              className="form-control"
              placeholder="Number of days"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTop;
