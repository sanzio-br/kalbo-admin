import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button } from "react-bootstrap";
export default function BookButton(props) {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  // Form js code
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vrmufn",
        "template_om6yehd",
        form.current,
        "_9R-p5JFQqxdXNgvk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleClose();
  };

  return (
    <>
      <button className="bookbtn" onClick={handleShow}>
      <span>From </span>
        <span> {props.currency} </span> 
        <span>{props.price}.00</span>
      </button>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="">Fill your details for booking</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form className="form" ref={form}>
              <p style={{ color: "var(--red)", fontSize: "1.2em" }}>
                Booking for: {props.title} <br />
                Destination: {props.destination} <br />
                Price: <span>{props.currency} </span>
                {props.price}
                <span>.00</span>
              </p>
              <label className="form-label">First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="user_firstname"
                required
              />
              <label className="form-label">Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="user_lastname"
                required
              />

              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="user_email"
                placeholder="example@gmail.com"
                required
              />
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                placeholder="Phone number"
                name="user_phone"
                required
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
