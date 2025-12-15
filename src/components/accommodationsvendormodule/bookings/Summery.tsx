import Link from 'next/link'
import React from 'react'

const Summery = () => {
  return (
    <div className='summery-sec'>
        <div className='summery-item-box mb-4'>
            <h3>Your Trip Summary</h3>
            <div className='grey-bg'>
                <div className='summery-head'>
                    <h4>Stay Details</h4>
                </div>
                <div className='summery-details d-flex align-items-center gap-2 justify-content-between mb-3'>
                    <div className='summery-left'>
                        <h4>Dates</h4>
                        <ul className='d-flex align-items-center gap-2'>
                            <li>Wed, 06 Jan 2025</li>
                            <li> - </li>
                            <li>Thus, 10 Jan 2025</li>
                        </ul>
                    </div>
                    <div className='summery-right d-flex gap-2 align-items-center'>
                        <Link href="" className='text-btn color-purple'>Edit</Link>
                    </div>
                </div>
                <div className='summery-details d-flex align-items-center gap-2 justify-content-between'>
                    <div className='summery-left'>
                        <h4>Room & Guests</h4>
                        <ul className='d-flex align-items-center gap-2'>
                            <li>1 Classic</li>
                            <li> - </li>
                            <li>3 guests, 5 infants</li>
                        </ul>
                    </div>
                    <div className='summery-right d-flex gap-2 align-items-center'>
                        <Link href="" className='text-btn color-purple'>Edit</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className=' summery-item-box'>
            <h3>Enhancements & Services</h3>
            <div className='grey-bg  mb-3'>
                <div className='summery-head'>
                    <h4>Car Rental</h4>
                </div>
                <div className='summery-details d-flex gap-2 justify-content-between'>
                    <div className='summery-left'>
                        <h4>BMW</h4>
                        <div className='date-box  flex-wrap d-flex align-items-center gap-2'>
                            <p className='m-0 p-0'>Dates: </p>
                            <ul className='box-design d-flex align-items-center gap-2'>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                            </ul>
                            <Link href="" className='view-more-btn d-block w-100'>View more</Link>
                        </div>
                    </div>
                    <div className='summery-right d-flex gap-2 '>
                        <Link href="" className='text-btn color-purple'>Edit</Link>
                        <Link href="" className='text-btn text-red'>Remove</Link>
                    </div>
                </div>
            </div>
            <div className="grey-bg  mb-3">
                <div className='summery-head'>
                    <h4>Tour Experience </h4>
                </div>
                <div className='summery-details d-flex gap-2 justify-content-between mb-3'>
                    <div className='summery-left'>
                        <h4>Local Tour</h4>
                        <div className='date-box d-flex  flex-wrap align-items-center gap-2'>
                            <p className='m-0 p-0'>Dates: </p>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>Thus, 9 Jan</li>
                            </ul> 
                            <p className='m-0 p-0 pl-5'>Time: </p>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>10:00 AM</li>
                            </ul>
                            <Link href="" className='view-more-btn d-block w-100'>View more</Link>
                        </div>
                    </div>
                    <div className='summery-right d-flex gap-2 '>
                        <Link href="" className='text-btn color-purple'>Edit</Link>
                        <Link href="" className='text-btn text-red'>Remove</Link>
                    </div>
                </div>
            </div>
            <div className="grey-bg  mb-3">
                <div className='summery-head'>
                    <h4>Cooking Experience</h4>
                </div>
                <div className='summery-details d-flex gap-2 justify-content-between mb-3'>
                    <div className='summery-left'>
                        <h4>Cooking Clasess</h4>
                        <div className='date-box d-flex align-items-center gap-2'>
                            <p className='m-0 p-0'>Dates: </p>
                            <ul className='box-design d-flex align-items-center gap-2'>
                                <li>6</li>
                                <li>7</li>
                            </ul>
                        </div>
                        <div className='date-box d-flex flex-wrap align-items-center gap-2 mt-2'>
                            <p className='m-0 p-0'>Time: </p>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>8:00 PM - 9:00 PM</li>
                            </ul> 
                            <Link href="" className='view-more-btn d-block w-100'>View more</Link>
                        </div>
                    </div>
                    <div className='summery-right d-flex gap-2'>
                        <Link href="" className='text-btn color-purple'>Edit</Link>
                        <Link href="" className='text-btn text-red'>Remove</Link>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Summery