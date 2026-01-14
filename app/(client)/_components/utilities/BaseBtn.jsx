'use client'
import Link from 'next/link'
import React from 'react'

export default function BaseBtn ({ icon: Icon, text, link, className = '' }) {
  return (
    <div className={`${className}`}>
      <div>
        <Link href={link || '#'}>
          <button className='inline-flex items-center gap-x-2 btn__style cursor-pointer group '>
            {text && <span>{text}</span>}
            {Icon && (
              <Icon className='text-base text-[#2AA169]  group-hover:text-white ' />
            )}
          </button>
        </Link>
      </div>
    </div>
  )
}
