'use client'
import React from 'react';
import Image from "next/image";
import SummeryTopImg from '../../../../public/images/summery-top-img.png'
import Link from 'next/link';

const BannerImage = () => {
  return (
    <div className='summery-sec mb-4'>
        <div className='summery-banner card-box p-16'>
            <div className='img-box position-relative rounded-3 overflow-hidden'>
                <Image src={SummeryTopImg} alt="" className='w-100 d-block'></Image>
                <Link href="" className='btn btn-border d-flex align-items-center gap-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#4F4F4F" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#4F4F4F" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Edit</span>
                </Link>
            </div>
            <div className='text-details d-flex flex-wrap align-items-end mt-4 justify-content-between gap-2'>
                <div className='text-box'>
                    <h1>Riverside Heritage Bungalow, Kochi</h1>
                    <h6>Room in Ernakulam, India</h6>
                    <p className='p-0 m-0'>Plot H/1 Nekede Pocket Layout Protea Road, Owerri 460232 Nigeria</p>
                </div>
                <div className='right-box'>
                    <ul className='rating d-flex align-items-center gap-2'>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#DB8AE8"/><path d="M8.76852 4.22846L9.55075 5.79291C9.65741 6.01069 9.94186 6.21957 10.1819 6.25957L11.5996 6.49513C12.5063 6.64624 12.7196 7.30402 12.0663 7.95291L10.9641 9.05513C10.7774 9.2418 10.6752 9.6018 10.733 9.85957L11.0485 11.224C11.2974 12.304 10.7241 12.7218 9.76852 12.1574L8.43963 11.3707C8.19963 11.2285 7.80408 11.2285 7.55963 11.3707L6.23075 12.1574C5.27963 12.7218 4.70186 12.2996 4.95075 11.224L5.2663 9.85957C5.32408 9.6018 5.22186 9.2418 5.03519 9.05513L3.93297 7.95291C3.28408 7.30402 3.49297 6.64624 4.39963 6.49513L5.81741 6.25957C6.05297 6.21957 6.33741 6.01069 6.44408 5.79291L7.2263 4.22846C7.65297 3.37957 8.3463 3.37957 8.76852 4.22846Z" fill="white"/></svg>
                        </li>
                        <li>4.2 • <span>5 reviews</span> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerImage