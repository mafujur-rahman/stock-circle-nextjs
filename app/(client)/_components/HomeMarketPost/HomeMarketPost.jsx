'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useAuthToken from '../hooks/useAuthToken'
import { FiEye } from 'react-icons/fi'

export default function HomeMarketPosts() {
    const [blogs, setBlogs] = useState([])
    const { token } = useAuthToken();

    // Fetch blogs
    useEffect(() => {
        if (!token) return
        axios
            .get('https://stockcircle.ethicalden.com/api/markets/market-update/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            .then(res => setBlogs(res.data.slice(0, 5)))
            .catch(err => console.error('Error fetching market update:', err))
    }, [token])

    console.log(blogs)

    return (
        <div className='tableOverFlow'>
            <div className='ad_section_space'>
                <div className='pb-10'>
                    <h1 className='text-base font-semibold mb-0.5 text-black/80'>
                        Recent Market Update Posts
                    </h1>
                    <p className='xl:w-[35%] w-full lg:w-[80%] text-sm'>
                        View, edit, and organize your market update posts efficiently. Keep your
                        content up-to-date and engage your readers with relevant articles.
                    </p>
                </div>
                <div className='overflow-x-auto'>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full table-fixed border-collapse text-left text-sm">
                            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-200 w-12">
                                        #SL
                                    </th>
                                    <th className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-200 w-32">
                                        Date
                                    </th>
                                    <th className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-200">
                                        Market Update Title
                                    </th>
                                    <th className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-200">
                                        Market Update Summary
                                    </th>
                                    <th className="px-4 py-3 font-semibold text-gray-600 text-center w-28">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {blogs.map((blog, i) => (
                                    <tr
                                        key={blog.id}
                                        className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
                                    >
                                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200">
                                            {i + 1}
                                        </td>

                                        <td className="px-4 py-3 text-gray-700 border-r border-gray-200 font-medium">
                                            {new Date(blog?.created_at).toLocaleDateString()}
                                        </td>

                                        <td className="px-4 py-3 text-gray-800 border-r border-gray-200 font-medium">
                                            {blog.title}
                                        </td>

                                        <td className="px-4 py-3 text-gray-600 border-r border-gray-200">
                                            <div className="leading-relaxed line-clamp-2">
                                                {blog.short_summary}
                                            </div>
                                        </td>



                                        <td className="px-4 py-3 text-center">
                                            <Link href="/dashboard/manage-market-update">
                                                <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-900 hover:text-white transition">
                                                    <FiEye className="text-sm" />
                                                    <span>View</span>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}

                                {blogs.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="py-6 text-center text-gray-500 text-sm"
                                        >
                                            No markets found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
