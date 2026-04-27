'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { FaMailBulk, FaBars, FaTimes } from 'react-icons/fa'
import { SlArrowDown } from 'react-icons/sl'

export default function Navbar() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const menus = [
    { name: 'Home', path: '/' },
    {
      name: 'Live Courses',
      path: '/live-courses',
      subMenu: [
        { name: 'Basics of Technical Analysis', path: '/technical-analysis' },
        { name: 'Basics of Fundamental Analysis', path: '/fundamental-analysis' },
        { name: 'Basics of Derivatives Market', path: '/derivatives-market' },
        { name: 'Techno - Funda Module', path: '/funda-Module' },
        { name: 'Personal Finance Program', path: '/finance-Program' }
      ]
    },
    { name: 'Market Updates', path: '/market-update' },
    { name: 'Blogs', path: '/blog' },
    { name: 'About Us', path: '/about' }
  ]

  const toggleMenu = (name, e) => {
    e.stopPropagation() // Prevent event bubbling
    setOpenMenu(openMenu === name ? null : name)
  }

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    if (mobileOpen) return

    const handleClickOutside = (event) => {
      // Check if click is on dropdown button or inside dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }

    // Small delay to ensure proper event handling
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 0)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Handle navigation for dropdown items
  const handleNavClick = (path, isMobile = false) => {
    // Use setTimeout to ensure navigation happens after state updates
    setTimeout(() => {
      window.location.href = path
    }, 0)
  }

  return (
    <div className='fixed top-0 w-full gradient__color z-50'>
      <nav className='py-[2vh] max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 lg:px-16 xl:px-0'>
        {/* Logo */}
        <Link href='/'>
          <div className='cursor-pointer'>
            <Image
              height={1000}
              width={1000}
              alt='logo'
              src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-logo.png'
              className='object-cover w-44 md:w-56 lg:w-44 xl:w-56 h-auto'
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-x-16'>
          <div ref={dropdownRef} className='relative'>
            <ul className='flex lg:gap-x-5 xl:gap-x-10 items-center'>
              {menus.map(menu => {
                const isActive = pathname === menu.path
                return (
                  <li key={menu.name} className='relative font-medium text-sm'>
                    {menu.subMenu ? (
                      <div>
                        <button
                          onClick={(e) => toggleMenu(menu.name, e)}
                          className={`flex items-center font-medium cursor-pointer gap-x-1 hover:text-green-500 transition-colors ${openMenu === menu.name || (menu.subMenu?.some(sub => pathname === sub.path))
                              ? 'text-green-500'
                              : 'text-black'
                            }`}
                          aria-expanded={openMenu === menu.name}
                          aria-haspopup="true"
                        >
                          {menu.name}
                          <SlArrowDown
                            className={`text-sm transition-transform duration-300 ${openMenu === menu.name ? 'rotate-180' : 'rotate-0'
                              }`}
                          />
                        </button>

                        {/* Dropdown */}
                        {openMenu === menu.name && (
                          <ul 
                            className='absolute top-full left-0 bg-white shadow-md rounded-md py-2 mt-3 w-64 z-[60] min-h-fit'
                            onMouseLeave={() => setOpenMenu(null)} // Close when mouse leaves dropdown
                          >
                            {menu.subMenu.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.path}
                                  className={`block px-4 py-2 text-sm text-black/80 hover:bg-green-100 hover:text-green-600 transition-colors ${pathname === sub.path
                                      ? 'text-green-500 bg-green-50'
                                      : ''
                                    }`}
                                  onClick={() => {
                                    setOpenMenu(null)
                                  }}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={menu.path}
                        className={`hover:text-green-500 transition-colors cursor-pointer ${isActive ? 'text-green-500' : 'text-black'
                          }`}
                      >
                        {menu.name}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Button */}
          <div>
            <Link href='/contact'>
              <button className='inline-flex items-center gap-x-2 btn__style cursor-pointer group'>
                <FaMailBulk className='text-base text-[#2AA169] group-hover:text-white' />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className='lg:hidden'>
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen)
              setOpenMenu(null) // Close any open dropdown when toggling mobile menu
            }}
            className='text-2xl text-black'
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div 
          ref={mobileMenuRef}
          className='lg:hidden bg-white shadow-lg border-t border-gray-200 z-50 max-h-[80vh] overflow-y-auto'
        >
          <ul className='flex flex-col'>
            {menus.map(menu => {
              const isActive = pathname === menu.path

              if (menu.subMenu) {
                const isAnySubActive = menu.subMenu.some(sub => pathname === sub.path)
                
                return (
                  <li key={menu.name} className='border-b border-gray-200'>
                    <button
                      onClick={(e) => toggleMenu(menu.name, e)}
                      className={`w-full px-5 md:px-12 py-3 flex justify-between items-center text-sm font-medium text-left ${openMenu === menu.name || isAnySubActive
                          ? 'text-green-500'
                          : 'text-black'
                        }`}
                    >
                      {menu.name}
                      <SlArrowDown
                        className={`text-sm transition-transform duration-300 ${openMenu === menu.name ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {openMenu === menu.name && (
                      <div className='px-8 md:px-16 py-2 bg-gray-50'>
                        {menu.subMenu.map((sub) => (
                          <div key={sub.name} className='py-2'>
                            <Link
                              href={sub.path}
                              className={`block text-sm text-black/80 hover:text-green-600 py-1 ${pathname === sub.path ? 'text-green-500 font-medium' : ''
                                }`}
                              onClick={() => {
                                setMobileOpen(false)
                                setOpenMenu(null)
                              }}
                            >
                              {sub.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                )
              }

              return (
                <li key={menu.name} className='border-b border-gray-200'>
                  <Link
                    href={menu.path}
                    className={`block px-5 md:px-12 py-3 text-sm hover:text-green-500 transition-colors ${isActive ? 'text-green-500' : 'text-black'
                      }`}
                    onClick={() => {
                      setMobileOpen(false)
                      setOpenMenu(null)
                    }}
                  >
                    {menu.name}
                  </Link>
                </li>
              )
            })}

            {/* Contact Button in Mobile */}
            <li className='p-5 md:px-12'>
              <Link href='/contact'>
                <button
                  className='inline-flex items-center justify-center gap-x-2 btn__style w-full'
                  onClick={() => {
                    setMobileOpen(false)
                    setOpenMenu(null)
                  }}
                >
                  <FaMailBulk className='text-base text-[#2AA169]' />
                  <span>Contact Us</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}