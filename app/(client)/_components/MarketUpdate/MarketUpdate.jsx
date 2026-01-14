'use client'
import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import { SlGraph } from 'react-icons/sl'
import Tooltip from '../utilities/Tooltip'
import axios from 'axios'
import Link from 'next/link'
import Footer from '../Shared/Footer/Footer'

const ITEMS_PER_PAGE = 15

const MarketUpdate = () => {
  const [marketUpdateDate, setMarketUpdateData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://stockcircle.ethicalden.com/api/markets/market-update/')
      .then(res => {
        setMarketUpdateData(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const totalPages = Math.ceil(marketUpdateDate.length / ITEMS_PER_PAGE)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return marketUpdateDate.slice(start, start + ITEMS_PER_PAGE)
  }, [marketUpdateDate, currentPage])

  if (loading) return <p className="text-center mt-20">Loading...</p>
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>

  return (
    <div>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Tooltip
          icon={SlGraph}
          text="Market Updates"
          headerText="Our Market Updates "
          colorText="for Your Success"
          des="Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to help you achieve your financial goals and secure your future."
        />
      </div>

      {/* Cards */}
      <div className="blog__container section_topSpace">
        {paginatedData.map(service => (
          <div
            key={service.id}
            className="card__border bg-white rounded-md hover:shadow transition-shadow duration-300
                       flex flex-col h-[520px]"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-[200px] w-full">
              <Image
                src={service.thumbnail}
                alt={service.title}
                fill
                className="object-cover rounded-t-md"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col flex-1">
              {/* Title */}
              <h3 className="small__title mb-3 line-clamp-2 min-h-[3.2rem]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="base__text line-clamp-6 min-h-[4.6rem]">
                {service.short_summary}
              </p>

              {/* CTA */}
              <div className="mt-auto">
                <Link href={service.source_url} target="_blank">
                  <button className="btn__style  flex items-center justify-center gap-x-2 group mt-4 cursor-pointer">
                    <span>Learn More</span>
                    <MdArrowOutward className="text-base text-[#2AA169] group-hover:text-white" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

    </div>
  )
}

export default MarketUpdate
