import React, { useState } from 'react'
import Image from "next/image";
import { Accordion, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import BikeBox from '../../../../public/images/bike-box.png'

const AdddingEnhancementpopover  = ({ show, handleClose }: any) => {
        const [count1, setCount1] = useState(1);
    
        const formatNumber = (num: number) => String(num).padStart(2, '0');
    
        const renderCounter = (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => (
          <div className="form-control d-flex align-items-center justify-content-between">
            <Button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))} className="btn-add-remove d-flex align-items-center justify-content-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.93294 18.3337C14.5163 18.3337 18.2663 14.5837 18.2663 10.0003C18.2663 5.41699 14.5163 1.66699 9.93294 1.66699C5.34961 1.66699 1.59961 5.41699 1.59961 10.0003C1.59961 14.5837 5.34961 18.3337 9.93294 18.3337Z" stroke="#652669" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.59961 10H13.2663" stroke="#652669" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </Button>
              <span className="text-input-box">{formatNumber(count)}</span>
            <Button onClick={() => setCount((prev) => prev + 1)} className="btn-add-remove d-flex align-items-center justify-content-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0003 18.3337C14.5837 18.3337 18.3337 14.5837 18.3337 10.0003C18.3337 5.41699 14.5837 1.66699 10.0003 1.66699C5.41699 1.66699 1.66699 5.41699 1.66699 10.0003C1.66699 14.5837 5.41699 18.3337 10.0003 18.3337Z" stroke="#652669" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66699 10H13.3337" stroke="#652669" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 13.3337V6.66699" stroke="#652669" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </Button>
          </div>
        );

  return (
    
    <Modal show={show} onHide={handleClose} centered className="add-rental-modal common-modal-sec pt-4">
    <Modal.Header>
       <Button variant="close-btn" onClick={handleClose}>
           <Image src={CloseModal} alt="" />
       </Button>
   </Modal.Header>
   <Modal.Body className="common-modal-body">
       <div className='modal-box'>
           <div className='heading'>
               <h2>Add Bike/Car Rental</h2>
           </div>
           <Form className='position-relative'>    
                <div className='row'> 
                   <div className='col-md-12'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <p>Select Car/Bike</p>
                                <Accordion.Header>
                                    <div className='card-modal-item d-flex align-items-center gap-2 '>
                                        <div className='img-icons'>
                                            <Image src={BikeBox} alt=''></Image>
                                        </div>
                                        <div className='text-card'>
                                            <h6>Suzuki Q for up-to 2 Guest</h6>
                                            <span>$12 /Day</span>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='card-modal-item d-flex align-items-center gap-2 mb-2'>
                                        <div className='img-icons'>
                                            <Image src={BikeBox} alt=''></Image>
                                        </div>
                                        <div className='text-card'>
                                            <h6>Suzuki Q for up-to 2 Guest</h6>
                                            <span>$12 /Day</span>
                                        </div>
                                    </div>
                                    <div className='card-modal-item d-flex align-items-center gap-2 mb-2'>
                                        <div className='img-icons'>
                                            <Image src={BikeBox} alt=''></Image>
                                        </div>
                                        <div className='text-card'>
                                            <h6>Suzuki Q for up-to 2 Guest</h6>
                                            <span>$12 /Day</span>
                                        </div>
                                    </div>
                                    <div className='card-modal-item d-flex align-items-center gap-2 '>
                                        <div className='img-icons'>
                                            <Image src={BikeBox} alt=''></Image>
                                        </div>
                                        <div className='text-card'>
                                            <h6>Suzuki Q for up-to 2 Guest</h6>
                                            <span>$12 /Day</span>
                                        </div>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='col-md-12'>
                        <div className='add-more-count'>
                            <div className='form-group  mb-24'>
                                <Form.Label>Number of Rooms</Form.Label><Form.Label>Left Side Rows</Form.Label>
                                {renderCounter(count1, setCount1)}
                            </div>
                        </div>
                   </div>
                   <div className='col-md-12'>
                        <div className='form-group mb-0'>
                            <Form.Label>Select Dates</Form.Label>
                            <div className='link-box d-flex align-items-center gap-2 flex-wrap'>
                                <Link href="" className='active-link link-item'>20 Apr</Link>
                                <Link href="" className='active-link link-item'>21 Apr</Link>
                                <Link href="" className='dark-link link-item'>22 Apr</Link>
                                <Link href="" className='dark-link link-item'>23 Apr</Link>
                                <Link href="" className='link-item'>24 Apr</Link>
                                <Link href="" className='link-item'>25 Apr</Link>
                                <Link href="" className='link-item'>26 Apr</Link>
                            </div>
                        </div>

                   </div>
                </div>
           </Form>
       </div>
   </Modal.Body>
   <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end">
       <button className='btn btn-secondary w-100'>Add with Booking ($24)</button>
   </Modal.Footer>

</Modal>

  )
}

export default AdddingEnhancementpopover