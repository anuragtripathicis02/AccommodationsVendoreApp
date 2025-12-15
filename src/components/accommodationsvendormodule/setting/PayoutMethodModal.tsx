import React, { useState } from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
const PayoutMethodModal = ({ show, handleClose }: any) => {
  return (<Modal show={show}  onHide={handleClose} centered className="modal-filter common-modal-sec notification-box pt-4">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='modal-box'>
                    <div className='heading'>
                        <h2 className='mb-3'>Payout Method</h2>
                    </div>
                    <div className='promocode-sec-modal'>
                        <Form>
                            <div className='row'>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>Payout Type</Form.Label>
                                        <Form.Select defaultValue="Bank Payout">
                                            <option>Bank Payout 1</option>
                                            <option>Bank Payout 2</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>Payout Frequency</Form.Label>
                                        <Form.Select defaultValue="weekly">
                                            <option>weekly 1</option>
                                            <option>weekly 2</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>Bank Name</Form.Label>
                                        <Form.Select defaultValue="Bank name here">
                                            <option>Bank name here 1</option>
                                            <option>Bank name here 2</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>Branch Name</Form.Label>
                                        <Form.Select defaultValue="Branch name here">
                                            <option>Branch name here 1</option>
                                            <option>Branch name here 2</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>Account Number</Form.Label>
                                        <Form.Control type="text" placeholder="12345678901234" />
                                    </Form.Group>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>IFSC Code</Form.Label>
                                        <Form.Control type="text" placeholder="12345678901234" />
                                    </Form.Group>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>SWIFT Code</Form.Label>
                                        <Form.Control type="text" placeholder="12345678901234" />
                                    </Form.Group>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <Form.Group className=" mb-24" controlId="">
                                        <Form.Label>IBAN Code</Form.Label>
                                        <Form.Control type="text" placeholder="12345678901234" />
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0 ">
                <Link href="" className='btn btn-grey' onClick={handleClose}>Cancel</Link>
                <button className='btn btn-secondary' >Save Preference</button>
            </Modal.Footer>
        </Modal>
  )
}

export default PayoutMethodModal