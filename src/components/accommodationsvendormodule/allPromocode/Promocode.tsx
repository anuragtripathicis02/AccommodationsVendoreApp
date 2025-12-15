import Link from 'next/link'
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import PromocodeDetailsModal from './PromocodeDetailsModal';


const Promocode = () => {
      const [showPromoChange, setShowPromoChange] = useState(false);
  return (
    <div className='routes-sec promocode-sec'>
        <div className='row'>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn btn-active'>Active</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200 on your first oder</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn Unassigned btn-small'>Upcoming</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn btn-active In-active'>In-Active</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn btn-active'>Active</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn btn-active'>Active</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn btn-active'>Active</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn btn-active'>Active</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6 mb-4'>
                <div className='card-box routes-card'>
                    <div className='card-top d-flex align-items-center justify-content-between gap-2'>
                        <div className='btn-box'>
                            <Link href="" className='btn btn-active'>Active</Link>
                        </div>
                        <div className='dropdown-card'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mark Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">View Bookings</Dropdown.Item>
                                    <Dropdown.Item href="#"  onClick={() => setShowPromoChange(true)}>Edit Promocode</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" className='delete-btn'>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <h3>upto $50 Off </h3>
                        <p>Get $50 OFF on booking over $200</p>
                        <div className='btn-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>21 Jan - 04 Mar 2025</li>
                                <li><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3C5.75 3.51918 5.59605 4.02669 5.30761 4.45837C5.01917 4.89005 4.6092 5.2265 4.12955 5.42518C3.64989 5.62386 3.12209 5.67585 2.61289 5.57456C2.10369 5.47328 1.63596 5.22327 1.26885 4.85616C0.901733 4.48904 0.651726 4.02131 0.55044 3.51211C0.449154 3.00291 0.501137 2.47511 0.699817 1.99546C0.898497 1.5158 1.23495 1.10583 1.66663 0.817392C2.09831 0.528953 2.60583 0.375 3.125 0.375C3.82119 0.375 4.48887 0.651562 4.98116 1.14384C5.47344 1.63613 5.75 2.30381 5.75 3Z" fill="#4F4F4F"/></svg></li>
                                <li>104 Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col-md-12 mt-4 mb-4'>
                <Link href="" className='btn-load-more d-flex align-items-center gap-2 justify-content-center'>
                    <span>Load More</span>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" transform="matrix(0 -1 -1 0 32.5 32)" fill="#F6F6F6"/><path d="M11.8535 11.1463C11.807 11.0999 11.7519 11.063 11.6912 11.0379C11.6305 11.0128 11.5654 10.9998 11.4997 10.9998C11.434 10.9998 11.369 11.0128 11.3083 11.0379C11.2476 11.063 11.1924 11.0999 11.146 11.1463C11.0995 11.1928 11.0627 11.248 11.0375 11.3086C11.0124 11.3693 10.9994 11.4344 10.9994 11.5001C10.9994 11.5658 11.0124 11.6308 11.0375 11.6915C11.0627 11.7522 11.0995 11.8074 11.146 11.8538L16.146 16.8538C16.1924 16.9003 16.2476 16.9372 16.3083 16.9624C16.369 16.9875 16.434 17.0005 16.4997 17.0005C16.5654 17.0005 16.6305 16.9875 16.6912 16.9624C16.7519 16.9372 16.807 16.9003 16.8535 16.8538L21.8535 11.8538C21.9473 11.76 22 11.6328 22 11.5001C22 11.3674 21.9473 11.2402 21.8535 11.1463C21.7597 11.0525 21.6324 10.9998 21.4997 10.9998C21.367 10.9998 21.2398 11.0525 21.146 11.1463L16.4997 15.7932L11.8535 11.1463ZM16.4997 20.7932L21.146 16.1463C21.2398 16.0525 21.367 15.9998 21.4997 15.9998C21.6324 15.9998 21.7597 16.0525 21.8535 16.1463C21.9473 16.2402 22 16.3674 22 16.5001C22 16.6328 21.9473 16.76 21.8535 16.8538L16.8535 21.8538C16.807 21.9003 16.7519 21.9372 16.6912 21.9624C16.6305 21.9875 16.5654 22.0005 16.4997 22.0005C16.434 22.0005 16.369 21.9875 16.3083 21.9624C16.2476 21.9372 16.1924 21.9003 16.146 21.8538L11.146 16.8538C11.0995 16.8074 11.0627 16.7522 11.0375 16.6915C11.0124 16.6308 10.9994 16.5658 10.9994 16.5001C10.9994 16.4344 11.0124 16.3693 11.0375 16.3086C11.0627 16.248 11.0995 16.1928 11.146 16.1463C11.1924 16.0999 11.2476 16.063 11.3083 16.0379C11.369 16.0128 11.434 15.9998 11.4997 15.9998C11.5654 15.9998 11.6305 16.0128 11.6912 16.0379C11.7519 16.063 11.807 16.0999 11.8535 16.1463L16.4997 20.7932Z" fill="#652669"/></svg>
                </Link>
            </div>
        </div>
        <PromocodeDetailsModal show={showPromoChange} handleClose={() => setShowPromoChange(false)} />
    </div>

  )
}

export default Promocode