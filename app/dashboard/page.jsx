'use client'
import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import { IoHomeOutline } from 'react-icons/io5'
import Topbar from '../(client)/_components/dashboard/Topbar'
import HomeMarketPosts from '../(client)/_components/HomeMarketPost/HomeMarketPost'
import HomeBlogPosts from '../(client)/_components/HomeBlogPost/HomeBlogPost'
import useAuthToken from '../(client)/_components/hooks/useAuthToken'





export default function CategoryManagement () {
  const [loading, setLoading] = useState(false)

  const { token } = useAuthToken()

  if (loading) {
    return (
      <p className='text-center mt-10 text-gray-600'>Loading categories...</p>
    )
  }

  return (
    <>
      <Toaster position='top-center' />
      <Topbar text='Dashboard' DashboardIcon={IoHomeOutline} />

      {/* Recent blog posts */}
      <HomeMarketPosts />
      <HomeBlogPosts />
    </>
  )
}
