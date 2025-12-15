'use client'
import React from 'react';
import Image from "next/image";
import { Accordion } from 'react-bootstrap'
import Link from 'next/link';
import Car01 from '../../../../public/images/car01.png'
import Car02 from '../../../../public/images/car02.png'
import Car03 from '../../../../public/images/car03.png'
import Car04 from '../../../../public/images/car04.png'


const StayEnhancements = () => {
  return (
    <div className='fallery-sec card-box p-16 mt-4'>
        <div className='table-top d-flex align-items-center flex-md-nowrap flex-wrap justify-content-between gap-3'>
            <div className='left-table  position-relative'>
                <h2>Stay Enhancements</h2>
            </div>
            <div className='right-box'>
                <Link href="" className='btn btn-edit btn-border d-flex align-items-center gap-2'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2501H18.3337M5.19416 12.0881C4.80331 12.4799 4.58376 13.0106 4.58366 13.564V16.5001H7.53808C8.09174 16.5001 8.62249 16.2801 9.01391 15.8877L17.7222 7.17481C18.113 6.78303 18.3324 6.25229 18.3324 5.69898C18.3324 5.14567 18.113 4.61493 17.7222 4.22315L16.8624 3.36148C16.6685 3.16747 16.4382 3.01358 16.1848 2.90862C15.9314 2.80365 15.6598 2.74967 15.3855 2.74976C15.1112 2.74984 14.8396 2.80399 14.5862 2.90911C14.3329 3.01424 14.1027 3.16827 13.9089 3.3624L5.19416 12.0881Z" stroke="#652669" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Modify</span>
                </Link>
            </div>
        </div>
        <div className='gallery-item-inner'>
            <Accordion defaultActiveKey="0" className='accordion-basic-design'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Car/Bike Rental (6)</Accordion.Header>
                    <Accordion.Body>
                        <div className='accordion-sec'>
                            <div className='vechicle-box'>
                                <div className='row'>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car01} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>BMW 2010</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car02} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>Ranrover</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car03} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>BMW 2010</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car04} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>BMW 2010</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Activity Sessions (5)</Accordion.Header>
                    <Accordion.Body>
                    <div className='accordion-sec'>
                            <div className='vechicle-box'>
                                <div className='row'>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car03} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>BMW 2010</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car04} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>BMW 2010</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Services (5)</Accordion.Header>
                    <Accordion.Body>
                    <div className='accordion-sec'>
                            <div className='vechicle-box'>
                                <div className='row'>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car01} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>BMW 2010</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car02} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>Ranrover</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                                        <div className='enhancement-modal-box grey-bg p-0 h-100'>
                                            <div className='img-box position-relative'>
                                                <Image src={Car04} alt=''></Image>
                                            </div>
                                            <div className='text-box p-16'>
                                                <h4>BMW 2010</h4>
                                                <p className='m-0 p-0 pt-1'>₵12/days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default StayEnhancements