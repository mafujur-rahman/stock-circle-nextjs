'use client'
import React from 'react'
import Banner from '../_components/utilities/Banner'
import { SlGraph } from 'react-icons/sl'
import Blog from '../_components/blog/blog'

export default function page () {
  return (
    <div>
      <Banner
        text='Blogs'
        breadcrumb='home/blogs'
        Icon={SlGraph}
        bannerImg='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/one.jpg'
      />

      <div className='section__gap section__top'>
        <Blog />
      </div>
    </div>
  )
}
