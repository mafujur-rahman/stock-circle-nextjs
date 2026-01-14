'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LuLayoutDashboard } from 'react-icons/lu'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdOutlineManageHistory } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'
import Image from 'next/image'

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LuLayoutDashboard /> },
    { name: 'Create Blog', path: '/dashboard/create-blog', icon: <IoIosAddCircleOutline /> },
    { name: 'Manage Blogs', path: '/dashboard/manage-blog', icon: <MdOutlineManageHistory /> },
    { name: 'Create Market Update', path: '/dashboard/create-market-update', icon: <IoIosAddCircleOutline /> },
    { name: 'Manage Market Update', path: '/dashboard/manage-market-update', icon: <MdOutlineManageHistory /> }
  ]

  return (
    <div>
      {/* Mobile Header */}
      <div className='lg:hidden flex items-center justify-between bg-gray-100 px-5 py-5 md:px-10 lg:px-[2vw] border-b border-gray-200'>
        {/* Logo navigates to home */}
        <Link href='/' className='overflow-hidden h-10 w-fit cursor-pointer'>
          <img
            src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-logo.png'
            alt='logo'
            className='h-full w-auto object-cover'
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-2xl text-black/70 focus:outline-none'
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Sidebar for LG+ */}
      <div className='hidden lg:flex lg:flex-col lg:min-h-screen lg:bg-gray-50 lg:text-black/80 lg:p-6'>
        {/* Logo navigates to home */}
        <div className='mb-5'>
          <Link href='/' className='cursor-pointer'>
            <Image
              src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-logo.png'
              alt='logo'
              height={64}
              width={200}
              className='object-cover'
            />
          </Link>
        </div>

        <ul className='space-y-4'>
          {navItems.map(item => {
            const isActive = pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-400 text-white font-semibold' : 'hover:bg-gray-200'
                  }`}
                >
                  <span className='text-lg'>{item.icon}</span>
                  <span className='text-sm'>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isOpen && (
        <div className='lg:hidden fixed inset-0 bg-black/40 z-50'>
          <div className='bg-gray-50 w-64 h-full p-6'>
            <div className='mb-5 flex items-center justify-between'>
              {/* Logo navigates to home */}
              <Link href='/' className='cursor-pointer'>
                <img
                  src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-logo.png'
                  alt='logo'
                  className='h-10 w-auto object-cover'
                />
              </Link>

              <button onClick={() => setIsOpen(false)} className='text-2xl text-black/70'>
                <HiX />
              </button>
            </div>

            <ul className='space-y-4'>
              {navItems.map(item => {
                const isActive = pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive ? 'bg-gray-200 text-gray-900 font-semibold' : 'hover:bg-gray-200'
                      }`}
                    >
                      <span className='text-lg'>{item.icon}</span>
                      <span className='text-sm'>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
