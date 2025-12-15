import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className='dashboard-bottom-sec'>
        <div className='row'>
            <div className='col-xl-6 col-md-12 mb-4'>
                <div className='card-box dashboard-card h-100'>
                    <h3>Earnings/Payouts</h3>
                    <h4>$35446</h4>
                    <ul className='botom-dashboard-box'>
                        <li className='d-flex justify-content-between align-items-center gap-2'>
                            <span className='txet-left-box'>Pending Earning</span>
                            <span className='text-right-box'>$12345</span>
                        </li>
                        <li className='d-flex justify-content-between align-items-center gap-2'>
                            <span className='txet-left-box'>Next Payout</span>
                            <span className='text-right-box'>25 Apr</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-xl-6 col-md-12 mb-4'>
                <div className='card-box dashboard-card h-100'>
                    <h3>Passenger Reviews</h3>
                    <ul className='botom-dashboard-box'>
                        <li className='d-flex justify-content-between align-items-center gap-2'>
                            <span className='txet-left-box'>Cleanliness</span>
                            <span className='text-right-box'>24</span>
                        </li>
                        <li className='d-flex justify-content-between align-items-center gap-2'>
                            <span className='txet-left-box'>On Time</span>
                            <span className='text-right-box'>16</span>
                        </li>
                        <li className='d-flex justify-content-between align-items-center gap-2'>
                            <span className='txet-left-box'>Staff Behaviour</span>
                            <span className='text-right-box'>34</span>
                        </li>
                        <li className='d-flex justify-content-between align-items-center gap-2'>
                            <span className='txet-left-box'>Comfort</span>
                            <span className='text-right-box'>123</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-xl-12 col-md-12 mb-4'>
                <div className="card-box card-section mb-24 h-100" id="scrollspyHeading5">
                    <div className="block-header mb-4">
                        <div className="d-flex align-items-end gap-2">
                            <div className="heading-img">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="39" height="39" rx="3.5" fill="#FAF5FF"/><rect x="0.5" y="0.5" width="39" height="39" rx="3.5" stroke="#F3E7FF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9202 10.8682C19.0303 10.6794 19.1879 10.5227 19.3774 10.4138C19.5669 10.3049 19.7817 10.2476 20.0002 10.2476C20.2188 10.2476 20.4335 10.3049 20.623 10.4138C20.8125 10.5227 20.9702 10.6794 21.0802 10.8682L23.8752 15.6662L29.3032 16.8422C29.5167 16.8886 29.7144 16.9901 29.8764 17.1367C30.0384 17.2833 30.1592 17.4698 30.2267 17.6776C30.2942 17.8854 30.306 18.1073 30.261 18.3211C30.216 18.5349 30.1157 18.7332 29.9702 18.8962L26.2702 23.0372L26.8302 28.5622C26.8523 28.7798 26.817 28.9993 26.7277 29.1989C26.6384 29.3985 26.4983 29.5712 26.3214 29.6997C26.1444 29.8283 25.9369 29.9082 25.7195 29.9314C25.502 29.9546 25.2823 29.9204 25.0822 29.8322L20.0002 27.5922L14.9182 29.8322C14.7181 29.9204 14.4984 29.9546 14.281 29.9314C14.0635 29.9082 13.856 29.8283 13.6791 29.6997C13.5022 29.5712 13.3621 29.3985 13.2728 29.1989C13.1835 28.9993 13.1481 28.7798 13.1702 28.5622L13.7302 23.0372L10.0302 18.8972C9.88446 18.7342 9.78398 18.5359 9.73884 18.3219C9.6937 18.108 9.70547 17.8859 9.77297 17.6779C9.84048 17.47 9.96135 17.2833 10.1235 17.1367C10.2857 16.99 10.4835 16.8885 10.6972 16.8422L16.1252 15.6662L18.9202 10.8682ZM20.0002 12.9872L17.6872 16.9592C17.5998 17.1091 17.482 17.2392 17.3416 17.3411C17.2011 17.443 17.0409 17.5146 16.8712 17.5512L12.3792 18.5242L15.4412 21.9512C15.6752 22.2132 15.7882 22.5612 15.7532 22.9102L15.2902 27.4832L19.4962 25.6292C19.655 25.5592 19.8267 25.5231 20.0002 25.5231C20.1738 25.5231 20.3454 25.5592 20.5042 25.6292L24.7102 27.4832L24.2472 22.9102C24.2296 22.7375 24.2482 22.5631 24.3018 22.3979C24.3553 22.2328 24.4426 22.0807 24.5582 21.9512L27.6212 18.5242L23.1292 17.5512C22.9596 17.5146 22.7994 17.443 22.6589 17.3411C22.5184 17.2392 22.4007 17.1091 22.3132 16.9592L20.0002 12.9872Z" fill="#78297F"/></svg>
                            </div>
                            <h2>4.7</h2>
                            <p className='m-0 p-0'>Average Passenger  Ratings</p>
                        </div>
                    </div>
                    <div className="feedbak-list">
                        <ul className="list-unstyled m-0">
                            <li>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center">
                                        <div className="raring-num">
                                            5
                                        </div>
                                        <div className="icon">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.70544 4.27289L4.10955 3.89462C4.43944 3.84296 4.83892 3.55739 4.9881 3.25728L5.90028 1.47965C6.48174 0.340559 7.44016 0.341064 8.03135 1.47549L9.03004 3.40512C9.19773 3.72759 9.63432 4.02221 9.99767 4.04941L11.9424 4.20849C13.4773 4.33552 13.7921 5.27093 12.6428 6.29502L11.037 7.72555C10.7439 7.98585 10.5821 8.50986 10.6679 8.88588L11.1478 10.9787C11.4901 12.4765 10.6934 13.0602 9.36874 12.2768L7.69377 11.2813C7.38065 11.0953 6.85588 11.077 6.53341 11.2447L4.59857 12.2509C3.46303 12.8357 2.68097 12.2826 2.86227 11.0185L3.14669 9.04512C3.19211 8.71115 3.03894 8.24921 2.79612 8.01822L1.0491 6.31833C0.110515 5.3951 0.404828 4.47614 1.70544 4.27289Z" fill="#FFD500" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <ProgressBar variant="success" now={81} />
                                    </div>
                                    <div className="percentage">81%</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center">
                                        <div className="raring-num">
                                            4
                                        </div>
                                        <div className="icon">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.70544 4.27289L4.10955 3.89462C4.43944 3.84296 4.83892 3.55739 4.9881 3.25728L5.90028 1.47965C6.48174 0.340559 7.44016 0.341064 8.03135 1.47549L9.03004 3.40512C9.19773 3.72759 9.63432 4.02221 9.99767 4.04941L11.9424 4.20849C13.4773 4.33552 13.7921 5.27093 12.6428 6.29502L11.037 7.72555C10.7439 7.98585 10.5821 8.50986 10.6679 8.88588L11.1478 10.9787C11.4901 12.4765 10.6934 13.0602 9.36874 12.2768L7.69377 11.2813C7.38065 11.0953 6.85588 11.077 6.53341 11.2447L4.59857 12.2509C3.46303 12.8357 2.68097 12.2826 2.86227 11.0185L3.14669 9.04512C3.19211 8.71115 3.03894 8.24921 2.79612 8.01822L1.0491 6.31833C0.110515 5.3951 0.404828 4.47614 1.70544 4.27289Z" fill="#FFD500" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <ProgressBar variant="success" now={10} />
                                    </div>
                                    <div className="percentage">10%</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center">
                                        <div className="raring-num">
                                            3
                                        </div>
                                        <div className="icon">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.70544 4.27289L4.10955 3.89462C4.43944 3.84296 4.83892 3.55739 4.9881 3.25728L5.90028 1.47965C6.48174 0.340559 7.44016 0.341064 8.03135 1.47549L9.03004 3.40512C9.19773 3.72759 9.63432 4.02221 9.99767 4.04941L11.9424 4.20849C13.4773 4.33552 13.7921 5.27093 12.6428 6.29502L11.037 7.72555C10.7439 7.98585 10.5821 8.50986 10.6679 8.88588L11.1478 10.9787C11.4901 12.4765 10.6934 13.0602 9.36874 12.2768L7.69377 11.2813C7.38065 11.0953 6.85588 11.077 6.53341 11.2447L4.59857 12.2509C3.46303 12.8357 2.68097 12.2826 2.86227 11.0185L3.14669 9.04512C3.19211 8.71115 3.03894 8.24921 2.79612 8.01822L1.0491 6.31833C0.110515 5.3951 0.404828 4.47614 1.70544 4.27289Z" fill="#FFD500" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <ProgressBar variant="success" now={3} />
                                    </div>
                                    <div className="percentage">3%</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center">
                                        <div className="raring-num">
                                            2
                                        </div>
                                        <div className="icon">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.70544 4.27289L4.10955 3.89462C4.43944 3.84296 4.83892 3.55739 4.9881 3.25728L5.90028 1.47965C6.48174 0.340559 7.44016 0.341064 8.03135 1.47549L9.03004 3.40512C9.19773 3.72759 9.63432 4.02221 9.99767 4.04941L11.9424 4.20849C13.4773 4.33552 13.7921 5.27093 12.6428 6.29502L11.037 7.72555C10.7439 7.98585 10.5821 8.50986 10.6679 8.88588L11.1478 10.9787C11.4901 12.4765 10.6934 13.0602 9.36874 12.2768L7.69377 11.2813C7.38065 11.0953 6.85588 11.077 6.53341 11.2447L4.59857 12.2509C3.46303 12.8357 2.68097 12.2826 2.86227 11.0185L3.14669 9.04512C3.19211 8.71115 3.03894 8.24921 2.79612 8.01822L1.0491 6.31833C0.110515 5.3951 0.404828 4.47614 1.70544 4.27289Z" fill="#FFD500" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <ProgressBar variant="success" now={2} />
                                    </div>
                                    <div className="percentage">2%</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="d-flex align-items-center">
                                        <div className="raring-num">
                                            1
                                        </div>
                                        <div className="icon">
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.70544 4.27289L4.10955 3.89462C4.43944 3.84296 4.83892 3.55739 4.9881 3.25728L5.90028 1.47965C6.48174 0.340559 7.44016 0.341064 8.03135 1.47549L9.03004 3.40512C9.19773 3.72759 9.63432 4.02221 9.99767 4.04941L11.9424 4.20849C13.4773 4.33552 13.7921 5.27093 12.6428 6.29502L11.037 7.72555C10.7439 7.98585 10.5821 8.50986 10.6679 8.88588L11.1478 10.9787C11.4901 12.4765 10.6934 13.0602 9.36874 12.2768L7.69377 11.2813C7.38065 11.0953 6.85588 11.077 6.53341 11.2447L4.59857 12.2509C3.46303 12.8357 2.68097 12.2826 2.86227 11.0185L3.14669 9.04512C3.19211 8.71115 3.03894 8.24921 2.79612 8.01822L1.0491 6.31833C0.110515 5.3951 0.404828 4.47614 1.70544 4.27289Z" fill="#FFD500" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <ProgressBar variant="success" now={3} />
                                    </div>
                                    <div className="percentage">3%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Dashboard