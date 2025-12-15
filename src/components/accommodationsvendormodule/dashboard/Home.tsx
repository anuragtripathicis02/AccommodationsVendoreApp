'use client'
import React from 'react'
import Footer from '@/components/Footer'
import CompleteProfile from './CompleteProfile'
import TopDetailsBox from './TopDetailsBox'
import BookingsEarningsChart from './BookingsEarningsChart'
import Dashboard from './Dashboard'
import Requests from './Requests'

const Home = () => {
  return (
    <div className='dashboard-details d-flex flex-column'>
      <div className='booking-sec height-fixed-main d-flex flex-column'>
        <div className='dashboard-pages-heading'>
            <div className='page-details'>
              <div className='left-details-heading start-0 ps-2'>
                <h2>Dashboard</h2>
               </div>
            </div>
        </div>
        <div className='top-dashboard mb-4'>
          <CompleteProfile />
          <TopDetailsBox />
          <div className='mt-4'>
            <BookingsEarningsChart />
          </div>
          <div className='mt-4'>
            <div className='row'>
              <div className='col-xl-6 col-md-12'>
                <Requests />
              </div>
              <div className='col-xl-6 col-md-12'>
                  <Dashboard />
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-dashboard-box'>
          <div className='row'>
            <div className=' col-md-12'>
                {/* <PendingVerifications /> */}
            </div>
          </div>
        </div>
      </div>
        <div className='footer-vendor text-center pt-4 pb-4'>
          <Footer />
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Home