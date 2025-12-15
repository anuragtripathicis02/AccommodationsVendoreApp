import React from 'react'
import Image from "next/image";
import { Button, Form, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import DatePickers from '@/components/DatePickers';

const StayDetailsPricingModal = ({ show, handleClose }: any) => {
    return (
      <Modal show={show} onHide={handleClose} centered className="common-modal-sec pt-4 modal-pricing-stay">
          <Modal.Header>
              <Button variant="close-btn" onClick={handleClose}>
                  <Image src={CloseModal} alt="" />
              </Button>
          </Modal.Header>
          <Modal.Body className="common-modal-body">
              <div className='heading'>
                  <h2 className='mb-3'>Pricing</h2>
              </div>
              <div className='modal-box'>
                     <div className='row p-0'>
                         <div className='col-md-12'>
                            <div className='form-group mb-24 placeholder-dark'>
                            <Form.Label>General Stay Price Per Night</Form.Label>
                            <Form.Control type='text' placeholder='$ 1250' />
                            </div>
                        </div>
                        <div className='new-notificatio-tabs-box'>
                            <label className='d-flex align-items-center border-0 whatsapp-updates p-0'>
                                <div className='flex-grow-1'>
                                    <b className='payment-ttl d-block'>Partial Payment</b>
                                </div>
                                <div className='swithc-toggle ms-auto'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24">
                                <Form.Label >Advance Booking Amount</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Custom</option>
                                    <option value="1">Custom new</option>
                                    <option value="2">Custom old</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group mb-24 placeholder-dark'>
                            <Form.Label>Min. Booking Amount</Form.Label>
                            <Form.Control type='text' placeholder='$ 200' />
                            </div>
                        </div>
                        
                        <div className='p-16 mt-4'>
                            <div className='new-notificatio-tabs-box'>
                                <label className='d-flex align-items-center border-0 whatsapp-updates p-0'>
                                    <div className='flex-grow-1'>
                                        <b className='payment-ttl d-block'>Pay at Check-in</b>
                                    </div>
                                    <div className='swithc-toggle ms-auto'>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className='color-hr-change hr-line-box mt-2 mb-24'>
                                <hr />
                            </div>
                            <div className='row'>
                                <div className=' col-md-12'>
                                    <div className="form-group mb-24 d-flex flex-wrap checkbox-design gap-3">
                                        <InputGroup className="w-auto d-flex align-items-center gap-2">
                                            <InputGroup.Checkbox aria-label="Card" className=''/>
                                            <Form.Label className='mb-0'>Card</Form.Label>
                                        </InputGroup>
                                        <InputGroup className="w-auto d-flex align-items-center gap-2">
                                            <InputGroup.Checkbox aria-label="Card" className=''/>
                                            <Form.Label className='mb-0'>Cash</Form.Label>
                                        </InputGroup>
                                        <InputGroup className="w-auto d-flex align-items-center gap-2">
                                            <InputGroup.Checkbox aria-label="Card" className=''/>
                                            <Form.Label className='mb-0'>Online Transfer</Form.Label>
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                        </div>

                      {/* <div className='col-md-6'>
                          <div className="form-group mb-24">
                              <Form.Label >Creating Custom Pricing For</Form.Label>
                              <Form.Select aria-label="Default select example">
                                  <option>Date</option>
                                  <option value="1">Date</option>
                                  <option value="2">Day</option>
                              </Form.Select>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-0'>
                              <Form.Label>Select Date</Form.Label>
                              <DatePickers />
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className="form-group mb-24">
                              <Form.Label >Repeat</Form.Label>
                              <Form.Select aria-label="Default select example">
                                  <option>Every Year</option>
                                  <option value="1">Every Year</option>
                                  <option value="2">Every Week</option>
                              </Form.Select>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-0'>
                              <Form.Label>Select End Date</Form.Label>
                              <DatePickers />
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className="form-group mb-24">
                              <Form.Label>Select Week Days</Form.Label>
                              <ul className='week-select-box d-flex align-items-center justify-content-between gap-1 flex-md-nowrap flex-wrap'>
                                  <li>
                                      <Link href="" className='week'>Sun</Link>
                                  </li>
                                  <li>
                                      <Link href="" className='week weekActive'>Mon</Link>
                                  </li>
                                  <li>
                                      <Link href="" className='week'>Tue</Link>
                                  </li>
                                  <li>
                                      <Link href="" className='week weekActive'>Wed</Link>
                                  </li>
                                  <li>
                                      <Link href="" className='week'>Thu</Link>
                                  </li>
                                  <li>
                                      <Link href="" className='week weekActive'>Fri</Link>
                                  </li>
                                  <li>
                                      <Link href="" className='week'>Sat</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>  */}
                  </div>
              </div>
          </Modal.Body>
          <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0 ">
              <Link href="" className='btn btn-grey' onClick={handleClose}>Cancel</Link>
              <button className='btn btn-secondary' >Set Pricing</button>
          </Modal.Footer>
      </Modal>

  )
}

export default StayDetailsPricingModal