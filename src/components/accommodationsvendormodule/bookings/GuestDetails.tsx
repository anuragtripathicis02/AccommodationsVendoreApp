'use client';
import React from 'react'
import '../../../app/flags.css';
import { Form } from 'react-bootstrap'
import LanguageSwitcher from '../Login/LanguageSwitcher'

const GuestDetails = () => {
  return (
    <div className='guest-details-sec'>
        <div className='guest-details-form-sec'>
            <Form>
                <div className='grey-bg mb-3'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="form-group mb-4">
                                <Form.Label >Primary Guest Name</Form.Label>
                                <Form.Control type="text" placeholder='John Doe' />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="flag-box form-group mb-24">
                                <Form.Label className='fw-mediam'>Contact Number</Form.Label>
                                <div className="d-flex border-outer">
                                    <LanguageSwitcher />
                                    <div className="flex-grow-1">
                                        <Form.Control type="text" aria-describedby="" placeholder='1234567890' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-4">
                                <Form.Label >Guest Email</Form.Label>
                                <Form.Control type="text" placeholder='Johndoe@gmail.com' />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-4 position-relative">
                                <Form.Label >Guest Age</Form.Label>
                                <Form.Control type="text" placeholder='75' />
                                <span className='adult'>Adult</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-4">
                                <Form.Label >Gender</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Male</option>
                                    <option value="2">FeMale</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-4">
                                <Form.Label >Needs Special Care</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Yes</option>
                                    <option value="1">No</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group mb-4">
                                <Form.Label >Select Which Applies</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>People With Wheelchair</option>
                                    <option value="1">People With Wheelchair 1</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grey-bg mb-3'>
                    <div className='row'>
                        <div className='col-xl-5 col-lg-4'>
                            <div className="form-group mb-lg-0 mb-4">
                                <Form.Label >Guest Name For Room2</Form.Label>
                                <Form.Control type="text" placeholder='John Doe' />
                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-8'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4 position-relative">
                                        <Form.Label >Passenger Age</Form.Label>
                                        <Form.Control type="text" placeholder='8' />
                                        <span className='adult'>Child</span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4">
                                        <Form.Label >Passenger Gender</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Male</option>
                                            <option value="2">FeMale</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4">
                                        <Form.Label >Needs Special Care</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Yes</option>
                                            <option value="1">No</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='grey-bg mb-3'>
                    <div className='row'>
                        <div className='col-xl-5 col-lg-4'>
                            <div className="form-group mb-lg-0 mb-4">
                                <Form.Label >Guest Name For Room3</Form.Label>
                                <Form.Control type="text" placeholder='John Doe' />
                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-8'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4 position-relative">
                                        <Form.Label >Passenger Age</Form.Label>
                                        <Form.Control type="text" placeholder='25' />
                                        <span className='adult'>Adult</span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4">
                                        <Form.Label >Passenger Gender</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Male</option>
                                            <option value="2">FeMale</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4">
                                        <Form.Label >Needs Special Care</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Yes</option>
                                            <option value="1">No</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='grey-bg mb-3'>
                    <div className='row'>
                        <div className='col-xl-5 col-lg-4'>
                            <div className="form-group mb-lg-0 mb-4">
                                <Form.Label >Guest Name For Room4</Form.Label>
                                <Form.Control type="text" placeholder='John Doe' />
                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-8'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4 position-relative">
                                        <Form.Label >Passenger Age</Form.Label>
                                        <Form.Control type="text" placeholder='25' />
                                        <span className='adult'>Adult</span>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4">
                                        <Form.Label >Passenger Gender</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Male</option>
                                            <option value="2">FeMale</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-md-0 mb-4">
                                        <Form.Label >Needs Special Care</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Yes</option>
                                            <option value="1">No</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

        </Form>
        </div>
    </div>
  )
}

export default GuestDetails