import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
export const Success = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Alert key='success' variant='success'>
          Blog deleted successfully
        </Alert>
    </Modal>
  </>
  )
}
