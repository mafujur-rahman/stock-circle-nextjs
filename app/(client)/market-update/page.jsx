"use client"
import React from 'react'
import Banner from '../_components/utilities/Banner'
import MarketUpdate from '../_components/MarketUpdate/MarketUpdate'
import { SlGraph } from 'react-icons/sl'

export default function page () {
  return (
    <div>
      <Banner
        text='Market Update'
        breadcrumb='home/market-update'
        Icon={SlGraph}
        bannerImg="https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/top-view-growth-arrow-with-calculator.jpg"
      />

      <div className='section__gap section__top'>
        <MarketUpdate />
      </div>
    </div>
  )
}
