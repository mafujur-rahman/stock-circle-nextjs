'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { HiDotsVertical } from 'react-icons/hi'
import { FaEdit } from 'react-icons/fa'
import { MdOutlineManageHistory } from 'react-icons/md'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import useAuthToken from '../../../(client)/_components/hooks/useAuthToken'
import Topbar from '../../../(client)/_components/dashboard/Topbar'

export default function page() {
    const [blogs, setBlogs] = useState([])
    const router = useRouter()
    const [openMenuId, setOpenMenuId] = useState(null)
    const { token } = useAuthToken()
    console.log(token, 'top token')

    // Fetch blogs
    useEffect(() => {
        if (!token) return
        axios
            .get('https://stockcircle.ethicalden.com/api/blogs/blog/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            .then(res => setBlogs(res.data))
            .catch(err => console.error('Error fetching blogs:', err))
    }, [token])

    // Delete blog
    const handleDelete = async id => {
        console.log(id, token, 'check id ')
        try {
            await axios.delete(
                `https://stockcircle.ethicalden.com/api/blogs/blog/${id}/`,
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
            )
            toast.success('Blog deleted successfully!')
            setBlogs(prev => prev.filter(blog => blog.id !== id))
        } catch (error) {
            console.error('Error deleting blog:', error)
            // alert('Failed to delete blog')
        }
    }

    // Toggle menu
    const toggleMenu = id => {
        setOpenMenuId(prev => (prev === id ? null : id))
    }
    console.log(blogs)
    return (
        <div className='tableOverFlow'>
            <Topbar text='Manage Blogs' DashboardIcon={MdOutlineManageHistory} />
            <div className='ad_section_space'>
                <div className='pb-10'>
                    <h1 className='text-2xl font-semibold mb-0.5 text-gray-800'>
                        Manage Blog Post
                    </h1>
                    <p className='xl:w-[35%] w-full lg:w-[80%] text-sm'>
                        View, edit, and organize your blog posts efficiently. Keep your
                        content up-to-date and engage your readers with relevant articles.
                    </p>
                </div>
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
                                <th className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-200 w-48">
                                    Blog Title
                                </th>
                                <th className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-200 w-[40%]">
                                    Blog Summary
                                </th>
                                <th className="px-4 py-3 font-semibold text-gray-600 border-r border-gray-200 w-24">
                                    Writer
                                </th>
                                <th className="px-4 py-3 font-semibold text-gray-600 text-center w-36">
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


                                    <td className="px-4 py-3 text-gray-700 border-r border-gray-200">
                                        {blog.writer || "N/A"}
                                    </td>

                                    <td className="px-4 py-3 text-center">
                                        <div className="flex justify-center gap-2">
                                            {/* Update Button with Icon */}
                                            <Link href={`/dashboard/manage-blog/${blog.id}`}>
                                                <button className="inline-flex items-center gap-1 rounded-md border border-green-300 bg-green-100 px-3 py-1 text-sm text-green-800 hover:bg-green-200 transition">
                                                    <FiEdit className="text-sm" />
                                                    <span>Update</span>
                                                </button>
                                            </Link>

                                            {/* Delete Button with Icon */}
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="inline-flex items-center gap-1 rounded-md border border-red-200 bg-red-50 px-3 py-1 text-sm text-red-600 hover:bg-red-100 transition"
                                            >
                                                <FiTrash2 className="text-sm" />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {blogs.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="py-6 text-center text-gray-500 text-sm"
                                    >
                                        No blogs found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
