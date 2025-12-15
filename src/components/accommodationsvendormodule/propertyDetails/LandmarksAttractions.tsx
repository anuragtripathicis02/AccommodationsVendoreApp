'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Hotal01 from '../../../../public/images/hotal-01.png'
import Hotal02 from '../../../../public/images/hotal-02.png'
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';


const LandmarksAttractions = () => {
  return (
    <div className='property-list-sec nearbyLandmark-sec card-box p-16'>
        <div className='grey-bg p-16 mb-3 d-flex position-relative gap-3 flex-wrap'>
            <div className='left-list-img'>
                <Image alt='' src={Hotal01}></Image>
            </div>
            <div className='txet-list-box pe-lg-5 pe-0'>
                <div className='property-inner-right h-100 position-relative d-flex flex-wrap'>
                    <div className='top-box'>
                        <h2>Lighthouse Beach</h2>
                        <h6 className='mb-2'>15Km from the Property</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Faucibus consequat sit lacus proin metus scelerisque neque odio. Convallis id pellentesque in pretium facilisis amet sollicitudin suspendisse ultrices. Sed eget ultrices nam vulputate id tellus convallis. Vel erat id faucibus non tincidunt tincidunt. Sit lacus dolor vitae phasellus leo metus mattis etiam id. Mauris consequat euismod vulputate aliquam eu quis nibh. Non mi tellus nisl sed et velit duis venenatis nibh. Elementum orci nulla in facilisi volutpat commodo tristique dignissim.</p>
                    </div>
                </div>
            </div>  
            <div className='opretator-btn-inner d-flex align-items-center gap-2 justify-content-end position-absolute'>
                <div className='com-dropdown dropdown-remove-bg dropdown dropdown-card'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="white"/><path d="M20.1875 18C20.1875 18.4326 20.0592 18.8556 19.8188 19.2153C19.5785 19.575 19.2368 19.8554 18.8371 20.021C18.4374 20.1866 17.9976 20.2299 17.5732 20.1455C17.1489 20.0611 16.7591 19.8527 16.4532 19.5468C16.1473 19.2409 15.9389 18.8511 15.8545 18.4268C15.7701 18.0024 15.8134 17.5626 15.979 17.1629C16.1446 16.7632 16.425 16.4215 16.7847 16.1812C17.1444 15.9408 17.5674 15.8125 18 15.8125C18.5802 15.8125 19.1366 16.043 19.5468 16.4532C19.957 16.8634 20.1875 17.4198 20.1875 18ZM18 13.9375C18.4326 13.9375 18.8556 13.8092 19.2153 13.5688C19.575 13.3285 19.8554 12.9868 20.021 12.5871C20.1866 12.1874 20.2299 11.7476 20.1455 11.3232C20.0611 10.8989 19.8527 10.5091 19.5468 10.2032C19.2409 9.89728 18.8511 9.68894 18.4268 9.60453C18.0024 9.52013 17.5626 9.56345 17.1629 9.72901C16.7632 9.89458 16.4215 10.175 16.1812 10.5347C15.9408 10.8944 15.8125 11.3174 15.8125 11.75C15.8125 12.3302 16.043 12.8866 16.4532 13.2968C16.8634 13.707 17.4198 13.9375 18 13.9375ZM18 22.0625C17.5674 22.0625 17.1444 22.1908 16.7847 22.4312C16.425 22.6715 16.1446 23.0132 15.979 23.4129C15.8134 23.8126 15.7701 24.2524 15.8545 24.6768C15.9389 25.1011 16.1473 25.4909 16.4532 25.7968C16.7591 26.1027 17.1489 26.3111 17.5732 26.3955C17.9976 26.4799 18.4374 26.4366 18.8371 26.271C19.2368 26.1054 19.5785 25.825 19.8188 25.4653C20.0592 25.1056 20.1875 24.6826 20.1875 24.25C20.1875 23.6698 19.957 23.1134 19.5468 22.7032C19.1366 22.293 18.5802 22.0625 18 22.0625Z" fill="#4F4F4F"/></svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2' > 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.8335 14.1768L9.511 14.1643L17.5377 6.21435C17.8527 5.89935 18.026 5.48102 18.026 5.03602C18.026 4.59102 17.8527 4.17268 17.5377 3.85768L16.216 2.53602C15.586 1.90602 14.4868 1.90935 13.8618 2.53352L5.8335 10.4852V14.1768ZM15.0377 3.71435L16.3618 5.03352L15.031 6.35185L13.7093 5.03102L15.0377 3.71435ZM7.50016 11.1802L12.5252 6.20268L13.8468 7.52435L8.82266 12.5002L7.50016 12.5043V11.1802Z" fill="#4F4F4F"/><path d="M4.16667 17.5H15.8333C16.7525 17.5 17.5 16.7525 17.5 15.8333V8.61L15.8333 10.2767V15.8333H6.79833C6.77667 15.8333 6.75417 15.8417 6.7325 15.8417C6.705 15.8417 6.6775 15.8342 6.64917 15.8333H4.16667V4.16667H9.8725L11.5392 2.5H4.16667C3.2475 2.5 2.5 3.2475 2.5 4.16667V15.8333C2.5 16.7525 3.2475 17.5 4.16667 17.5Z" fill="#4F4F4F"/></svg>
                                <span>Edit Details</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className='btn-active-red d-flex align-items-center gap-2'> 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.5L14.3 14.4983C14.1942 15.5592 14.1417 16.0892 13.9 16.49C13.688 16.8428 13.3763 17.125 13.0042 17.3008C12.5817 17.5 12.05 17.5 10.9833 17.5H9.01667C7.95083 17.5 7.41833 17.5 6.99583 17.3C6.62337 17.1243 6.31134 16.8421 6.09917 16.4892C5.85917 16.0892 5.80583 15.5592 5.69917 14.4983L5 7.5M11.25 12.9167V8.75M8.75 12.9167V8.75M3.75 5.41667H7.59583M7.59583 5.41667L7.9175 3.19C8.01083 2.785 8.3475 2.5 8.73417 2.5H11.2658C11.6525 2.5 11.9883 2.785 12.0825 3.19L12.4042 5.41667M7.59583 5.41667H12.4042M12.4042 5.41667H16.25" stroke="#E03C22" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Delete</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div className='grey-bg p-16 mb-0 d-flex position-relative gap-3 flex-wrap'>
            <div className='left-list-img'>
                <Image alt='' src={Hotal02}></Image>
            </div>
            <div className='txet-list-box pe-lg-5 pe-0'>
                <div className='property-inner-right h-100 position-relative d-flex flex-wrap'>
                    <div className='top-box'>
                        <h2>Sunset point hill track</h2>
                        <h6 className='mb-2'>5Km from the Property</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Faucibus consequat sit lacus proin metus scelerisque neque odio. Convallis id pellentesque in pretium facilisis amet sollicitudin suspendisse ultrices. Sed eget ultrices nam vulputate id tellus convallis. Vel erat id faucibus non tincidunt tincidunt. Sit lacus dolor vitae phasellus leo metus mattis etiam id. Mauris consequat euismod vulputate aliquam eu quis nibh. Non mi tellus nisl sed et velit duis venenatis nibh. Elementum orci nulla in facilisi volutpat commodo tristique dignissim.</p>
                    </div>
                </div>
            </div>  
            <div className='opretator-btn-inner d-flex align-items-center gap-2 justify-content-end position-absolute'>
                <div className='com-dropdown dropdown-remove-bg dropdown dropdown-card'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="white"/><path d="M20.1875 18C20.1875 18.4326 20.0592 18.8556 19.8188 19.2153C19.5785 19.575 19.2368 19.8554 18.8371 20.021C18.4374 20.1866 17.9976 20.2299 17.5732 20.1455C17.1489 20.0611 16.7591 19.8527 16.4532 19.5468C16.1473 19.2409 15.9389 18.8511 15.8545 18.4268C15.7701 18.0024 15.8134 17.5626 15.979 17.1629C16.1446 16.7632 16.425 16.4215 16.7847 16.1812C17.1444 15.9408 17.5674 15.8125 18 15.8125C18.5802 15.8125 19.1366 16.043 19.5468 16.4532C19.957 16.8634 20.1875 17.4198 20.1875 18ZM18 13.9375C18.4326 13.9375 18.8556 13.8092 19.2153 13.5688C19.575 13.3285 19.8554 12.9868 20.021 12.5871C20.1866 12.1874 20.2299 11.7476 20.1455 11.3232C20.0611 10.8989 19.8527 10.5091 19.5468 10.2032C19.2409 9.89728 18.8511 9.68894 18.4268 9.60453C18.0024 9.52013 17.5626 9.56345 17.1629 9.72901C16.7632 9.89458 16.4215 10.175 16.1812 10.5347C15.9408 10.8944 15.8125 11.3174 15.8125 11.75C15.8125 12.3302 16.043 12.8866 16.4532 13.2968C16.8634 13.707 17.4198 13.9375 18 13.9375ZM18 22.0625C17.5674 22.0625 17.1444 22.1908 16.7847 22.4312C16.425 22.6715 16.1446 23.0132 15.979 23.4129C15.8134 23.8126 15.7701 24.2524 15.8545 24.6768C15.9389 25.1011 16.1473 25.4909 16.4532 25.7968C16.7591 26.1027 17.1489 26.3111 17.5732 26.3955C17.9976 26.4799 18.4374 26.4366 18.8371 26.271C19.2368 26.1054 19.5785 25.825 19.8188 25.4653C20.0592 25.1056 20.1875 24.6826 20.1875 24.25C20.1875 23.6698 19.957 23.1134 19.5468 22.7032C19.1366 22.293 18.5802 22.0625 18 22.0625Z" fill="#4F4F4F"/></svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2' > 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.8335 14.1768L9.511 14.1643L17.5377 6.21435C17.8527 5.89935 18.026 5.48102 18.026 5.03602C18.026 4.59102 17.8527 4.17268 17.5377 3.85768L16.216 2.53602C15.586 1.90602 14.4868 1.90935 13.8618 2.53352L5.8335 10.4852V14.1768ZM15.0377 3.71435L16.3618 5.03352L15.031 6.35185L13.7093 5.03102L15.0377 3.71435ZM7.50016 11.1802L12.5252 6.20268L13.8468 7.52435L8.82266 12.5002L7.50016 12.5043V11.1802Z" fill="#4F4F4F"/><path d="M4.16667 17.5H15.8333C16.7525 17.5 17.5 16.7525 17.5 15.8333V8.61L15.8333 10.2767V15.8333H6.79833C6.77667 15.8333 6.75417 15.8417 6.7325 15.8417C6.705 15.8417 6.6775 15.8342 6.64917 15.8333H4.16667V4.16667H9.8725L11.5392 2.5H4.16667C3.2475 2.5 2.5 3.2475 2.5 4.16667V15.8333C2.5 16.7525 3.2475 17.5 4.16667 17.5Z" fill="#4F4F4F"/></svg>
                                <span>Edit Details</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className='btn-active-red d-flex align-items-center gap-2'> 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.5L14.3 14.4983C14.1942 15.5592 14.1417 16.0892 13.9 16.49C13.688 16.8428 13.3763 17.125 13.0042 17.3008C12.5817 17.5 12.05 17.5 10.9833 17.5H9.01667C7.95083 17.5 7.41833 17.5 6.99583 17.3C6.62337 17.1243 6.31134 16.8421 6.09917 16.4892C5.85917 16.0892 5.80583 15.5592 5.69917 14.4983L5 7.5M11.25 12.9167V8.75M8.75 12.9167V8.75M3.75 5.41667H7.59583M7.59583 5.41667L7.9175 3.19C8.01083 2.785 8.3475 2.5 8.73417 2.5H11.2658C11.6525 2.5 11.9883 2.785 12.0825 3.19L12.4042 5.41667M7.59583 5.41667H12.4042M12.4042 5.41667H16.25" stroke="#E03C22" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Delete</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandmarksAttractions