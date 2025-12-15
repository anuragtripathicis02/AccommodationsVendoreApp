import Link from 'next/link';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import CreateCustomPricingModal from './CreateCustomPricingModal';

const Payout = () => {
      const [showPromoChange, setShowPromoChange] = useState(false);

  return (
    <div className='payout-tabs-sec'>
        <div className='row'>
            <div className='col-xl-5 col-md-12'>
                <Form>
                    <div className='card-box p-16 mb-24'>
                        <h5>Set Per Night Pricing</h5>
                        <div className='color-hr-change hr-line-box mt-2 mb-24'>
                            <hr />
                        </div>
                        <div className="form-group placeholder-dark mb-24">
                            <Form.Label>General Stay Price Per Night</Form.Label>
                            <Form.Control type="text" placeholder='$ 1250' />
                        </div>
                    </div>
                    <div className='card-box p-16 mb-24'>
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
                        <div className='color-hr-change hr-line-box mt-2 mb-24'>
                            <hr />
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-md-12'>
                                <div className="form-group mb-24">
                                    <Form.Label >Advance Booking Amount</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Custom</option>
                                        <option value="1">Custom</option>
                                        <option value="2">Custom</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-xl-6 col-md-12'>
                                <div className="form-group placeholder-dark mb-24">
                                    <Form.Label>Min. Booking Amount</Form.Label>
                                    <Form.Control type="text" placeholder='$ 200' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-box p-16 mb-24'>
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
                </Form>
            </div>

            <div className='col-xl-7 col-md-12'>
                
                <div className='card-box p-16 mb-24'>
                    <h5>Create Custom Pricing for Specific Dates</h5>
                    <div className='color-hr-change hr-line-box mt-2 mb-2'>
                        <hr />
                    </div>
                    <div className='custom-pricing-add'>
                        <div className='custom-price-box d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                            <div className='price'>
                                <p className='mb-0'><strong>$ 1750</strong></p>
                            </div>
                            <div className='date'>
                                <p className='mb-0'>Date</p>
                            </div>
                            <div className='date-month'>
                                <p className='mb-0'>25 - 12 - 2025</p>
                            </div>
                            <div className='year'>
                                <p className='mb-0'>Every Year</p>
                            </div>
                            <div className='delete'>
                                <Link href="" className='delete-link'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="#F35940"/></svg>
                                </Link>
                            </div> 
                        </div>
                        <div className='custom-price-box d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                            <div className='price'>
                                <p className='mb-0'><strong>$ 1750</strong></p>
                            </div>
                            <div className='date'>
                                <p className='mb-0'>Date</p>
                            </div>
                            <div className='date-month'>
                                <p className='mb-0'>Mon, Tue, Thu</p>
                            </div>
                            <div className='year'>
                                <p className='mb-0'>Every Year</p>
                            </div>
                            <div className='delete'>
                                <Link href="" className='delete-link'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="#F35940"/></svg>
                                </Link>
                            </div> 
                        </div>
                        <div className='custom-price-box d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                            <div className='price'>
                                <p className='mb-0'><strong>$ 1750</strong></p>
                            </div>
                            <div className='date'>
                                <p className='mb-0'>Date</p>
                            </div>
                            <div className='date-month'>
                                <p className='mb-0'>25 - 12 - 2025</p>
                            </div>
                            <div className='year'>
                                <p className='mb-0'>Every Year till 26-10-2025</p>
                            </div>
                            <div className='delete'>
                                <Link href="" className='delete-link'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="#F35940"/></svg>
                                </Link>
                            </div> 
                        </div>
                        <div className='custom-price-box d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                            <div className='price'>
                                <p className='mb-0'><strong>$ 1750</strong></p>
                            </div>
                            <div className='date'>
                                <p className='mb-0'>Date</p>
                            </div>
                            <div className='date-month'>
                                <p className='mb-0'>25 - 12 - 2025</p>
                            </div>
                            <div className='year'>
                                <p className='mb-0'>Every Year</p>
                            </div>
                            <div className='delete'>
                                <Link href="" className='delete-link'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="#F35940"/></svg>
                                </Link>
                            </div> 
                        </div>
                        <div className='add-btn-pricing'>
                            <Link href="" className='add-price btn btn-border'  onClick={() => setShowPromoChange(true)} >Add More</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <CreateCustomPricingModal show={showPromoChange} handleClose={() => setShowPromoChange(false)} />
    </div>
  )
}

export default Payout