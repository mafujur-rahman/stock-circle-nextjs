'use client'

import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { VscGraph } from 'react-icons/vsc'
import useAuthToken from '@/app/(client)/_components/hooks/useAuthToken'
import Topbar from '@/app/(client)/_components/dashboard/Topbar'

export default function Page() {
  const [title, setTitle] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [file, setFile] = useState(null)
  const [url, setUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false) // Add loading state
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const { token } = useAuthToken()

  const router = useRouter()

  // Actual submission logic
  const submitForm = async () => {
    setIsSubmitting(true)
    
    const formData = new FormData()
    formData.append('title', title)
    formData.append('short_summary', shortDesc)
    formData.append('source_url', url)

    if (file) {
      formData.append('thumbnail', file)
    }

    try {
      const res = await axios.post(
        'https://stockcircle.ethicalden.com/api/markets/market-update/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            ...(token && { Authorization: `Token ${token}` })
          }
        }
      )

      // Close modal first
      setShowConfirmModal(false)
      
      // Show success toast
      toast.success('Market update post created successfully!')
      
      // Wait for toast to be visible before navigation
      setTimeout(() => {
        router.push('/dashboard/manage-market-update')
      }, 1500)

      // Reset form
      setTitle('')
      setShortDesc('')
      setUrl('')
      setFile(null)

    } catch (error) {
      console.error(
        'Error submitting market update:',
        error.response?.data || error
      )
      // Show specific error message if available
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          'Error submitting market update'
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Show modal on form submit instead of direct submit
  const handleSubmit = e => {
    e.preventDefault()
    
    // Validate required fields
    if (!title || !shortDesc || !url) {
      toast.error('Please fill in all required fields')
      return
    }
    
    setShowConfirmModal(true)
  }

  return (
    <div>
      <Topbar text='Market Update' DashboardIcon={VscGraph} />
      <div className='ad_section_space'>
        <div className='pb-10'>
          <h1 className='text-2xl font-semibold mb-0.5 text-gray-800'>
            Create Market Update Post
          </h1>
          <p className='xl:w-[35%] w-full lg:w-[80%] text-sm'>
            Share your insights and stories by creating a new Market Update post. Engage
            your audience with valuable content and fresh perspectives.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6 bg-white rounded'>
          <div className='gap-x-5'>
            {/* Title */}
            <div>
              <label className='block mb-2 font-medium text-gray-700'>
                Market Update Title
              </label>
              <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Enter title'
                required
                className='w-full px-4 py-2 border rounded border-black/10 outline-none'
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-x-5'>
            {/* Short Description */}
            <div>
              <label className='block mb-2 font-medium text-gray-700'>
                Short Description
              </label>
              <textarea
                value={shortDesc}
                onChange={e => setShortDesc(e.target.value)}
                placeholder='Write a short description...'
                rows={3}
                required
                className='w-full px-4 py-2 border border-black/10 rounded outline-none'
              />
            </div>

            {/* File Upload */}
            <div>
              <label className='block mb-2 font-medium text-gray-700'>
                Upload Thumbnail
              </label>
              <label
                htmlFor='file-upload'
                className='flex flex-col items-center justify-center w-full h-21.5 border-[1px] border-dashed border-green-400 rounded-md cursor-pointer bg-green-50 hover:bg-green-100 transition'
              >
                <FaCloudUploadAlt className='text-4xl text-green-500 mb-2' />
                <span className='font-semibold text-gray-700'>
                  Click or drag file here
                </span>
                <input
                  id='file-upload'
                  type='file'
                  className='hidden'
                  onChange={e => setFile(e.target.files[0])}
                  accept='image/*'
                />
              </label>
              {file && (
                <p className='mt-2 text-green-600 font-medium'>
                  Selected: {file.name}
                </p>
              )}
            </div>
          </div>

          {/* Source URL */}
          <div>
            <label className='block mb-2 font-medium text-gray-700'>
              Source URL
            </label>
            <input
              type='url'
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder='Source url'
              required
              className='w-full px-4 py-2 border border-black/10 rounded outline-none'
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='cursor-pointer mt-5 mb-10 py-2 px-6 bg-blue-400 text-white rounded flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <IoIosSend className='text-lg' />
              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
            </button>
          </div>
        </form>

        {/* Confirm Modal */}
        {showConfirmModal && (
          <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 w-80 shadow-lg'>
              <h3 className='text-lg font-bold mb-4 text-center text-[#1D204E]'>
                Confirm Submission
              </h3>
              <p className='text-sm text-gray-600 mb-6 text-center'>
                Want to submit this market post?
              </p>
              <div className='flex justify-between gap-4'>
                <button
                  onClick={() => setShowConfirmModal(false)}
                  disabled={isSubmitting}
                  className='flex-1 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer disabled:opacity-50'
                >
                  Cancel
                </button>
                <button
                  onClick={submitForm}
                  disabled={isSubmitting}
                  className='flex-1 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 cursor-pointer disabled:opacity-50'
                >
                  {isSubmitting ? 'Submitting...' : 'Yes, Submit'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        <Toaster position='top-center' />
      </div>
    </div>
  )
}