'use client'
import React from 'react';
import Image from "next/image";
import BannerImage from './BannerImage'
import About from './About';
import Pricing from './Pricing';
import CustomPricing from './CustomPricing';
import Gallery from './Gallery';
import StayDetailsHost from './StayDetailsHost';
import Highlights from './Highlights';
import Amenities from './Amenities';

const StayDetails = () => {
  return (
    <div className='stay-Details-sec'>
        <div className='row'>
            <div className='col-xl-8'>
                <BannerImage />
                <About />
                <Pricing />
            </div>
            <div className='col-xl-4'>
                <StayDetailsHost />
                <Highlights />
                <Amenities />
            </div>
            <div className='col-md-12'>
                <CustomPricing />
                <Gallery />
            </div>
        </div>
    </div>
  )
}

export default StayDetails