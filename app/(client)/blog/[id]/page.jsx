'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Banner from '@/app/(client)/_components/utilities/Banner'
import { blogServiceData } from '@/app/(client)/_components/fakeDB/blogData'
import Image from 'next/image'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Link from 'next/link'
import { BsStack } from 'react-icons/bs'
import axios from 'axios'
import { FaUser } from 'react-icons/fa6'
import { MdOutlineDateRange } from 'react-icons/md'

export default function page () {
  const { id } = useParams()

  const [blogData, setBlogData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://stockcircle.ethicalden.com/api/blogs/blog/${id}`)
      .then(res => {
        setBlogData(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  console.log(blogData, 'fetch data')

  return (
    <div>
      {/* Banner */}
      <Banner
        bannerImg='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/144221.jpg'
        text='Blog Details'
        Icon={BsStack}
        breadcrumb={`home/blog/${id}`}
      />

      {/* Details */}
      <div className='max-w-7xl mx-auto px-5 md:px-12 lg:px-16 xl:px-0 mt-[10vh] lg:mt-[15vh]'>
        {/* <BaseBtn text="Back To Market" icon={FaLongArrowAltLeft} link="/market-update"/> */}
        <div>
          <Link href='/blog'>
            <button className='inline-flex items-center gap-x-2 btn__style cursor-pointer group mb-5 '>
              <FaLongArrowAltLeft className='text-base text-[#2AA169]  group-hover:text-white' />
              <span>Back To Blog</span>{' '}
            </button>
          </Link>
        </div>
        {/* Image */}
        <div className='mb-10 space-y-3'>
          <h1 className='text-3xl font-bold'>{blogData.title}</h1>

          <div className='flex gap-x-4 text-gray-600'>
            <p className='flex items-center gap-1'>
              <FaUser className='text-blue-500' />
              {blogData.writer}
            </p>
            <p className='flex items-center gap-1'>
              <MdOutlineDateRange className='text-green-600' />
              {new Date(blogData.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className='relative h-[50vh] w-full mb-6'>
          <Image
            src={blogData.thumbnail}
            alt={blogData.title}
            fill
            className='object-cover rounded-md'
          />
        </div>

        <p className='text-lg text-gray-600 mb-6'>{blogData.short_summary}</p>

        {/* Render HTML safely for */}
        <div
          className='prose max-w-none text-gray-800 leading-relaxed'
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></div>
      </div>
    </div>
  )
}
