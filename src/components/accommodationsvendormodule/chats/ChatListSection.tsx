'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Chnageavatar1 from '../../../../public/images/admin-review-img.png'
// import Chnageavatar3 from '../../../../public/images/admin-review-img.png'
// import Chnageavatar4 from '../../../../public/images/admin-review-img.png'
// import Chnageavatar5 from '../../../../public/images/admin-review-img.png'
// import Chnageavatar6 from '../../../../public/images/admin-review-img.png'
// import Chnageavatar7 from '../../../../public/images/admin-review-img.png'

// import Iconcall from '../../assets/images/ic-icon-call.svg'
// import Iconvideo from '../../assets/images/ic-icon-video.svg'
// import Iconvertical from '../../assets/images/ic-icon-vertical.svg'
// import Blueticks from '../../assets/images/show-blue-ticks.svg'
// import Chatmedia from '../../assets/images/chat-media.jpg'
// import Iconplan from '../../assets/images/ic-icon-paper-plan.svg'
// import Iconattachment from '../../assets/images/ic-icon-attachment.svg'
// import Iconcamera from '../../assets/images/ic-icon-camera.svg'

// import '../messages/Messages.css'

const ChatListSection = () => {
  useEffect(() => {
    const handleAutoResize = (event: Event) => {
      const target = event.target as HTMLTextAreaElement
      if (target?.dataset.autoresize === 'true') {
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
      }
    }

    document.addEventListener('input', handleAutoResize)
    return () => document.removeEventListener('input', handleAutoResize)
  }, [])

  return (
    <div className="dashboard-content card-box">
      <div className="dashboard-content-main">
        <div className="cust-container">
          <div className="chat-sliders d-lg-none">
            <button className="btn btn-chat-box d-flex align-items-center gap-2" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasExample">
              <svg width="16" height="16" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" /></svg>
              Chats
            </button>
          </div>

          <div className="d-flex">
            {/* Chat Sidebar */}
            <div
              className="chat-sidebar offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="chat-sidebar-inner">
                <div className="chat-sidebar-header">
                  <ul className="nav" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="tab1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                        type="button"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="true"
                      >
                        Chat
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="tab2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#tab2"
                        type="button"
                        role="tab"
                        aria-controls="tab2"
                        aria-selected="false"
                      >
                        Requests <span className="tab-badge">2</span>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab1-tab"
                  >
                    <div className="chat-sidebar-body">
                      <ul className="flex-column nav-chat-menu">
                        {/* Chat List Item Example */}
                        <li
                          className="d-flex align-items-center"
                          data-bs-dismiss="offcanvas"
                        >
                          <Link href="/" className="w-100">
                            <div className="d-flex">
                              <div className="flex-shrink-0 avatar me-2">
                                <Image
                                  src={Chnageavatar1}
                                  className="avatar-img rounded-circle"
                                  alt="Jenni"
                                />
                              </div>
                              <div className="d-grid-box flex-grow-1">
                                <div className="user-chat-name">Jenni</div>
                                <span className="chat-status">Yesterday</span>
                                <p className="m-0 text-danger">
                                  Missed Call at 02:00PM
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        {/* Add more users as needed */}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab2-tab"
                  >
                    Content for Tab 2
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="card-chat mobile-chat-change d-flex flex-column flex-grow-1">
              <div className="card-chat-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
                    <div className="flex-shrink-0 avatar me-3">
                      <Image
                        src={Chnageavatar1}
                        className="avatar-img rounded-circle"
                        alt="John Doe"
                      />
                    </div>
                    <div className="d-block flex-grow-1">
                      <h6 className="mb-0 user-chat-name">John Doe</h6>
                    </div>
                  </div>

                  <div className="header-setting d-flex align-items-center ms-auto">
                    <button
                      className="btn btn-call"
                      data-bs-toggle="modal"
                      data-bs-target="#Feedback"
                    >
                      {/* <Image src={Iconcall} alt="Call" /> */}
                    </button>
                    <button
                      className="btn btn-video-call"
                      data-bs-toggle="modal"
                      data-bs-target="#Confirm"
                    >
                      {/* <Image src={Iconvideo} alt="Video" /> */}
                    </button>

                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-setting-box"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                      >
                        {/* <Image src={Iconvertical} alt="Options" /> */}
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <button className="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-chat-body">
                {/* Sample Chat Message */}
                <div className="text-center chat-time">
                  <span>24-05-2024</span>
                </div>
                <div className="d-flex mb-1">
                  <div className="flex-grow-1">
                    <div className="d-flex flex-column align-items-start">
                      <div className="bg-light">
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                      <div className="small my-2">12:54 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-chat-footer">
                <div className="d-flex align-items-center">
                  <div className="position-relative w-100">
                    <textarea
                      className="form-control"
                      data-autoresize="true"
                      placeholder="Enter message here"
                      rows={1}
                    ></textarea>
                    <div className="box-camera btn-fill-upload">
                      {/* <Image src={Iconcamera} alt="Camera" /> */}
                      <input type="file" />
                    </div>
                    <div className="box-attachment btn-fill-upload">
                      {/* <Image src={Iconattachment} alt="Attachment" /> */}
                      <input type="file" />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-send-msg">
                    {/* <Image src={Iconplan} alt="Send" /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default ChatListSection
