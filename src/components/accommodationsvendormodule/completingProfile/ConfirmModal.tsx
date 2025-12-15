"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import CloseModal from "../../../../public/images/close-modal.png";
import Link from 'next/link';

const ConfirmModal = ({ show, handleClose }: any)  => {
      const handleFinalSubmit = () => setShowConfirm(true);
  const handleConfirm = () => {
    setShowConfirm(false);
    alert('Form submitted successfully!');
  };
  return (
    <div>

    <Modal show={show} onHide={handleClose} centered className="modal-filter review-modal-sec pt-4">
      <Modal.Header>
        <Button variant="close-btn" onClick={handleClose}>
          {/* <Image src={CloseModal} alt="" /> */}
        </Button>
      </Modal.Header>
        <Modal.Body>Are you sure you want to submit the form?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowConfirm(false)}>
                Cancel
            </Button>
            <Button variant="success" onClick={handleConfirm}>
                Confirm
            </Button>
        </Modal.Footer>

    </Modal>


         {/* Confirm Modal */}
         {/* <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered className='confirm-modal'>
          <Modal.Header>
            <Modal.Title>Confirm Submission</Modal.Title>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
          </Modal.Header>
          <Modal.Body>Are you sure you want to submit the form?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal> */}
    </div>
  )
}

export default ConfirmModal