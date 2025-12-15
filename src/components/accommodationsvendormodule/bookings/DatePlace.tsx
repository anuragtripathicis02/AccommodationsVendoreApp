import DatePickers from '@/components/DatePickers'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const DatePlace = () => {
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
    <div className='date-place-sec'>
        <Form>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label>Select Property</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>-- Select Value --</option>
                            <option value="1">Property One</option>
                            <option value="2">Property Two</option>
                            <option value="3">Property Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-1">
                        <Form.Label>Check-in Date</Form.Label>
                        <DatePickers />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-1">
                        <Form.Label>Check-out Date</Form.Label>
                        <DatePickers />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label>Booking Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Room</option>
                            <option value="1">Room One</option>
                            <option value="2">Room Two</option>
                            <option value="3">Room Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label>Room Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Classic Room ₵120/Night</option>
                            <option value="1">Classic Room ₵120/Night here</option>
                            <option value="2">Classic Room ₵120/Night here</option>
                            <option value="3">Classic Room ₵120/Night here</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='form-group  mb-24'>
                        <Form.Label>Number of Rooms</Form.Label><Form.Label>Left Side Rows</Form.Label>
                        {renderCounter(count1, setCount1)}
                        {/* <div className='form-fild'>
                            <button className='btn minus'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.93343 18.3334C14.5168 18.3334 18.2668 14.5834 18.2668 10C18.2668 5.41669 14.5168 1.66669 9.93343 1.66669C5.3501 1.66669 1.6001 5.41669 1.6001 10C1.6001 14.5834 5.3501 18.3334 9.93343 18.3334Z" stroke="#652669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.6001 10H13.2668" stroke="#652669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <input type="text" className="form-control text-center" placeholder="01" />
                            <button className='btn plus'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 18.3334C14.5837 18.3334 18.3337 14.5834 18.3337 10C18.3337 5.41669 14.5837 1.66669 10.0003 1.66669C5.41699 1.66669 1.66699 5.41669 1.66699 10C1.66699 14.5834 5.41699 18.3334 10.0003 18.3334Z" stroke="#652669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.66699 10H13.3337" stroke="#652669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 13.3334V6.66669" stroke="#652669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </Form>
    </div>
  )
}

export default DatePlace