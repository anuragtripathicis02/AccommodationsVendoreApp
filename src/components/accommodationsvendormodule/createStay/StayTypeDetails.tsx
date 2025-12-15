import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Image from "next/image";
import { Accordion, Button, Form } from 'react-bootstrap'
import Hotal05 from '../../../../public/images/hotal-05.png'
import AddMoreHotal from './AddMoreHotal';

const StayTypeDetails = () => {
    const [count1, setCount1] = useState(10);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(10);
    const [count4, setCount4] = useState(2);
    const [count5, setCount5] = useState(4);
    const [count6, setCount6] = useState(1);
    const [count7, setCount7] = useState(4);
    const [count8, setCount8] = useState(2);
  
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
    
    const [showPromoChange, setShowPromoChange] = useState(false);


  return (
    <div className='stay-details-tabs-sec'>    
        <Form>
            <div className='row p-0'>
                <div className='col-md-8'>
                    <div className="form-group mb-24">
                        <Form.Label >Select Property</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Riveria Resort (Resort At beach Side)</option>
                            <option value="1">Riveria Resort (Resort At beach Side) </option>
                            <option value="2">Riveria Resort (Resort At beach Side)</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label >Stay Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Rooms</option>
                            <option value="1">Single Rooms </option>
                            <option value="2">Double Rooms</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className='form-group mb-24'>
                    <Form.Label>Booking Area</Form.Label>
                    <Form.Control type='text' placeholder='800 sqft.' />
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className='form-group mb-24'>
                    <Form.Label>Daily Fair</Form.Label>
                    <Form.Control type='text' placeholder='120$' />
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className='form-group mb-24'>
                    <Form.Label>Min. Booking Amount</Form.Label>
                    <Form.Control type='text' placeholder='80$' />
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className="form-group mb-24">
                    <Form.Label>Total Bathrooms</Form.Label>
                    {renderCounter(count1, setCount1)}
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className="form-group mb-24">
                    <Form.Label>Max Adults/Children Allowed</Form.Label>
                    {renderCounter(count2, setCount2)}
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className="form-group mb-24">
                    <Form.Label>Max Infants Allowed</Form.Label>
                    {renderCounter(count3, setCount3)}
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className="form-group mb-24">
                    <Form.Label>Max Pets Allowed</Form.Label>
                    {renderCounter(count4, setCount4)}
                    </div>
                </div>
                <div className='col-xl-3 col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label >Bathroom Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Attached</option>
                            <option value="1">Single Attached </option>
                            <option value="2">Double Attached</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
            <div className='image-add-accordion mt-4'>
                <div className='enhancements-sec'>
                    <Accordion defaultActiveKey="0" alwaysOpen>
                        <Accordion.Item eventKey="0" className='mb-3'>
                            <Accordion.Header>
                                    <span className='text'>Add Bedrooms</span>
                                    <span className='lineshap'></span>
                                    <span className='text-count'>(2)</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className='upload-img-box-sec'>
                                    <div className='row'>
                                        <div className='col-xl-3 col-md-6 mb-24'>
                                            <div className='upload-img-box '>
                                                <div className='img-box position-relative'>
                                                    <Image src={Hotal05} alt=""></Image>
                                                    <Link href="" className="close-btn position-absolute">
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M27.5469 25.954C27.7582 26.1653 27.8769 26.452 27.8769 26.7509C27.8769 27.0497 27.7582 27.3364 27.5469 27.5477C27.3355 27.7591 27.0489 27.8778 26.75 27.8778C26.4511 27.8778 26.1645 27.7591 25.9531 27.5477L20.0009 21.5937L14.0469 27.5459C13.8355 27.7572 13.5489 27.8759 13.25 27.8759C12.9511 27.8759 12.6645 27.7572 12.4531 27.5459C12.2418 27.3345 12.123 27.0479 12.123 26.749C12.123 26.4501 12.2418 26.1635 12.4531 25.9521L18.4072 19.9999L12.455 14.0459C12.2437 13.8345 12.1249 13.5479 12.1249 13.249C12.1249 12.9501 12.2437 12.6635 12.455 12.4521C12.6663 12.2408 12.953 12.122 13.2519 12.122C13.5508 12.122 13.8374 12.2408 14.0487 12.4521L20.0009 18.4062L25.955 12.4512C26.1663 12.2398 26.453 12.1211 26.7519 12.1211C27.0508 12.1211 27.3374 12.2398 27.5487 12.4512C27.7601 12.6625 27.8788 12.9492 27.8788 13.248C27.8788 13.5469 27.7601 13.8336 27.5487 14.0449L21.5947 19.9999L27.5469 25.954Z" fill="white"/></svg>
                                                    </Link>
                                                </div>
                                                <div className='text-box'>
                                                    <h4>Bedroom 1</h4>
                                                    <p>King size bed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3 col-md-6 mb-24'>
                                            <div className='upload-img-box'>
                                                <div className='img-box position-relative'>
                                                    <Image src={Hotal05} alt=""></Image>
                                                    <Link href="" className="close-btn position-absolute">
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="black" fill-opacity="0.2"/><path d="M27.5469 25.954C27.7582 26.1653 27.8769 26.452 27.8769 26.7509C27.8769 27.0497 27.7582 27.3364 27.5469 27.5477C27.3355 27.7591 27.0489 27.8778 26.75 27.8778C26.4511 27.8778 26.1645 27.7591 25.9531 27.5477L20.0009 21.5937L14.0469 27.5459C13.8355 27.7572 13.5489 27.8759 13.25 27.8759C12.9511 27.8759 12.6645 27.7572 12.4531 27.5459C12.2418 27.3345 12.123 27.0479 12.123 26.749C12.123 26.4501 12.2418 26.1635 12.4531 25.9521L18.4072 19.9999L12.455 14.0459C12.2437 13.8345 12.1249 13.5479 12.1249 13.249C12.1249 12.9501 12.2437 12.6635 12.455 12.4521C12.6663 12.2408 12.953 12.122 13.2519 12.122C13.5508 12.122 13.8374 12.2408 14.0487 12.4521L20.0009 18.4062L25.955 12.4512C26.1663 12.2398 26.453 12.1211 26.7519 12.1211C27.0508 12.1211 27.3374 12.2398 27.5487 12.4512C27.7601 12.6625 27.8788 12.9492 27.8788 13.248C27.8788 13.5469 27.7601 13.8336 27.5487 14.0449L21.5947 19.9999L27.5469 25.954Z" fill="white"/></svg>
                                                    </Link>
                                                </div>
                                                <div className='text-box'>
                                                    <h4>Bedroom 1</h4>
                                                    <p>King size bed</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3 col-md-6 mb-24'>
                                            <div className='upload-img-box add-more-hotal position-relative'>
                                                <Link href="" className="close-btn  d-flex align-items-center justify-content-center gap-2 flex-column" onClick={() => setShowPromoChange(true)} >
                                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2.96484C13.83 2.96484 11.2199 3.75661 8.99981 5.24C6.77974 6.7234 5.04942 8.83181 4.02763 11.2986C3.00585 13.7654 2.7385 16.4798 3.2594 19.0986C3.78031 21.7173 5.06606 24.1228 6.95406 26.0108C8.84207 27.8988 11.2475 29.1845 13.8663 29.7054C16.485 30.2263 19.1994 29.959 21.6662 28.9372C24.133 27.9154 26.2414 26.1851 27.7248 23.965C29.2082 21.745 30 19.1349 30 16.4648C29.996 12.8856 28.5724 9.45417 26.0416 6.92329C23.5107 4.39241 20.0792 2.96881 16.5 2.96484ZM16.5 26.9648C14.4233 26.9648 12.3932 26.349 10.6665 25.1953C8.9398 24.0415 7.59399 22.4016 6.79927 20.483C6.00455 18.5644 5.79662 16.4532 6.20176 14.4164C6.60691 12.3796 7.60693 10.5087 9.07538 9.04022C10.5438 7.57177 12.4148 6.57174 14.4516 6.1666C16.4884 5.76145 18.5996 5.96939 20.5182 6.76411C22.4368 7.55883 24.0767 8.90464 25.2304 10.6314C26.3842 12.3581 27 14.3881 27 16.4648C26.997 19.2487 25.8898 21.9177 23.9213 23.8862C21.9529 25.8547 19.2839 26.9619 16.5 26.9648ZM23 16.4648C23 16.8627 22.842 17.2442 22.5607 17.5255C22.2794 17.8068 21.8978 17.9648 21.5 17.9648H18V21.4648C18 21.8627 17.842 22.2442 17.5607 22.5255C17.2794 22.8068 16.8978 22.9648 16.5 22.9648C16.1022 22.9648 15.7206 22.8068 15.4393 22.5255C15.158 22.2442 15 21.8627 15 21.4648V17.9648H11.5C11.1022 17.9648 10.7207 17.8068 10.4393 17.5255C10.158 17.2442 10 16.8627 10 16.4648C10 16.067 10.158 15.6855 10.4393 15.4042C10.7207 15.1229 11.1022 14.9648 11.5 14.9648H15V11.4648C15 11.067 15.158 10.6855 15.4393 10.4042C15.7206 10.1229 16.1022 9.96484 16.5 9.96484C16.8978 9.96484 17.2794 10.1229 17.5607 10.4042C17.842 10.6855 18 11.067 18 11.4648V14.9648H21.5C21.8978 14.9648 22.2794 15.1229 22.5607 15.4042C22.842 15.6855 23 16.067 23 16.4648Z" fill="#E7E7E7"/></svg>
                                                    <span>Add More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
            </div>
            </div>
        </Form>
        <AddMoreHotal  show={showPromoChange} handleClose={() => setShowPromoChange(false)} />
    </div>
  )
}

export default StayTypeDetails