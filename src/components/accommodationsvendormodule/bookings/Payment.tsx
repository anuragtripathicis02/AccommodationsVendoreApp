import React from 'react'
import { Form } from 'react-bootstrap'
import LanguageSwitcher from '../Login/LanguageSwitcher'

const Payment = () => {
  return (
    <div className='payment-sec'>
         <Form>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="form-group mb-4 active-field-box">
                        <Form.Label >Boking Amount</Form.Label>
                        <Form.Control type="text" placeholder='$ 200' />
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className="form-group inner-position-box mb-4 position-relative">
                        <Form.Label >Promo Code</Form.Label>
                        <Form.Control type="text" placeholder=' (get $30 discount on Billed over $100)' />
                        <span className="fiexd-field">FIRST30</span>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-24">
                        <Form.Label>Payout Type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Partial Pay</option>
                            <option value="1">Partial Pay One</option>
                            <option value="2">Partial Pay Two</option>
                            <option value="3">Partial Pay Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group  mb-4 ">
                        <Form.Label >Paying Amount</Form.Label>
                        <Form.Control type="text" placeholder='$ 123' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-4 active-field-box">
                        <Form.Label >Remaining Amount</Form.Label>
                        <Form.Control type="text" placeholder='$ 77' />
                    </div>
                </div>
                <div className='col-md-12'>
                    <div className="form-group mb-24">
                        <Form.Label>Select Payee</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Add Different Payee</option>
                            <option value="1">Add Different Payee One</option>
                            <option value="2">Add Different Payee Two</option>
                            <option value="3">Add Different Payee Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="form-group mb-4">
                        <Form.Label >Payee Name</Form.Label>
                        <Form.Control type="text" placeholder='Johnsmith1001@gmail.com' />
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
                    <div className="form-group mb-lg-0 mb-4">
                        <Form.Label >Email Address</Form.Label>
                        <Form.Control type="text" placeholder='Johnsmith1001@gmail.com' />
                    </div>
                </div>

            </div>
        </Form>
    </div>
  )
}

export default Payment