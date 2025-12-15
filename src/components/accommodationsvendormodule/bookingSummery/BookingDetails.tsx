'use client'
import React from 'react';
import Image from "next/image";

import BookingDetailsImg from '../../../../public/images/booking-details.png'
import OpretatorImg from '../../../../public/images/opretator-img.png'
import BikeBox from '../../../../public/images/bike-box.png'
import peopleDay from '../../../../public/images/people-day.png'
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';

const BookingDetails = () => {
  return (
    <div className='booking-details-sec'>
        <div className='row'>
            <div className='col-xl-8 col-md-12'>
                <div className='card-box details-card d-flex flex-wrap gap-2 mb-4 p-16'>
                    <div className='img-box'>
                        <Image src={BookingDetailsImg} alt=''></Image>
                    </div>
                    <div className='text-box'>
                        <h2>Alisa Hotel North Ridge </h2>
                        <p>21 Dr Isert St, Accra, Ghana</p>
                        <div className='check-in-out-sec d-flex align-items-center gap-2 justify-content-between'>
                            <div className='check-in-out-box text-start'>
                                <h2>Check-In</h2>
                                <h3>wed, 06 Jan 2025</h3>
                                <p>12:00 PM onwards</p>
                            </div>
                            <div className='check-in-out-box text-center'>
                                <span>1N</span>
                            </div>
                            <div className='check-in-out-box text-end'>
                                <h2>Check-Out</h2>
                                <h3>Thus, 7 Jan 2025</h3>
                                <p>Before 11:00 AM</p>
                            </div>
                        </div>
                        <div className='room-guest-sec'>
                            <p>Rooms & Guests</p>
                            <ul className="schedule-inline d-flex flex-wrap align-items-center gap-2">
                                <li>1 Classic  Room</li>
                                <li><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#4F4F4F"></circle></svg></li>
                                <li>1 Guest</li>
                            </ul>
                        </div>
                        <div className='booking-id-bottom d-flex align-items-center gap-2 justify-content-between'>
                            <div className='id-bboking-left'>
                                <p>Booking id</p>
                                <p>F90215216</p>
                            </div>
                            <div className='id-booking-right'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9.667C7 8.95967 7.28099 8.28131 7.78115 7.78115C8.28131 7.28099 8.95967 7 9.667 7H18.333C18.6832 7 19.03 7.06898 19.3536 7.20301C19.6772 7.33704 19.9712 7.53349 20.2189 7.78115C20.4665 8.0288 20.663 8.32281 20.797 8.64638C20.931 8.96996 21 9.31676 21 9.667V18.333C21 18.6832 20.931 19.03 20.797 19.3536C20.663 19.6772 20.4665 19.9712 20.2189 20.2189C19.9712 20.4665 19.6772 20.663 19.3536 20.797C19.03 20.931 18.6832 21 18.333 21H9.667C9.31676 21 8.96996 20.931 8.64638 20.797C8.32281 20.663 8.0288 20.4665 7.78115 20.2189C7.53349 19.9712 7.33704 19.6772 7.20301 19.3536C7.06898 19.03 7 18.6832 7 18.333V9.667Z" stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.012 16.737C3.705 16.5626 3.44965 16.31 3.2719 16.0049C3.09415 15.6998 3.00034 15.3531 3 15V5C3 3.9 3.9 3 5 3H15C15.75 3 16.158 3.385 16.5 4" stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-box booking-guest-details d-flex align-items-center p-16 gap-2 justify-content-between mb-4 flex-md-nowrap flex-wrap'>
                    <div className='booking-guest d-flex align-items-center gap-2'>
                        <div className='img-box'>
                            <Image src={OpretatorImg} className='' alt=""></Image>
                        </div>
                        <div className='text-box'>
                            <h2>John Doe</h2>
                            <p>Guest ID#1234567890</p>
                        </div>
                    </div>
                    <div className='booking-guest'>
                        <p>Room No. : <span className='text-purple'>340</span></p>  
                        <p>Booked On: 25-03-2024 at 7:50AM</p>
                    </div>
                    <div className='booking-guest routes-card'>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" className='btn-active-green d-flex align-items-center gap-2 ps-0 pe-0'> 
                                        <span>View Details</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" className='d-flex align-items-center gap-2 ps-0 pe-0'> 
                                        <span>Mark Check-In</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" className='d-flex align-items-center gap-2 ps-0 pe-0'> 
                                        <span>Date Change</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" className='d-flex align-items-center gap-2 ps-0 pe-0'> 
                                        <span>Chat With Guest</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2 ps-0 pe-0'> 
                                        <span>Initiate Checkout</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" className='btn-active-red d-flex align-items-center gap-2 ps-0 pe-0'> 
                                        <span>Cancel Booking</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className='card-box p-16 booking-enhancement'>
                    <h2>Added Enhancements</h2>
                    <div className='enhancements-sec mt-4'>
                        <div className='accordion-box d-flex justify-content-between gap-2 flex-wrap align-items-center mb-4 flex-md-nowrap flex-wrap'>
                            <div className='text-details d-flex align-items-center gap-2'>
                                <div className='img-box'>
                                    <Image alt='' src={BikeBox}></Image>
                                </div>
                                <div className='text-box'>
                                    <h5>Suzuki Q for up-to 2 Guest</h5>
                                    <span>(Qty : 2) ($12 /Day)</span>
                                </div>
                            </div>
                            <div className='text-box'>
                                <p className='m-0 p-0'>Dates:</p>
                                <span>20 Apr, 21 Apr</span>
                            </div>
                            <div className='price-box'>
                                <h6>$48</h6>
                            </div>
                        </div>
                        <div className='accordion-box d-flex justify-content-between gap-2 flex-wrap align-items-center mb-0  flex-md-nowrap flex-wrap'>
                            <div className='text-details d-flex align-items-center gap-2'>
                                <div className='img-box'>
                                    <Image alt='' src={peopleDay}></Image>
                                </div>
                                <div className='text-box'>
                                    <h5>Cooking Classes</h5>
                                    <span>(People : 2) ($20 /Day)</span>
                                </div>
                            </div>
                            <div className='text-box'>
                                <p className='m-0 p-0'>Dates:</p>
                                <span>20 Apr, 21 Apr</span>
                            </div>
                            <div className='price-box'>
                                <h6>$80</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-12 mt-xl-0 mt-4'>
                <div className='card-details-right'>
                    <div className='card-box p-16'>
                        <h2 className='text-center'>Billing Summery</h2>
                        <div className='card-billing'>
                            <div className='card-billing-box justify-content-between d-flex align-items-end mb-2'>
                                <div className='card-billing-left'>
                                    <p>Classic Room charges <span>for  1 Night * 1 Guest</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <h6>₵ 2050</h6>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center mb-2'>
                                <div className='card-billing-left'>
                                    <p>Suzuki Q for up-to 2 Guest <span>(Qty : 2) ($12 /Day) (For 2 Days)</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <h6>+₵ 48</h6>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center mb-4'>
                                <div className='card-billing-left'>
                                    <p>Cooking Classes <span>(Ppl : 2) ($20 /Day) (For 2 Days)</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <h6>+₵ 80</h6>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center mb-1'>
                                <div className='card-billing-left'>
                                    <p><span>Instant discount</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <p>-₵ 150</p>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center mb-1'>
                                <div className='card-billing-left'>
                                    <p><span>Coupon Discount</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <p>-₵ 100</p>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center mb-4'>
                                <div className='card-billing-left'>
                                    <p><span>Squch Insurance</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <p>+₵ 10</p>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center border-billing mb-4'>
                                <div className='card-billing-left'>
                                    <p className='text-purple'>Billed Total</p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <h6 className='text-purple'>₵ 1750</h6>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center mb-1'>
                                <div className='card-billing-left'>
                                    <p><span>Payment Type</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <p>Partial Pay</p>
                                </div>
                            </div>
                            <div className='card-billing-box  justify-content-between d-flex align-items-center mb-4'>
                                <div className='card-billing-left'>
                                    <p><span>Pay mode</span></p>
                                </div>
                                <div className='card-billing-right text-end'>
                                    <p>Card Payment</p>
                                </div>
                            </div>
                            
                            
                            <div className='card-billing-btn'>
                                <Link href="#" className='btn btn-grey btn-dark-red d-flex align-items-center justify-content-center gap-2 w-100 mb-2'> 
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.6367C21.4688 11.957 21.8867 12.3203 22.2539 12.7266C22.6211 13.1328 22.9375 13.5781 23.2031 14.0625C23.4688 14.5469 23.6641 15.0586 23.7891 15.5977C23.9141 16.1367 23.9844 16.6875 24 17.25C24 18.1797 23.8242 19.0547 23.4727 19.875C23.1211 20.6953 22.6367 21.4102 22.0195 22.0195C21.4023 22.6289 20.6875 23.1094 19.875 23.4609C19.0625 23.8125 18.1875 23.9922 17.25 24C16.5391 24 15.8516 23.8945 15.1875 23.6836C14.5234 23.4727 13.9141 23.168 13.3594 22.7695C12.8047 22.3711 12.3125 21.8945 11.8828 21.3398C11.4531 20.7852 11.1211 20.1719 10.8867 19.5H1.5V1.5H4.5V0H6V1.5H16.5V0H18V1.5H21V11.6367ZM3 3V6H19.5V3H18V4.5H16.5V3H6V4.5H4.5V3H3ZM10.5352 18C10.5117 17.7578 10.5 17.5078 10.5 17.25C10.5 16.5781 10.5938 15.9258 10.7812 15.293C10.9688 14.6602 11.2539 14.0625 11.6367 13.5H10.5V12H12V13.0078C12.3203 12.6094 12.6758 12.2578 13.0664 11.9531C13.457 11.6484 13.8789 11.3867 14.332 11.168C14.7852 10.9492 15.2578 10.7852 15.75 10.6758C16.2422 10.5664 16.7422 10.5078 17.25 10.5C18.0312 10.5 18.7812 10.6289 19.5 10.8867V7.5H3V18H10.5352ZM17.25 22.5C17.9766 22.5 18.6562 22.3633 19.2891 22.0898C19.9219 21.8164 20.4766 21.4414 20.9531 20.9648C21.4297 20.4883 21.8047 19.9336 22.0781 19.3008C22.3516 18.668 22.4922 17.9844 22.5 17.25C22.5 16.5234 22.3633 15.8438 22.0898 15.2109C21.8164 14.5781 21.4414 14.0234 20.9648 13.5469C20.4883 13.0703 19.9336 12.6953 19.3008 12.4219C18.668 12.1484 17.9844 12.0078 17.25 12C16.5234 12 15.8438 12.1367 15.2109 12.4102C14.5781 12.6836 14.0234 13.0586 13.5469 13.5352C13.0703 14.0117 12.6953 14.5664 12.4219 15.1992C12.1484 15.832 12.0078 16.5156 12 17.25C12 17.9766 12.1367 18.6562 12.4102 19.2891C12.6836 19.9219 13.0586 20.4766 13.5352 20.9531C14.0117 21.4297 14.5664 21.8047 15.1992 22.0781C15.832 22.3516 16.5156 22.4922 17.25 22.5ZM4.5 12H6V13.5H4.5V12ZM7.5 12H9V13.5H7.5V12ZM7.5 9H9V10.5H7.5V9ZM7.5 15H9V16.5H7.5V15ZM12 10.5H10.5V9H12V10.5ZM15 10.5H13.5V9H15V10.5ZM4.5 9H6V10.5H4.5V9Z" fill="#F35940"/><path d="M15.45 19.5L15 19.05L16.8 17.25L15 15.45L15.45 15L17.25 16.8L19.05 15L19.5 15.45L17.7 17.25L19.5 19.05L19.05 19.5L17.25 17.7L15.45 19.5Z" fill="#F35940"/></svg>
                                    <span>Cancel Booking</span>
                                </Link>
                                <Link href="#" className='btn btn-secondary d-block gap-2 w-100'> 
                                    Initiate Date Change
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BookingDetails