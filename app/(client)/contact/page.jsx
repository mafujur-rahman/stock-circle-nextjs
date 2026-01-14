'use client'
import ContactForm from '../_components/ContactForm/ContactForm'
import Banner from '../_components/utilities/Banner'
import { MdOutlineSupportAgent } from 'react-icons/md'

export default function page () {
  return (
    <div>
      <Banner
        text='Contact Us'
        Icon={MdOutlineSupportAgent}
        bannerImg="https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/cal-support.jpg"
      />

      {/* contact form  */}
      <ContactForm />
    </div>
  )
}
