import About from './_components/Home/About/About'
import FinancialServicesGrid from './_components/Home/Blog/FinancialServicesGrid'
import CTA from './_components/Home/CTA/CTA'
import HeroBanner from './_components/Home/HeroBanner/HeroBanner'

import OurCourses from './_components/Home/OurCourses/OurCourses'
import StudentWorks from './_components/Home/StudentWorks/StudentWorks'
import Testimonials from './_components/Home/Testimonial/Testimonials'
import Footer from './_components/Shared/Footer/Footer'

export default function Home () {
  return (
    <section>
      <div>
        <HeroBanner />
      </div>
      {/* <div className='section__gap section__top'>
        <About />
      </div> */}
      <div className='section__gap section__top'>
        <OurCourses />
      </div>
      <div className='section__top'>
        <CTA />
      </div>
      <div className='section__gap section__top'>
        <StudentWorks />
      </div>
      <div className='section__gap section__top'>
        <Testimonials />
      </div>
      <div className='section__gap section__top'>
        <FinancialServicesGrid />
      </div>
    </section>
  )
}
