import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deletePost } from "../../redux/features/blogsfeatures";
export const Delete = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete?</h4>
        <p>{props.title}</p>
        <p>press delete to continue</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button
          onClick={() => {
            deletePost(props.id);
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
