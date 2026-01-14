'use client'
import { useState } from 'react'
import Image from 'next/image'
import { AiOutlineAim } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Tooltip from '../utilities/Tooltip'

export default function MissionVission () {
  // Track only the active title
  const [activeItem, setActiveItem] = useState('Our Mission')

  const toggleItem = title => {
    // If clicked item is already active, close it; else open
    setActiveItem(prev => (prev === title ? null : title))
  }

  const features = [
    {
      title: 'Our Mission',
      content:
        'One important feature of banking security is multi-factor authentication. This means that in addition to the traditional username and password, customers are required to provide additional verification. Our bank uses the latest technology to ensure faster transactions, smarter services, and seamless digital banking. This means that in addition to the traditional username and password take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice. Made with Freepik—real work, real results · The all-in-one suite for creatives. Power your creativity with leading GenAI models, pro features, and a vast stock ',
      des: 'take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice.'
    },
    {
      title: 'Our Vision',
      content:
        'Our bank uses the latest technology to ensure faster transactions, smarter services, and seamless digital banking. We believe every great journey begins with a clear purpose and a bold outlook. Our mission is to create meaningful solutions that not only meet today’s needs but also inspire progress for tomorrow. Goals with confidence. Smarter services, and seamless digital banking. This means that in addition to the traditional username and password',
      des: 'having frontal shields). The word coot dates back to Middle English, and over the centuries appeared in several less-than-flattering constructions as “stupid as a coot” before emerging as an epithet meaning “harmless simple person” in the late-18th century United'
    }
  ]

  return (
    <section>
      <div className='text-center max-w-3xl mx-auto '>
        <Tooltip
          icon={AiOutlineAim}
          text='Mission'
          headerText='Mission of Purpose and a '
          colorText='Vision of Possibility'
          des='We believe every great journey begins with a clear purpose and a bold outlook. Our mission is to create meaningful solutions that not only meet today’s needs but also inspire progress for tomorrow. Goals with confidence.'
        />
      </div>

      <div className='grid xl:grid-cols-2  gap-10 xl:gap-16 items-start section_topSpace'>
        {/* Left Side - Accordion */}
        <div className='space-y-5'>
          {features.map(item => (
            <div key={item.title} className='card__border p-5 rounded-md'>
              <button
                className='w-full text-left small__title flex items-center gap-2 cursor-pointer'
                onClick={() => toggleItem(item.title)}
              >
                {activeItem === item.title ? (
                  <FaMinus className='text-base text-[#2AA169]' />
                ) : (
                  <FaPlus className='text-base text-[#2AA169]' />
                )}
                <span>{item.title}</span>
              </button>

              {activeItem === item.title && (
                <div>
                  <p className='mt-2 base__para'>{item.des}</p>
                  <p className='mt-2 base__para'>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Static Images */}
        <div className='grid grid-cols-2 gap-3 lg:gap-5 h-[500px]'>
          {/* Left Side - Full Height Image */}
          <div className='relative w-full h-full rounded-lg overflow-hidden'>
            <Image
              src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/mission/left.jpg'
              alt='Full Left'
              fill
              className='object-cover'
            />
          </div>

          {/* Right Side - Two stacked images */}
          <div className='flex flex-col lg:gap-5 gap-3 h-full'>
            <div className='relative w-full h-1/2 rounded-lg overflow-hidden'>
              <Image
                src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/mission/one.jpg'
                alt='Top Right'
                fill
                className='object-cover'
              />
            </div>
            <div className='relative w-full h-1/2 rounded-lg overflow-hidden'>
              <Image
                src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/mission/two.jpg'
                alt='Bottom Right'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
