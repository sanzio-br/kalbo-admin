import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const FormTop = ({ handleChange}) => {
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
            <div className="form-label">Number of people</div>
            <InputGroup className="mb-3">
              <InputGroup.Text>Minimum</InputGroup.Text>
              <Form.Control
              required
                name="minPeople"
                type="number"
                min={0}
                aria-label="First name"
                onChange={handleChange}
              />
              <InputGroup.Text>maximum</InputGroup.Text>
              <Form.Control
              required
                name="maxPeople"
                type="number"
                min={1}
                aria-label="Last name"
                onChange={handleChange}
              />
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
        <div className="col-lg-6 wow ">
          <div className="form-group m-2">
            <div className="form-label">Price</div>
            <InputGroup className="mb-3">
              <select
                id=""
                name="currency"
                className="form-select"
                required
                onChange={handleChange}
              >
                <option>Select the currency</option>
                <option value="KSH" onChange={handleChange}>
                  KSH
                </option>
                <option value="USD" onChange={handleChange}>
                  USD
                </option>
              </select>
              <input
                className="form-control"
                required
                aria-label="Text input with dropdown button"
                type="number"
                name="price"
                min={0}
                onChange={handleChange}
              />
            </InputGroup>
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
