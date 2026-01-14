'use client'
import Link from 'next/link'
import React from 'react'

export default function Tooltip ({
  icon: Icon,
  text,
  link,
  className = '',
  headerText,
  des,
  colorText
}) {
  return (
    <div className={`${className} space-y-5`}>
      <div>
        
          <h1 className='inline-flex items-center gap-x-2 tooltip__btn__style '>
            {Icon && <Icon className='text-base text-white' />}
            {text && (
              <span>
                <span>{text}</span>{' '}
              </span>
            )}
          </h1>

      </div>

      <div className='space-y-3'>
        {headerText && (
          <h3 className='sub__title leading-snug'>
            {headerText} <span className='text-[#2AA169]'>{colorText}</span>
          </h3>
        )}
        {des && <p className='sub__para'>{des}</p>}
      </div>
    </div>
  )
}
