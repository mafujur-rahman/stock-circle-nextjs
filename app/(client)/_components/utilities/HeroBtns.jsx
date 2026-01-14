'use client'
import Link from 'next/link'
import React from 'react'

export default function HeroBtns ({ icon: Icon, text, link, className = '' }) {
  return (
    <div className={`${className}`}>
      <div>
        <Link href={link || '#'}>
          <button className='inline-flex items-center bg-[#2AA169]  gap-x-2 btn__style cursor-pointer group '>
            {Icon && (
              <Icon className='text-base text-[#2AA169]  group-hover:text-white ' />
            )}
            {text && <span>{text}</span>}
          </button>
        </Link>
      </div>
    </div>
  )
}
