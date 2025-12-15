import Link from 'next/link'
import React from 'react'
import Image from "next/image";
// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import { Button, Form, Tab, Tabs } from 'react-bootstrap'
import adminReviewImg from '../../../../public/images/admin-review-img.png'

import LogoIcons from "../../../../public/images/logo-center.png";

import SimpleBar from "simplebar-react";

import "simplebar-react/dist/simplebar.min.css"

const ChatBox = () => {
  return (
    <div className='chat-btn-box position-relative'>
        <button className='btn btn-chat-box d-flex align-items-center gap-2 d-md-none' type='button' data-bs-toggle='offcanvas' data-bs-target='#chatSidebar' aria-controls='chatSidebar' > <svg width="16" height="16" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" /> </svg> Chats
        </button>

    <div className='chat-box-com d-flex card-box'>

        <div className='chat-box-left offcanvas offcanvas-start d-md-block' tabIndex='-1' id='chatSidebar' aria-labelledby='chatSidebarLabel'>
            <div className='chat-box-top d-flex align-items-center gap-2'>
                <div className='search-box'>
                    <Form className="d-flex position-relative">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button className='btn btn-search'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </Button>
                    </Form>
                </div>
                <div className='filter-box'>
                    <Link href="" className='filter-box'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 11.9999H8.895M4.534 11.9999H2.75M4.534 11.9999C4.534 11.4217 4.76368 10.8672 5.17251 10.4584C5.58134 10.0496 6.13583 9.81989 6.714 9.81989C7.29217 9.81989 7.84666 10.0496 8.25549 10.4584C8.66432 10.8672 8.894 11.4217 8.894 11.9999C8.894 12.5781 8.66432 13.1326 8.25549 13.5414C7.84666 13.9502 7.29217 14.1799 6.714 14.1799C6.13583 14.1799 5.58134 13.9502 5.17251 13.5414C4.76368 13.1326 4.534 12.5781 4.534 11.9999ZM21.25 18.6069H15.502M15.502 18.6069C15.502 19.1852 15.2718 19.7403 14.8628 20.1492C14.4539 20.5582 13.8993 20.7879 13.321 20.7879C12.7428 20.7879 12.1883 20.5572 11.7795 20.1484C11.3707 19.7396 11.141 19.1851 11.141 18.6069M15.502 18.6069C15.502 18.0286 15.2718 17.4745 14.8628 17.0655C14.4539 16.6566 13.8993 16.4269 13.321 16.4269C12.7428 16.4269 12.1883 16.6566 11.7795 17.0654C11.3707 17.4742 11.141 18.0287 11.141 18.6069M11.141 18.6069H2.75M21.25 5.39289H18.145M13.784 5.39289H2.75M13.784 5.39289C13.784 4.81472 14.0137 4.26023 14.4225 3.8514C14.8313 3.44257 15.3858 3.21289 15.964 3.21289C16.2503 3.21289 16.5338 3.26928 16.7983 3.37883C17.0627 3.48839 17.3031 3.64897 17.5055 3.8514C17.7079 4.05383 17.8685 4.29415 17.9781 4.55864C18.0876 4.82313 18.144 5.10661 18.144 5.39289C18.144 5.67917 18.0876 5.96265 17.9781 6.22714C17.8685 6.49163 17.7079 6.73195 17.5055 6.93438C17.3031 7.13681 17.0627 7.29739 16.7983 7.40695C16.5338 7.5165 16.2503 7.57289 15.964 7.57289C15.3858 7.57289 14.8313 7.34321 14.4225 6.93438C14.0137 6.52555 13.784 5.97106 13.784 5.39289Z" stroke="#5D5D5D" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round"/></svg>
                    </Link>
                </div>
            </div>
            <div className='chat-bottom-box'>
            <Tabs defaultActiveKey="newChats" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="newChats" title="New Chats">
                   <div className='chat-list-item'>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>John</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-new'>NEW</h5>
                                <span className='chat-count'>2</span>
                            </div>
                        </Link>
                        <Link href="" className='active chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>Ana</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-open'>Open</h5>
                            </div>
                        </Link>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>John</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-open'>Open</h5>
                                <span className='chat-count'>2</span>
                            </div>
                        </Link>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>Caroline</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-open'>Open</h5>
                            </div>
                        </Link>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>William</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-resolved'>Resolved</h5>
                            </div>
                        </Link>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>William</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-resolved'>Resolved</h5>
                            </div>
                        </Link>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>William</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-resolved'>Resolved</h5>
                            </div>
                        </Link>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>William</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-resolved'>Resolved</h5>
                            </div>
                        </Link>
                        <Link href="" className='chat-list d-flex justify-content-between align-items-center gap-2'>
                            <div className='author-details d-flex align-items-center gap-1'>
                                <div className='author-img'>
                                    <Image src={adminReviewImg} alt='' />
                                </div>
                                <div className='author-text'>
                                    <h2>William</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Urna velit dignissim diam at scelerisque purus.</p>
                                    <span className='today'>Today</span>
                                </div>
                            </div>
                            <div className='btn-right'>
                                <h5 className='btn-resolved'>Resolved</h5>
                            </div>
                        </Link>
                   </div>
                </Tab>
                <Tab eventKey="allChats" title="All Chats">
                    All Chats
                </Tab>
            </Tabs>
            </div>
        </div>
        <div className='chat-box-right'>
            <div className='chat-autop-top-details d-flex align-items-center gap-2 justify-content-between flex-md-nowrap flex-wrap'>
                <div className='author-action d-flex align-items-center gap-2 '>
                    <div className='author-main-img position-relative'>
                        <Image src={adminReviewImg} alt='' />
                        <span className='dot-active'></span>
                    </div>
                    <div className='author-text'>
                        <h2>Ana Watson</h2>
                        <span className='online'>Online</span>
                    </div>
                </div>
                <div className='mart-box'>
                    <span className='d-flex align-items-center gap-2' ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2458 2.61094C16.4305 2.49987 16.651 2.46464 16.8611 2.51265C17.0711 2.56066 17.2544 2.68818 17.3725 2.86844L18.1975 4.12678C18.3051 4.29116 18.3511 4.48825 18.3274 4.68327C18.3038 4.87828 18.212 5.05867 18.0683 5.19261L18.0658 5.19594L18.0542 5.20678L18.0067 5.25094L17.8192 5.43011C16.7817 6.43649 15.7757 7.47477 14.8025 8.54344C12.9717 10.5568 10.7975 13.1918 9.33418 15.7484C8.92584 16.4618 7.92834 16.6151 7.33668 15.9993L1.93251 10.3843C1.85506 10.3038 1.79459 10.2085 1.75469 10.1042C1.71479 9.99986 1.69627 9.88857 1.70023 9.77694C1.7042 9.6653 1.73056 9.55561 1.77777 9.45437C1.82497 9.35313 1.89205 9.26241 1.97501 9.18761L3.60834 7.71428C3.75188 7.58487 3.93593 7.50937 4.12899 7.5007C4.32205 7.49204 4.51213 7.55075 4.66668 7.66678L7.42418 9.73428C11.7317 5.48678 14.1742 3.85678 16.2458 2.61094Z" fill="#20A66A"/></svg>Mark Resolved</span>
                </div>
            </div>
            <div className='bottom-author-chat'>
                
                <div className='sec-support-tickets chat-support-main'>
                    <div className="support-tickets-content">
                        <div className='chat-support-body'>
                            <SimpleBar style={{ maxHeight: '100%' }}>
                                <div className='d-flex mb-1'>
                                    <div className='flex-grow-1'>
                                        <div className='w-100'>
                                            <div className='d-flex flex-column align-items-start mesge-you'>
                                                <div className='bg-light chat-message'>Hii john! 👋</div>
                                                <div className='bg-light chat-message'>Share your destination, starting point, and trip duration—we’ll create the perfect travel plan for you!" 👋</div>


                                                <div className="small p-0">
                                                    12:54 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end text-end mb-1'>
                                    <div className='w-100'>
                                        <div className='d-flex flex-column align-items-end mesge-me'>
                                            <div className='bg-purple chat-message'>Something about the booking</div>
                                            <div className='d-flex'>
                                            <div className='small rvc-img d-flex align-items-center gap-1'>
                                                    <span className='check-icons'>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9073 6.91837L4.90732 13.7934C4.732 13.9656 4.49606 14.0621 4.25028 14.0621C4.00451 14.0621 3.76857 13.9656 3.59325 13.7934L0.593253 10.8473C0.50538 10.761 0.435362 10.6582 0.387198 10.5449C0.339033 10.4316 0.313664 10.3098 0.312539 10.1867C0.310268 9.93799 0.406888 9.69857 0.581144 9.5211C0.667426 9.43323 0.770172 9.36321 0.883514 9.31505C0.996856 9.26688 1.11858 9.24151 1.24172 9.24039C1.49043 9.23812 1.72985 9.33474 1.90732 9.50899L4.25107 11.8106L10.594 5.58087C10.7714 5.40661 11.0107 5.30995 11.2594 5.31215C11.508 5.31435 11.7456 5.41522 11.9198 5.59259C12.0941 5.76995 12.1907 6.00927 12.1885 6.25791C12.1863 6.50654 12.0855 6.74411 11.9081 6.91837H11.9073ZM19.419 5.59024C19.3327 5.50207 19.2298 5.43181 19.1163 5.38348C19.0028 5.33516 18.8808 5.30972 18.7574 5.30863C18.634 5.30754 18.5116 5.33082 18.3973 5.37714C18.2829 5.42345 18.1788 5.49189 18.0909 5.57853L11.7503 11.8106L11.1347 11.2059C10.9573 11.0316 10.718 10.935 10.4693 10.9371C10.2207 10.9393 9.98313 11.0402 9.80888 11.2176C9.63462 11.395 9.53796 11.6343 9.54016 11.8829C9.54236 12.1315 9.64323 12.3691 9.8206 12.5434L11.0933 13.7934C11.2686 13.9656 11.5045 14.0621 11.7503 14.0621C11.9961 14.0621 12.232 13.9656 12.4073 13.7934L19.4073 6.91837C19.4951 6.83209 19.5651 6.72935 19.6132 6.61603C19.6613 6.50271 19.6867 6.38102 19.6878 6.25791C19.6888 6.13479 19.6657 6.01268 19.6196 5.89852C19.5735 5.78436 19.5053 5.68041 19.419 5.59259V5.59024Z" fill="#652669"/></svg>
                                                    </span>
                                                    <span className="text-time">12:54 PM</span> 
                                                    <span className='author-img'>
                                                        <Image src={LogoIcons} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex mb-1'>
                                    <div className='flex-grow-1'>
                                        <div className='w-100'>
                                            <div className='d-flex flex-column align-items-start mesge-you'>
                                                <div className='bg-light chat-message'>Oh! We are sorry that you are facing issues with your booking, please select the booking you are facing the issue with</div>

                                                <div className="small p-0">
                                                    12:54 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end text-end mb-1'>
                                    <div className='w-100'>
                                        <div className='d-flex flex-column align-items-end mesge-me'>
                                            <div className='bg-purple chat-message'>Other</div>
                                            <div className='d-flex'>
                                                <div className='small rvc-img d-flex align-items-center gap-1'>
                                                    <span className='check-icons'>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9073 6.91837L4.90732 13.7934C4.732 13.9656 4.49606 14.0621 4.25028 14.0621C4.00451 14.0621 3.76857 13.9656 3.59325 13.7934L0.593253 10.8473C0.50538 10.761 0.435362 10.6582 0.387198 10.5449C0.339033 10.4316 0.313664 10.3098 0.312539 10.1867C0.310268 9.93799 0.406888 9.69857 0.581144 9.5211C0.667426 9.43323 0.770172 9.36321 0.883514 9.31505C0.996856 9.26688 1.11858 9.24151 1.24172 9.24039C1.49043 9.23812 1.72985 9.33474 1.90732 9.50899L4.25107 11.8106L10.594 5.58087C10.7714 5.40661 11.0107 5.30995 11.2594 5.31215C11.508 5.31435 11.7456 5.41522 11.9198 5.59259C12.0941 5.76995 12.1907 6.00927 12.1885 6.25791C12.1863 6.50654 12.0855 6.74411 11.9081 6.91837H11.9073ZM19.419 5.59024C19.3327 5.50207 19.2298 5.43181 19.1163 5.38348C19.0028 5.33516 18.8808 5.30972 18.7574 5.30863C18.634 5.30754 18.5116 5.33082 18.3973 5.37714C18.2829 5.42345 18.1788 5.49189 18.0909 5.57853L11.7503 11.8106L11.1347 11.2059C10.9573 11.0316 10.718 10.935 10.4693 10.9371C10.2207 10.9393 9.98313 11.0402 9.80888 11.2176C9.63462 11.395 9.53796 11.6343 9.54016 11.8829C9.54236 12.1315 9.64323 12.3691 9.8206 12.5434L11.0933 13.7934C11.2686 13.9656 11.5045 14.0621 11.7503 14.0621C11.9961 14.0621 12.232 13.9656 12.4073 13.7934L19.4073 6.91837C19.4951 6.83209 19.5651 6.72935 19.6132 6.61603C19.6613 6.50271 19.6867 6.38102 19.6878 6.25791C19.6888 6.13479 19.6657 6.01268 19.6196 5.89852C19.5735 5.78436 19.5053 5.68041 19.419 5.59259V5.59024Z" fill="#652669"/></svg>
                                                    </span>
                                                    <span className="text-time">12:54 PM</span> 
                                                    <span className='author-img'>
                                                        <Image src={LogoIcons} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex mb-1'>
                                    <div className='flex-grow-1'>
                                        <div className='w-100'>
                                            <div className='d-flex flex-column align-items-start mesge-you'>
                                                <div className='bg-light chat-message'>Oh! We are sorry that you are facing issues with your booking, please select the booking you are facing the issue with</div>

                                                <div className="small p-0">
                                                    12:54 PM</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end text-end mb-1'>
                                    <div className='w-100'>
                                        <div className='d-flex flex-column align-items-end mesge-me'>
                                            <div className='bg-purple chat-message'>Other</div>
                                            <div className='d-flex'>
                                                <div className='small rvc-img d-flex align-items-center gap-1'>
                                                    <span className='check-icons'>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9073 6.91837L4.90732 13.7934C4.732 13.9656 4.49606 14.0621 4.25028 14.0621C4.00451 14.0621 3.76857 13.9656 3.59325 13.7934L0.593253 10.8473C0.50538 10.761 0.435362 10.6582 0.387198 10.5449C0.339033 10.4316 0.313664 10.3098 0.312539 10.1867C0.310268 9.93799 0.406888 9.69857 0.581144 9.5211C0.667426 9.43323 0.770172 9.36321 0.883514 9.31505C0.996856 9.26688 1.11858 9.24151 1.24172 9.24039C1.49043 9.23812 1.72985 9.33474 1.90732 9.50899L4.25107 11.8106L10.594 5.58087C10.7714 5.40661 11.0107 5.30995 11.2594 5.31215C11.508 5.31435 11.7456 5.41522 11.9198 5.59259C12.0941 5.76995 12.1907 6.00927 12.1885 6.25791C12.1863 6.50654 12.0855 6.74411 11.9081 6.91837H11.9073ZM19.419 5.59024C19.3327 5.50207 19.2298 5.43181 19.1163 5.38348C19.0028 5.33516 18.8808 5.30972 18.7574 5.30863C18.634 5.30754 18.5116 5.33082 18.3973 5.37714C18.2829 5.42345 18.1788 5.49189 18.0909 5.57853L11.7503 11.8106L11.1347 11.2059C10.9573 11.0316 10.718 10.935 10.4693 10.9371C10.2207 10.9393 9.98313 11.0402 9.80888 11.2176C9.63462 11.395 9.53796 11.6343 9.54016 11.8829C9.54236 12.1315 9.64323 12.3691 9.8206 12.5434L11.0933 13.7934C11.2686 13.9656 11.5045 14.0621 11.7503 14.0621C11.9961 14.0621 12.232 13.9656 12.4073 13.7934L19.4073 6.91837C19.4951 6.83209 19.5651 6.72935 19.6132 6.61603C19.6613 6.50271 19.6867 6.38102 19.6878 6.25791C19.6888 6.13479 19.6657 6.01268 19.6196 5.89852C19.5735 5.78436 19.5053 5.68041 19.419 5.59259V5.59024Z" fill="#652669"/></svg>
                                                    </span>
                                                    <span className="text-time">12:54 PM</span> 
                                                    <span className='author-img'>
                                                        <Image src={LogoIcons} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>
                        </div>

                        <div className='chat-support-footer'>
                            <div className='position-relative d-flex align-items-center w-100'>
                                <textarea className="form-control" data-autoresize="true" placeholder="Enter message here"></textarea>
                                <button className="btn">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M18.0781 3.46407C18.0781 3.46407 18.0781 3.47189 18.0781 3.47579L13.5312 18.4711C13.4624 18.7147 13.3207 18.9313 13.1252 19.0921C12.9297 19.2528 12.6897 19.3499 12.4374 19.3703C12.4015 19.3734 12.3656 19.375 12.3296 19.375C12.0932 19.3757 11.8615 19.3088 11.6619 19.1822C11.4623 19.0555 11.3031 18.8744 11.2031 18.6602L8.35931 12.8242C8.33086 12.7657 8.32136 12.6998 8.33214 12.6357C8.34293 12.5716 8.37345 12.5124 8.41947 12.4664L12.9445 7.94142C13.0567 7.82325 13.1184 7.66591 13.1163 7.50293C13.1142 7.33996 13.0485 7.18424 12.9333 7.06899C12.818 6.95374 12.6623 6.88807 12.4994 6.88599C12.3364 6.8839 12.179 6.94556 12.0609 7.05782L7.53353 11.5828C7.48757 11.6288 7.42839 11.6594 7.36425 11.6701C7.30011 11.6809 7.2342 11.6714 7.17572 11.643L1.33431 8.80001C1.10589 8.69042 0.916158 8.51401 0.790262 8.29416C0.664365 8.07431 0.608246 7.82139 0.629342 7.56892C0.650437 7.31645 0.747752 7.07635 0.908388 6.88043C1.06903 6.68452 1.2854 6.54204 1.52884 6.47188L16.5242 1.92501H16.5359C16.7494 1.86503 16.975 1.86292 17.1896 1.91892C17.4042 1.97491 17.6 2.08698 17.757 2.24364C17.9139 2.40029 18.0264 2.59589 18.0828 2.81036C18.1393 3.02483 18.1376 3.25045 18.0781 3.46407Z" fill="white" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ChatBox