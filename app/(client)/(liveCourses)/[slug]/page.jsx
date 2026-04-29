"use client";

import { coursePagesData } from "@/app/(client)/_components/fakeDB/pageData";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Navbar from "../../_components/utilities/Navbar";
import Tooltip from "../../_components/utilities/Tooltip";
import Marquee from "react-fast-marquee";
import BaseBtn from "../../_components/utilities/BaseBtn";
import { MdOutlineJoinFull } from "react-icons/md";
import Image from "next/image";
import { GrCertificate } from "react-icons/gr";
import Footer from "../../_components/Shared/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const IconWrapper = ({ Icon, className }) =>
  Icon ? <Icon className={className || "text-3xl text-blue-600"} /> : null;

export default function Page() {
  const [openIndex, setOpenIndex] = useState(0);
  const params = useParams();
  const { slug } = params;

  const [openFaq, setOpenFaq] = useState(0);

  // Add form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'India (+91)',
    phone: '',
    course: 'Basics of Technical Analysis',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCurriculamFAQ = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Access page data using slug as key
  const livePageData = Object.values(coursePagesData).find(
    (item) => item.slug === slug
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Helper function to extract country code
  const getCountryCode = (countryString) => {
    const match = countryString.match(/\(([^)]+)\)/);
    return match ? match[1] : null;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const countryCode = getCountryCode(formData.country);

    const payload = {
      name: formData.name,
      email: formData.email,
      country_code: countryCode,
      mobile: formData.phone,
      course: formData.course,
      message: formData.message
    };

    try {
      const res = await axios.post(
        'https://stockcircle.ethicalden.com/api/contact/get-in-touch/',
        payload
      );
      console.log('Response:', res.data);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        country: 'India (+91)',
        phone: '',
        course: 'Basics of Technical Analysis',
        message: ''
      });
    } catch (err) {
      console.error('Error sending message:', err);
      toast.error('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log(livePageData, slug);

  if (!livePageData) {
    return (
      <div className="text-center py-10 text-red-600 font-bold">
        Page not found
      </div>
    );
  }

  return (
    <section className="">
      <Toaster position='top-right' reverseOrder={false} />
      <div className="gradient__color">
        <Navbar />
        <div
          className="bg-no-repeat bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${livePageData.heroBanner.bannerImg})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Hero + Form */}
          <div className="section__gap grid lg:grid-cols-2 gap-[10%] h-[70vh] xl:h-[60vh] items-center mt-[10vh] relative z-20">
            {/* Hero Section */}
            {livePageData.heroBanner && (
              <section>
                <h1 className="sub__title !text-white">
                  {livePageData.heroBanner.title}
                </h1>
                <p className="base__para !text-white mt-2.5">
                  {livePageData.heroBanner.subtitle}
                </p>

                <ul className="space-y-2.5 my-10 list-disc list-inside">
                  {livePageData.heroBanner.highlights?.map((highlight, i) => (
                    <li
                      key={i}
                      className="base__para !text-white text-shadow-2xs"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className=" inline-flex md:flex-row flex-col gap-x-5">
                  {livePageData.heroBanner.ctas?.map((cta, i) => (
                    <a
                      key={i}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className={`px-6 py-2 my-2 lg:my-0 rounded-md text-sm font-medium inline-flex gap-x-1.5 gap-y-2.5 lg:gap-y-2.5 items-center ${cta.type === "primary"
                        ? "bg-[#2AA169] text-white "
                        : "bg-[#2AA169]  lg:hover:text-white transition text-white "
                        }`}
                    >
                      {cta.label}
                      <IconWrapper
                        Icon={cta.icon}
                        className="mx-auto text-xl "
                      />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* contact form */}
            <div className="hidden lg:block">
              <div className="bg-white/20 backdrop-blur-2xl rounded-xl relative z-20 ">
                <div className="p-5 border border-white/10 rounded-xl">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="w-full border border-white/80 rounded text-white px-3 py-2 focus:outline-none bg-transparent"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full border border-white/80 rounded text-white px-3 py-2 focus:outline-none bg-transparent"
                      />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="border border-white/80 text-white rounded px-3 py-2 focus:outline-none bg-transparent"
                      >
                        <option className="text-black/80">India (+91)</option>
                        <option className="text-black/80">Bangladesh (+880)</option>
                        <option className="text-black/80">United Arab Emirates (+971)</option>
                        <option className="text-black/80">Sri Lanka (+94)</option>
                        <option className="text-black/80">USA (+1)</option>
                        <option className="text-black/80">UK (+44)</option>
                      </select>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="w-full border border-white/80 rounded text-white px-3 py-2 focus:outline-none bg-transparent"
                      />
                    </div>

                    <div>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="border w-full border-white/80 rounded text-white px-3 py-2 focus:outline-none bg-transparent"
                      >
                        <option className="text-black/80">
                          Basics of Technical Analysis
                        </option>
                        <option className="text-black/80">
                          Basics of Fundamental Analysis
                        </option>
                        <option className="text-black/80">
                          Basics of Derivatives Market
                        </option>
                        <option className="text-black/80">
                          Techno - Funda Module
                        </option>
                        <option className="text-black/80">
                          Personal Finance Program
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                      className="w-full border border-white/80 rounded text-white px-3 py-2 focus:outline-none bg-transparent"
                    ></textarea>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-sm font-medium bg-[#2AA169] text-white py-2 px-6 rounded-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your code remains exactly the same */}
      <div className="section__gap">
        {/* Program Highlights Section */}
        {/* <div>
          {livePageData.programHighlights && (
            <section className='section__top'>
              <div className='text-center max-w-3xl mx-auto '>
                <Tooltip
                  icon={livePageData.programHighlights.icon}
                  text={livePageData.programHighlights.text}
                  headerText={livePageData.programHighlights.mainTitle}
                  colorText={livePageData.programHighlights.textColor}
                  des={livePageData.programHighlights.mainDescription}
                />
              </div>

              <Marquee
                pauseOnHover
                gradient={true}
                gradientColor='#F9FAFB'
                speed={50}
                autoFill
              >
                {livePageData.programHighlights.items?.map((item, i) => (
                  <div
                    key={i}
                    className='section_topSpace bg-white/5 hover:shadow-xl hover:border-[#2AA169] transition  border border-black/10  rounded-md p-6 space-y-3 mx-2 group
                     w-[200px] lg:w-[350px] xl:w-[400px]'
                  >
                    <IconWrapper
                      className='text-black/60 border rounded-full border-green-100 p-0.5 group-hover:border-green-200 group-hover:text-[#2AA169] transition text-3xl'
                      Icon={item.icon}
                    />
                    <h3 className='small__title'>{item.title}</h3>
                    <p className='base__para'>{item.description}</p>
                  </div>
                ))}
              </Marquee>
            </section>
          )}
        </div> */}

        {/* course curriculam */}

        <div className="section__top">
          <div className="text-center max-w-3xl mx-auto ">
            <Tooltip
              icon={livePageData.curriculamData.icon}
              text={livePageData.curriculamData.text}
              headerText={livePageData.curriculamData.mainTitle}
              colorText={livePageData.curriculamData.textColor}
              des={livePageData.curriculamData.mainDescription}
            />
          </div>

          {/* faq area */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 xl:gap-16 items-center section_topSpace">
            {/* vidoes */}
            <div className="h-full w-full">
              {/* video */}

              <iframe
                className="h-[40vh] lg:h-full w-full rounded-xl"
                src={livePageData.curriculamData.ytLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div>
              <div className="h-[60vh] overflow-y-scroll  scrollbar-hide  space-y-4">
                {livePageData.curriculamData.faqs?.map((faq, i) => (
                  <div key={i} className=" bg-gray-100 p-4 rounded-md">
                    <button
                      onClick={() => toggleFAQ(i)}
                      className={`w-full flex justify-between items-center sub__para text-left ${openIndex === i ? "mb-5" : "mb-0"
                        }`}
                    >
                      {faq.title}
                      <span className="text-green-600 text-xl cursor-pointer">
                        {openIndex === i ? "-" : "+"}
                      </span>
                    </button>

                    {openIndex === i && (
                      <ul className="list-disc list-inside base__para space-y-1">
                        {faq.answer.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Content Section */}
        {/* <div className='section__top'>
          <div className='text-center max-w-3xl mx-auto '>
            <Tooltip
              icon={livePageData.exclusiveContent.icon}
              text={livePageData.exclusiveContent.text}
              headerText={livePageData.exclusiveContent.mainTitle}
              colorText={livePageData.exclusiveContent.textColor}
              des={livePageData.exclusiveContent.mainDescription}
            />
          </div>
          <div>
            {livePageData.exclusiveContent && (
              <section className=''>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5  xl:gap-x-8 gap-y-5 lg:gap-y-0 section_topSpace'>
                  {livePageData.exclusiveContent.items?.map((item, i) => (
                    <div key={i} className=' card__border rounded-md p-5'>
                      <div className=''>
                        <div className='flex justify-center '>
                          <Image
                            height={800}
                            width={800}
                            src={item.img}
                            alt='course image'
                            className='object-cover h-[25vh] rounded '
                          />
                        </div>
                        <div className=' '>
                       
                          <h3 className='small__title mt-5 mb-2.5'>
                            {item.title}
                          </h3>
                          <p className='base__para'>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div> */}

        {/* Why Us Section */}
        <div className="section__top ">
          <div>
            {livePageData.whyUs && (
              <section className="grid lg:grid-cols-2 gap-14 ">
                <div>
                  <div>
                    <Tooltip
                      icon={livePageData.whyUs.icon}
                      text={livePageData.whyUs.text}
                      headerText={livePageData.whyUs.mainTitle}
                      colorText={livePageData.whyUs.textColor}
                      des={livePageData.whyUs.mainDescription}
                    />
                  </div>

                  <div className="mt-5 lg:mt-14">
                    <BaseBtn
                      text="Join with Us"
                      icon={MdOutlineJoinFull}
                      link="/contact"
                    />
                  </div>
                </div>

                <div className=" grid grid-cols-2 gap-3 lg:gap-5">
                  {livePageData.whyUs.items?.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white shadow rounded-lg lg:p-5 p-3  space-y-3"
                    >
                      {/* <div className='flex justify-center items-center'>
                      <IconWrapper className='' Icon={item.icon} />
                    </div> */}
                      <h3 className="small__title">{item.title}</h3>
                      <p className="base__para">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* industry recognized certification */}

        <div className="section__top">
          <div className="text-center max-w-3xl mx-auto ">
            <Tooltip
              icon={GrCertificate}
              text="Certificate"
              headerText="Industry Recognized "
              colorText="Certification"
              des="This path was never easy. It was full of long hours, self-doubt, and setbacks, but it also taught me the most important lesson: trust the process.  With persistence, faith, and resilience, every effort eventually finds its reward."
            />
          </div>

          <div className="h-auto w-full section_topSpace">
            <Image
              height={1000}
              width={1000}
              alt="certificate"
              src="/stock-circle-course-certificate.jpeg"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Modeling Course Section */}
        {/* <div className='section__top'>
          {livePageData.modelingCourse && (
            <section>
              <div className='max-w-xl '>
                <Tooltip
                  icon={livePageData.modelingCourse.icon}
                  text={livePageData.modelingCourse.text}
                  headerText={livePageData.modelingCourse.mainTitle}
                  colorText={livePageData.modelingCourse.textColor}
                  des={livePageData.modelingCourse.mainDescription}
                />
              </div>

              {livePageData.modelingCourse.courseData?.length > 0 && (
                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {livePageData.modelingCourse.courseData.map((item, i) => (
                    <div
                      key={i}
                      className='bg-white shadow rounded-lg p-6 text-center space-y-3'
                    >
                      <IconWrapper
                        Icon={item.icon}
                        className='mx-auto text-4xl text-[#2AA169]'
                      />
                      <h3 className='font-semibold text-xl'>{item.title}</h3>
                      <p className='text-gray-600'>{item.description}</p>
                      {item.metric && (
                        <span className='block text-lg font-bold text-[#2AA169]'>
                          {item.metric}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </div> */}

        {/* FAQ Section */}
        {livePageData.faq && (
          <section className="section__top">
            <div className="text-center max-w-3xl mx-auto ">
              <Tooltip
                icon={livePageData.faq.icon}
                text={livePageData.faq.text}
                headerText={livePageData.faq.mainTitle}
                colorText={livePageData.faq.textColor}
                des={livePageData.faq.mainDescription}
              />
            </div>

            <div className="section_topSpace space-y-4">
              {livePageData.faq.items?.map((faq, i) => (
                <div key={i} className=" bg-gray-100 p-4 rounded-md">
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center font-semibold text-left text-black/80"
                  >
                    {faq.title}
                    <span className="text-green-600 text-xl cursor-pointer ">
                      {openIndex === i ? "-" : "+"}
                    </span>
                  </button>

                  {openIndex === i && (
                    <p className="mt-2 text-gray-600 text-sm lg:text-base">
                      {faq.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}