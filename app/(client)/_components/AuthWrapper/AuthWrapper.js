'use client'
import { useEffect, useState } from 'react'
import Sidebar from '../dashboard/Sidebar'
import LoginPage from '../LoginPage/LoginPage'


export default function AuthWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-center mt-10">Loading...</p>
      </div>
    )
  }

  return isLoggedIn ? (
    <section className="flex">
      {/* FIXED SIDEBAR */}
      <aside className="fixed top-0 left-0 h-screen w-[20%] xl:w-[15%] z-50">
        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-[20%] xl:ml-[15%] w-full min-h-screen overflow-y-auto bg-white">
        {children}
      </main>
    </section>
  ) : (
    <LoginPage />
  )
}
