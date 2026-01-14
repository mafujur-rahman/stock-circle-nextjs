'use client'
import React from 'react'
import Banner from '../_components/utilities/Banner'
import { FaBuildingUser } from 'react-icons/fa6'
import OurCourses from '../_components/Home/OurCourses/OurCourses'
import StudentWorks from '../_components/Home/StudentWorks/StudentWorks'
import CTA from '../_components/Home/CTA/CTA'
import Testimonials from '../_components/Home/Testimonial/Testimonials'
import FinancialServicesGrid from '../_components/Home/Blog/FinancialServicesGrid'
import About from '../_components/Home/About/About'
import MissionVission from '../_components/MissionVission/MissionVission'
import OurTeam from '../_components/OurTeam/OurTeam'

export default function page () {
  return (
    <div>
      <Banner
        text='About Us'
        breadcrumb='home/about'
        Icon={FaBuildingUser}
        bannerImg='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/about-test.jpg'
        // bannerImg='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/2151295974.jpg'
        // bannerImg='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/3059.jpg'
      />
      <div className='section__gap section__top'>
        <About />
      </div>
      <div className='section__gap section__top'>
        <OurTeam />
      </div>
      {/* <div className='section__gap section__top'>
        <MissionVission />
      </div> */}
      <div className='section__gap section__top'>
        <StudentWorks />
      </div>
      <div className=' section__top'>
        <CTA />
      </div>
      {/* <div className='section__gap section__top'>
        <Testimonials />
      </div> */}
    </div>
  )
}
