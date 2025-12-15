import React from 'react'
import BannerImage from './BannerImage'
import StayDetailsHost from './StayDetailsHost'
import LandmarksAttractions from './LandmarksAttractions'
import Link from 'next/link'
import StayEnhancements from './StayEnhancements'

const PropertyDetails = () => {
  return (
    <div className='stay-Details-sec'>
        <div className='row'>
            <div className='col-xl-8'>
                <BannerImage />
            </div>
            <div className='col-xl-4'>
                <StayDetailsHost />
            </div>
            <div className='col-md-12'>
               <LandmarksAttractions />
            </div>
            <div className='col-md-12 mt-4'>
                <div className='card-box p-16'>
                    <div className='table-top d-flex align-items-center flex-md-nowrap flex-wrap justify-content-between gap-3'>
                        <div className='left-table  position-relative'>
                            <h2>Property Description</h2>
                        </div>
                        <div className='right-box'>
                            <Link href="" className='btn btn-edit btn-border d-flex align-items-center gap-2'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.66699 19.2501H18.3337M5.19416 12.0881C4.80331 12.4799 4.58376 13.0106 4.58366 13.564V16.5001H7.53808C8.09174 16.5001 8.62249 16.2801 9.01391 15.8877L17.7222 7.17481C18.113 6.78303 18.3324 6.25229 18.3324 5.69898C18.3324 5.14567 18.113 4.61493 17.7222 4.22315L16.8624 3.36148C16.6685 3.16747 16.4382 3.01358 16.1848 2.90862C15.9314 2.80365 15.6598 2.74967 15.3855 2.74976C15.1112 2.74984 14.8396 2.80399 14.5862 2.90911C14.3329 3.01424 14.1027 3.16827 13.9089 3.3624L5.19416 12.0881Z" stroke="#652669" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>Edit</span>
                            </Link>
                        </div>
                    </div>
                    <p>Escape to the serene beauty of Anjuna and experience a stay like no other. As the sun rises, be greeted by the air of the stunning Goan morning. Spend your days basking in the sun on the poolside deck, captivated by the endless horizon and the mesmerising sea view.</p>
                </div>
            </div>
            <div className='col-md-12'>
                <StayEnhancements />
            </div>
        </div>
    </div>
  )
}

export default PropertyDetails