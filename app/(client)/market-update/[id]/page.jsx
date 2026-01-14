'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Banner from '@/app/(client)/_components/utilities/Banner'
import { financialServices } from '@/app/(client)/_components/fakeDB/marketData'
import Image from 'next/image'
import BaseBtn from '../../_components/utilities/BaseBtn'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Link from 'next/link'
import { BsStack } from 'react-icons/bs'
import axios from 'axios'
import { FaUser } from 'react-icons/fa6'
import { MdOutlineDateRange } from 'react-icons/md'

export default function MarketUpdateDetails () {
  const { id } = useParams()
  const [marketUpdateData, setMarketUpdateData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://stockcircle.mrshakil.com/api/markets/market-update/${id}`)
      .then(res => {
        setMarketUpdateData(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  console.log(marketUpdateData, 'fetch data')

  if (!marketUpdateData) {
    return (
      <div className='max-w-4xl mx-auto py-10 text-center'>
        <h2 className='text-2xl font-bold'>Service Not Found</h2>
      </div>
    )
  }

  return (
    <div>
      {/* Banner */}
      <Banner
        bannerImg='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/144221.jpg'
        text='Market Details'
        Icon={BsStack}
        breadcrumb={`home/market-update/${id}`}
      />

      {/* Details */}
      <div className='max-w-7xl mx-auto px-5 md:px-12 lg:px-16 xl:px-0 mt-[10vh] lg:mt-[15vh]'>
        {/* <BaseBtn text="Back To Market" icon={FaLongArrowAltLeft} link="/market-update"/> */}
        <div>
          <Link href='/market-update'>
            <button className='inline-flex items-center gap-x-2 btn__style cursor-pointer group mb-5 '>
              <FaLongArrowAltLeft className='text-base text-[#2AA169]  group-hover:text-white' />
              <span>Back To Market</span>{' '}
            </button>
          </Link>
        </div>

        <div className='mb-10 space-y-3'>
          <h1 className='text-3xl font-bold'>{marketUpdateData.title}</h1>

          <div className='flex gap-x-4 text-gray-600'>
            <p className='flex items-center gap-1'>
              <FaUser className='text-blue-500' />
              {marketUpdateData.writer}
            </p>
            <p className='flex items-center gap-1'>
              <MdOutlineDateRange className='text-green-600' />
               { new Date (marketUpdateData.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className='relative h-[80vh] w-full mb-6'>
          <Image
            src={marketUpdateData.thumbnail}
            alt={marketUpdateData.title}
            fill
            className='object-cover rounded-md'
          />
        </div>

        {/* Title & Description */}

        <p className='text-lg text-gray-600 mb-6'>
          {marketUpdateData.short_summary}
        </p>

        {/* If longDes is plain text, render normally */}

        {/* Render HTML safely */}
        <div
          className='prose max-w-none text-gray-800 leading-relaxed'
          dangerouslySetInnerHTML={{ __html: marketUpdateData.content }}
        ></div>
      </div>
    </div>
  )
}
