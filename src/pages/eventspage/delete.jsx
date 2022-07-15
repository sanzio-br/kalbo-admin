import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deletePackage , Close} from "../../redux/features/eventsfeature";
export const Delete = (props) => {
  const dispatch = useDispatch();
  const modalDelete = () => {
    dispatch(Close());
    dispatch(deletePackage(props.id));
  };
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
          onClick={modalDelete}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
