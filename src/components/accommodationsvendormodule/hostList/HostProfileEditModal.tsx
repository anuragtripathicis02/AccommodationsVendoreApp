import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Accordion, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import AvatarProfileNew from '../../../../public/images/AvatarProfileNew.png'
import LanguageSwitcher from '../Login/LanguageSwitcher';
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName';

const HostProfileEditModal = ({ show, handleClose }: any) => {
  return (
     
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec pt-4">
        <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            <div className='modal-box'>
                <div className='heading'>
                    <h2>Host Profile</h2>
                </div>
                <Form className='position-relative'>    
                    <div className='row'> 
                        <div className='col-md-3'>
                            <div className='profile-modal'>
                                <div className='profile-upload-box position-relative'>
                                    <Image src={AvatarProfileNew} alt=''></Image>
                                    <span className='upload-cam'>
                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="48" height="48" rx="24" fill="#78297F"/><rect x="4" y="4" width="48" height="48" rx="24" stroke="white" strokeWidth="8"/><path d="M35.5 21.25H32.9012L31.6234 19.3338C31.555 19.2311 31.4623 19.147 31.3535 19.0888C31.2448 19.0306 31.1233 19.0001 31 19H25C24.8767 19.0001 24.7552 19.0306 24.6465 19.0888C24.5377 19.147 24.445 19.2311 24.3766 19.3338L23.0978 21.25H20.5C19.9033 21.25 19.331 21.4871 18.909 21.909C18.4871 22.331 18.25 22.9033 18.25 23.5V34C18.25 34.5967 18.4871 35.169 18.909 35.591C19.331 36.0129 19.9033 36.25 20.5 36.25H35.5C36.0967 36.25 36.669 36.0129 37.091 35.591C37.5129 35.169 37.75 34.5967 37.75 34V23.5C37.75 22.9033 37.5129 22.331 37.091 21.909C36.669 21.4871 36.0967 21.25 35.5 21.25ZM36.25 34C36.25 34.1989 36.171 34.3897 36.0303 34.5303C35.8897 34.671 35.6989 34.75 35.5 34.75H20.5C20.3011 34.75 20.1103 34.671 19.9697 34.5303C19.829 34.3897 19.75 34.1989 19.75 34V23.5C19.75 23.3011 19.829 23.1103 19.9697 22.9697C20.1103 22.829 20.3011 22.75 20.5 22.75H23.5C23.6235 22.7501 23.7451 22.7197 23.854 22.6614C23.963 22.6032 24.0558 22.519 24.1244 22.4163L25.4012 20.5H30.5978L31.8756 22.4163C31.9442 22.519 32.037 22.6032 32.146 22.6614C32.2549 22.7197 32.3765 22.7501 32.5 22.75H35.5C35.6989 22.75 35.8897 22.829 36.0303 22.9697C36.171 23.1103 36.25 23.3011 36.25 23.5V34ZM28 24.25C27.1842 24.25 26.3866 24.4919 25.7083 24.9452C25.0299 25.3984 24.5012 26.0427 24.189 26.7964C23.8768 27.5502 23.7951 28.3796 23.9543 29.1797C24.1134 29.9799 24.5063 30.7149 25.0832 31.2918C25.6601 31.8687 26.3951 32.2616 27.1953 32.4207C27.9954 32.5799 28.8248 32.4982 29.5786 32.186C30.3323 31.8738 30.9766 31.3451 31.4298 30.6667C31.8831 29.9884 32.125 29.1908 32.125 28.375C32.1238 27.2814 31.6888 26.2329 30.9154 25.4596C30.1421 24.6862 29.0936 24.2512 28 24.25ZM28 31C27.4808 31 26.9733 30.846 26.5416 30.5576C26.1099 30.2692 25.7735 29.8592 25.5748 29.3795C25.3761 28.8999 25.3242 28.3721 25.4254 27.8629C25.5267 27.3537 25.7767 26.886 26.1438 26.5188C26.511 26.1517 26.9787 25.9017 27.4879 25.8004C27.9971 25.6992 28.5249 25.7511 29.0045 25.9498C29.4842 26.1485 29.8942 26.4849 30.1826 26.9166C30.471 27.3483 30.625 27.8558 30.625 28.375C30.625 29.0712 30.3484 29.7389 29.8562 30.2312C29.3639 30.7234 28.6962 31 28 31Z" fill="white"/></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='profile-text-box'>
                                <div className='top-box'>
                                    <div className='stay-host-sec mb-md-0 mb-4'>
                                        <div className='bottom-host-box'>
                                            <div className='top-box-sec card-top-box'>
                                                <div className='row'>
                                                    <div className='col-md-4 mb-2'>
                                                        <div className='card-box'>
                                                            <div className='card-details d-flex align-items-start gap-2 position-relative'>
                                                                <div className='icons-card'>
                                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="39" height="39" rx="3.5" fill="#FCF5FE"/><rect x="0.5" y="0.5" width="39" height="39" rx="3.5" stroke="#F8EBFC"/><path d="M29.75 18.5C29.9489 18.5 30.1397 18.421 30.2803 18.2803C30.421 18.1397 30.5 17.9489 30.5 17.75V14C30.5 13.6022 30.342 13.2206 30.0607 12.9393C29.7794 12.658 29.3978 12.5 29 12.5H11C10.6022 12.5 10.2206 12.658 9.93934 12.9393C9.65804 13.2206 9.5 13.6022 9.5 14V17.75C9.5 17.9489 9.57902 18.1397 9.71967 18.2803C9.86032 18.421 10.0511 18.5 10.25 18.5C10.6478 18.5 11.0294 18.658 11.3107 18.9393C11.592 19.2206 11.75 19.6022 11.75 20C11.75 20.3978 11.592 20.7794 11.3107 21.0607C11.0294 21.342 10.6478 21.5 10.25 21.5C10.0511 21.5 9.86032 21.579 9.71967 21.7197C9.57902 21.8603 9.5 22.0511 9.5 22.25V26C9.5 26.3978 9.65804 26.7794 9.93934 27.0607C10.2206 27.342 10.6022 27.5 11 27.5H29C29.3978 27.5 29.7794 27.342 30.0607 27.0607C30.342 26.7794 30.5 26.3978 30.5 26V22.25C30.5 22.0511 30.421 21.8603 30.2803 21.7197C30.1397 21.579 29.9489 21.5 29.75 21.5C29.3522 21.5 28.9706 21.342 28.6893 21.0607C28.408 20.7794 28.25 20.3978 28.25 20C28.25 19.6022 28.408 19.2206 28.6893 18.9393C28.9706 18.658 29.3522 18.5 29.75 18.5ZM29 22.9025V26H23.75V23.75H22.25V26H11V22.9025C11.642 22.7347 12.2102 22.3588 12.6158 21.8336C13.0214 21.3084 13.2414 20.6636 13.2414 20C13.2414 19.3364 13.0214 18.6916 12.6158 18.1664C12.2102 17.6412 11.642 17.2653 11 17.0975V14H22.25V16.25H23.75V14H29V17.0975C28.358 17.2653 27.7898 17.6412 27.3842 18.1664C26.9786 18.6916 26.7586 19.3364 26.7586 20C26.7586 20.6636 26.9786 21.3084 27.3842 21.8336C27.7898 22.3588 28.358 22.7347 29 22.9025Z" fill="#78297F"/><path d="M22.25 17.75H23.75V22.25H22.25V17.75Z" fill="#78297F"/></svg>
                                                                </div>
                                                                <div className='text-details'>
                                                                    <h2 className='border-0 p-0'>2145</h2>
                                                                    <p className="p-0 m-0">Total Bookings</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 mb-2 '>
                                                        <div className='card-box'>
                                                            <div className='card-details align-items-start d-flex gap-2 position-relative'>
                                                                <div className='icons-card'>
                                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0.5H36C37.933 0.5 39.5 2.067 39.5 4V36C39.5 37.933 37.933 39.5 36 39.5H4C2.067 39.5 0.5 37.933 0.5 36V4C0.500001 2.067 2.067 0.5 4 0.5Z" fill="#FCF5FE"/><path d="M4 0.5H36C37.933 0.5 39.5 2.067 39.5 4V36C39.5 37.933 37.933 39.5 36 39.5H4C2.067 39.5 0.5 37.933 0.5 36V4C0.500001 2.067 2.067 0.5 4 0.5Z" stroke="#F8EBFC"/><path d="M10.3348 18.3369C10.2646 18.2721 10.2144 18.1885 10.1901 18.096C10.1659 18.0036 10.1687 17.9061 10.1982 17.8152C10.2276 17.7243 10.2825 17.6438 10.3564 17.5831C10.4302 17.5224 10.5199 17.4842 10.6148 17.4729L16.6188 16.7609C16.7039 16.751 16.7849 16.7193 16.8543 16.6691C16.9236 16.6188 16.9789 16.5516 17.0148 16.4739L19.5468 10.9839C19.5868 10.8971 19.6508 10.8237 19.7313 10.7722C19.8118 10.7207 19.9053 10.6934 20.0008 10.6934C20.0963 10.6934 20.1898 10.7207 20.2703 10.7722C20.3507 10.8237 20.4148 10.8971 20.4548 10.9839L22.9868 16.4739C23.0226 16.5515 23.0777 16.6186 23.1469 16.6689C23.216 16.7191 23.2969 16.7508 23.3818 16.7609L29.3858 17.4729C29.4807 17.4842 29.5704 17.5224 29.6442 17.5831C29.718 17.6438 29.7729 17.7243 29.8024 17.8152C29.8319 17.9061 29.8347 18.0036 29.8104 18.096C29.7862 18.1885 29.736 18.2721 29.6658 18.3369L25.2278 22.4419C25.1653 22.5 25.1186 22.5731 25.0924 22.6543C25.0661 22.7356 25.0611 22.8222 25.0778 22.9059L26.2548 28.8359C26.2735 28.9296 26.265 29.0268 26.2302 29.1159C26.1954 29.2049 26.1357 29.2821 26.0584 29.3384C25.981 29.3946 25.8892 29.4274 25.7937 29.433C25.6982 29.4386 25.6032 29.4167 25.5198 29.3699L20.2448 26.4169C20.1702 26.3752 20.0862 26.3533 20.0008 26.3533C19.9154 26.3533 19.8314 26.3752 19.7568 26.4169L14.4808 29.3689C14.3975 29.4156 14.3025 29.4374 14.2072 29.4319C14.1119 29.4263 14.0201 29.3936 13.9428 29.3375C13.8655 29.2814 13.8058 29.2044 13.7709 29.1155C13.736 29.0266 13.7273 28.9296 13.7458 28.8359L14.9238 22.9059C14.9405 22.8222 14.9354 22.7356 14.9092 22.6543C14.8829 22.5731 14.8363 22.5 14.7738 22.4419L10.3348 18.3369Z" stroke="#78297F" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                                                </div>
                                                                <div className='text-details'>
                                                                    <h2 className='border-0 p-0'>4.5</h2>
                                                                    <p className="p-0 m-0">Average Rating</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 mb-md-2 mb-4'>
                                                        <div className='card-box'>
                                                            <div className='card-details  align-items-start d-flex gap-2 position-relative'>
                                                                <div className='icons-card'>
                                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0.5H36C37.933 0.5 39.5 2.067 39.5 4V36C39.5 37.933 37.933 39.5 36 39.5H4C2.067 39.5 0.5 37.933 0.5 36V4C0.500001 2.067 2.067 0.5 4 0.5Z" fill="#FCF5FE"/><path d="M4 0.5H36C37.933 0.5 39.5 2.067 39.5 4V36C39.5 37.933 37.933 39.5 36 39.5H4C2.067 39.5 0.5 37.933 0.5 36V4C0.500001 2.067 2.067 0.5 4 0.5Z" stroke="#F8EBFC"/><path d="M10.3348 18.3369C10.2646 18.2721 10.2144 18.1885 10.1901 18.096C10.1659 18.0036 10.1687 17.9061 10.1982 17.8152C10.2276 17.7243 10.2825 17.6438 10.3564 17.5831C10.4302 17.5224 10.5199 17.4842 10.6148 17.4729L16.6188 16.7609C16.7039 16.751 16.7849 16.7193 16.8543 16.6691C16.9236 16.6188 16.9789 16.5516 17.0148 16.4739L19.5468 10.9839C19.5868 10.8971 19.6508 10.8237 19.7313 10.7722C19.8118 10.7207 19.9053 10.6934 20.0008 10.6934C20.0963 10.6934 20.1898 10.7207 20.2703 10.7722C20.3507 10.8237 20.4148 10.8971 20.4548 10.9839L22.9868 16.4739C23.0226 16.5515 23.0777 16.6186 23.1469 16.6689C23.216 16.7191 23.2969 16.7508 23.3818 16.7609L29.3858 17.4729C29.4807 17.4842 29.5704 17.5224 29.6442 17.5831C29.718 17.6438 29.7729 17.7243 29.8024 17.8152C29.8319 17.9061 29.8347 18.0036 29.8104 18.096C29.7862 18.1885 29.736 18.2721 29.6658 18.3369L25.2278 22.4419C25.1653 22.5 25.1186 22.5731 25.0924 22.6543C25.0661 22.7356 25.0611 22.8222 25.0778 22.9059L26.2548 28.8359C26.2735 28.9296 26.265 29.0268 26.2302 29.1159C26.1954 29.2049 26.1357 29.2821 26.0584 29.3384C25.981 29.3946 25.8892 29.4274 25.7937 29.433C25.6982 29.4386 25.6032 29.4167 25.5198 29.3699L20.2448 26.4169C20.1702 26.3752 20.0862 26.3533 20.0008 26.3533C19.9154 26.3533 19.8314 26.3752 19.7568 26.4169L14.4808 29.3689C14.3975 29.4156 14.3025 29.4374 14.2072 29.4319C14.1119 29.4263 14.0201 29.3936 13.9428 29.3375C13.8655 29.2814 13.8058 29.2044 13.7709 29.1155C13.736 29.0266 13.7273 28.9296 13.7458 28.8359L14.9238 22.9059C14.9405 22.8222 14.9354 22.7356 14.9092 22.6543C14.8829 22.5731 14.8363 22.5 14.7738 22.4419L10.3348 18.3369Z" stroke="#78297F" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                                                </div>
                                                                <div className='text-details'>
                                                                    <h2 className='border-0 p-0'>1234</h2>
                                                                    <p className="p-0 m-0">Reviews</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 mb-2'>
                                                        <div className="form-group mb-24">
                                                            <Form.Label >Host Full Name</Form.Label>
                                                            <Form.Control type="text" placeholder='xyz company' />
                                                        </div>
                                                    </div>
                                                </div>                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
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
                        <div className='col-md-6'>
                            <div className="form-group mb-24">
                                <Form.Label >Email Address</Form.Label>
                                <Form.Control type="text" placeholder='Johnsmith1001@gmail.com' />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group mb-24 height-box-fixed">
                                <Form.Label >Enter Host bio</Form.Label>
                                <Form.Control as="textarea" placeholder='enter address here' />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='position-relative location-lung-box'>
                                <div className="form-group mb-24">
                                    <Form.Label >Speaks Language</Form.Label>
                                    <LanguageSwitcherCountryName  paramKey="lang1"/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='position-relative location-lung-box'>
                                <div className="form-group mb-24">
                                    <Form.Label >Country</Form.Label>
                                    <LanguageSwitcherCountryName  paramKey="lang1"/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-group mb-24">
                                <Form.Label >City</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Kumasi</option>
                                    <option value="1">Kumasi One</option>
                                    <option value="2">Kumasi Two</option>
                                    <option value="3">Kumasi Three</option>
                                </Form.Select>
                            </div>
                        </div>


                    </div>
                </Form>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-end mt-0 ">
            <Link href="" className='btn btn-grey' onClick={handleClose}>Cancel</Link>
            <button className='btn btn-secondary' >Save Details</button>
        </Modal.Footer>
    </Modal>
  )
}

export default HostProfileEditModal