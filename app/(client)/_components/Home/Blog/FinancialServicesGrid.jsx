'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import Tooltip from '../../utilities/Tooltip'
import { SlGraph } from 'react-icons/sl'
import BaseBtn from '../../utilities/BaseBtn'
import axios from 'axios'
import Link from 'next/link'

const FinancialServicesGrid = () => {
  const [updates, setUpdates] = useState([])

  useEffect(() => {
    axios
      .get('https://stockcircle.ethicalden.com/api/markets/market-update/')
      .then(res => setUpdates(res.data.slice(0, 3))) // show only 3
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {/* Header */}
      <div className='text-center max-w-3xl mx-auto'>
        <Tooltip
          icon={SlGraph}
          text='Market Updates'
          headerText='From News To '
          colorText='Nuance'
          des='We cut the noise and tell you what actually changes your setup.'
        />
      </div>

      {/* Cards */}
<div className="blog__container section_topSpace">
  {updates.map(service => (
    <div
      key={service.id}
      className="card__border bg-white rounded-md hover:shadow transition-shadow duration-300
                 flex flex-col h-[520px]"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-[200px] w-full">
        <Image
          src={service.thumbnail}
          alt={service.title}
          fill
          className="object-cover rounded-t-md"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="small__title mb-3 line-clamp-2 min-h-[3.2rem]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="base__text line-clamp-6 min-h-[4.6rem]">
          {service.short_summary}
        </p>

        {/* CTA – pinned bottom, controlled gap */}
        <div className="mt-auto">
          <Link href={service.source_url} target="_blank">
            <button className="btn__style  flex items-center justify-center gap-x-2 group mt-4 cursor-pointer">
              <span>Learn More</span>
              <MdArrowOutward className="text-base text-[#2AA169] group-hover:text-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>



      {/* SEE MORE BUTTON */}
      <div className='flex justify-center mt-12'>
        <Link href="/market-update">
          <button className="inline-flex items-center gap-x-2 btn__style cursor-pointer group">
            See More Updates
            <span>
              <MdArrowOutward />
            </span>
          </button>
        </Link>
      </div>

    </div>
  )
}

export default FinancialServicesGrid
