import React, { useState } from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";

const ChangePasswordModal = ({ show, handleClose }: any) => {      
    const [passwordVisibility, setPasswordVisibility] = useState({
          password1: false,
          password2: false,
          password3: false
      });

          // Toggle function
    const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
      setPasswordVisibility(prevState => ({
          ...prevState,
          [field]: !prevState[field]
      }));
  };
  return (
    <Modal show={show}  onHide={handleClose} centered className="modal-filter change-password-modal common-modal-sec notification-box pt-4">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='modal-box'>
                    <div className='heading'>
                        <h2 className='mb-3'>Change password</h2>
                    </div>
                    <div className='promocode-sec-modal'>
                         <div className="form-group mb-24">
                            <div className="form-group position-relative password-fild">
                                <Form.Label htmlFor="text1">Old Password</Form.Label>
                                <div className="password-field-box position-relative">
                                    <Form.Control type={passwordVisibility.password1 ? 'text' : 'password'} id="password1" placeholder="Johnsmith1001@gmail.com"/>
                                    <span className={`show-pw password-container  ${passwordVisibility.password1 ? 'hide-pw' : ''}`} onClick={() => togglePasswordVisibility('password1')} style={{ cursor: 'pointer' }} >
                                        <Image src={passwordVisibility.password1 ? '/images/eye.png' : '/images/eye-slash.png'} alt={passwordVisibility.password1 ? 'Show Password' : 'Hide Password'} width="24" height="24"/>
                                    </span>
                                </div>
                            </div>
                        </div>
            
                        <div className="form-group mb-24">
                            <div className="form-group position-relative password-fild">
                                <Form.Label htmlFor="text2">New Password</Form.Label>
                                <div className="password-field-box position-relative">
                                    <Form.Control type={passwordVisibility.password2 ? 'text' : 'password'} id="password1" placeholder="Johnsmith1001@gmail.com"/>
                                    <span className={`show-pw password-container  ${passwordVisibility.password2 ? 'hide-pw' : ''}`} onClick={() => togglePasswordVisibility('password2')} style={{ cursor: 'pointer' }} >
                                        <Image src={passwordVisibility.password2 ? '/images/eye.png' : '/images/eye-slash.png'} alt={passwordVisibility.password2 ? 'Show Password' : 'Hide Password'} width="24" height="24"/>
                                    </span>
                                </div>
                            </div>
                        </div>
            
                        <div className="form-group mb-24">
                            <div className="form-group position-relative password-fild">
                                <Form.Label htmlFor="text2">Repeat New Password</Form.Label>
                                <div className="password-field-box position-relative">
                                    <Form.Control type={passwordVisibility.password3 ? 'text' : 'password'} id="password1" placeholder="Johnsmith1001@gmail.com"/>
                                    <span className={`show-pw password-container  ${passwordVisibility.password3 ? 'hide-pw' : ''}`} onClick={() => togglePasswordVisibility('password3')} style={{ cursor: 'pointer' }} >
                                        <Image src={passwordVisibility.password3 ? '/images/eye.png' : '/images/eye-slash.png'} alt={passwordVisibility.password3 ? 'Show Password' : 'Hide Password'} width="24" height="24"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0 ">
                <Link href="" className='btn btn-grey' onClick={handleClose}>Cancel</Link>
                <button className='btn btn-secondary' >Set Pricing</button>
            </Modal.Footer>
        </Modal>
  )
}

export default ChangePasswordModal