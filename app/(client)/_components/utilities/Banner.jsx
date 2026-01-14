'use client'
import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

export default function Banner ({
  text,
  className = '',
  Icon,
  breadcrumb,
  bannerImg
}) {
  return (
    <div
      className={`w-full relative overflow-hidden gradient__color ${className}`}
    >
      {/* Navigation */}
      <div className='relative z-50 block bg-white'>
        <Navbar />
      </div>
      {/* Background Image */}
      {bannerImg && (
        <Image
          src={bannerImg}
          alt='Banner background'
          fill
          priority
          className='object-cover object-center absolute inset-0 z-0'
          // height={1000}
          // width={1000}
        />
      )}

      {/* Overlay (optional dark layer for readability) */}
      <div className='absolute inset-0 bg-black/50 z-10' />

      {/* Banner Content */}
      <div className='relative z-20  max-w-7xl mx-auto h-[70vh] flex items-center justify-center lg:justify-start'>
        <div className='mt-[10vh]'>
          <div className=''>
            {/* {Icon && (
              <Icon className='banner__title !text-white bg-[#2AA169] rounded-full p-1.5' />
            )} */}
            <h1 className='banner__title text-center'>{text}</h1>
          </div>


        </div>
      </div>
    </div>
  )
}
