import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import Hotal05 from '../../../../public/images/hotal-05.png'

const AddMoreHotal = ({ show, handleClose }: any) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal-sec pt-4 modal-add-img">
        <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            <div className='modal-box'>
                <div className='upload-img-box mb-24'>
                    <div className='img-box position-relative'>
                        <Image src={Hotal05} alt="" className=''></Image>
                    </div>
                </div>
                 <Form>
                    <div className='row p-0'>
                        <div className='col-md-12'>
                            <div className='form-group mb-24 pointer-event'>
                                <Form.Label>Rooms</Form.Label>
                                <Form.Control type='text' placeholder='Bedroom 1' />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label >Stay Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Rooms</option>
                                    <option value="1">Single Rooms </option>
                                    <option value="2">Double Rooms</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0 ">
            <button className='btn btn-secondary' >ADD</button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddMoreHotal