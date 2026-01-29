import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { MdMarkEmailUnread } from "react-icons/md";

import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section>
      <footer className="footer__container footer__gradient__color">
        <div>
          <div className="footer__parent">
            {/* Main Footer Content */}
            <div className="footer__child__parent ">
              {/* c */}
              <div className="">
                {/* Social Media and Copyright */}
                <div className="space-y-5">
                  <div>
                    <div>
                      <Image
                        height={1000}
                        width={1000}
                        alt="logo"
                        src="https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-logo.png"
                        className="object-cover w-48 h-auto  "
                      />
                    </div>
                  </div>
                  <p className="base__para">
                    Not all investors benefit the same way from trading
                    strategies. However, learning the right techniques opens new
                    opportunities to grow wealth in the stock market.
                  </p>

                  {/* <div className='footer__icons__parent'>
                    <div>
                      <Image
                        src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/footer/awebp.webp'
                        height={800}
                        width={800}
                        alt='footer logo'
                        className='object-cover '
                      />
                    </div>
                    <div>
                      <Image
                        src='https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/footer/play.webp'
                        height={800}
                        width={800}
                        alt='play '
                        className='object-cover '
                      />
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Column 1 - Useful Links */}
              <div>
                <h3 className="footer__menu">Useful Links</h3>
                <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                  <li>
                    <Link href="/about" className="footer__para">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer__para">
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog" className="footer__para">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" className="footer__para">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="footer__para">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-cancellation-policy" className="footer__para">
                      Refund and Cancellation policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="footer__para">
                      Desclaimer
                    </Link>
                  </li>
                 
                  {/* <li>
                    <Link href='/team' className='footer__para'>
                      Our Team
                    </Link>
                  </li> */}

                </ul>
              </div>

              {/* Column 2 - Courses */}
              <div>
                <h3 className="footer__menu">Courses</h3>
                <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
                  <li>
                    <Link href="/technical-analysis" className="footer__para">
                      Basics of Technical Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/derivatives-market" className="footer__para">
                      Basics of Derivatives Market
                    </Link>
                  </li>
                  <li>
                    <Link href="/funda-Module" className="footer__para">
                      Techno - Funda Module
                    </Link>
                  </li>
                  <li>
                    <Link href="/fundamental-analysis" className="footer__para">
                      Basics of Fundamental Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/finance-Program" className="footer__para">
                      Personal Finance Program
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Column 3 - Reach Us */}
              <div>
                <h3 className="footer__menu">Reach Us</h3>
                <div className="space-y-2 md:space-y-2.5 lg:space-y-3">
                  <div className="footer__last__col__icon__parent">
                    <FaPhone className="text-gray-600 text-lg" />
                    <span className="footer__para">+91 9594596051</span>
                  </div>
                  <div className="footer__last__col__icon__parent">
                    <FaWhatsapp className="text-gray-600 text-lg" />
                    <span className="footer__para">+91 9594596051</span>
                  </div>
                  <div className="footer__last__col__icon__parent">
                    <FaEnvelope className="text-gray-600 text-lg" />
                    <span className="footer__para">info@stockcircle.in</span>
                  </div>
                  <div className="footer__last__col__icon__parent">
                    <FaLocationDot className="text-gray-600 text-xl " />
                    <span className="footer__para">
                      S-28, B Wing, Express Zone Mall, Goregaon(E), Mumbai - 400063
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4 className="text-sm  text-left mx-5 lg:text-right py-2 lg:max-w-7xl lg:mx-auto">
            © {year}.{" "}
            <a>
              <span className="font-semibold text-[#4483b8]">Stock Circle</span>
            </a>{" "}
            All rights reserved.
          </h4>
          <h4 className="text-sm  text-left mx-5 lg:text-right lg:max-w-7xl lg:mx-auto">
            Designed & Developed by <a href="https://www.ethicalden.com/" target="_blank">
              <span className="font-semibold text-[#4483b8]">Ethical Den</span>
            </a>{" "}
          </h4>
        </div>
        {/* Disclaimer */}
        <div className="bg-gray-100 py-5 -mb-8.5 mt-5">
          <p className="text-xl text-black  mt-4 px-5 md:px-12 lg:px-16 xl:px-0 max-w-7xl mx-auto">
            <span className="text-red-500 font-medium">
              Disclaimer: {" "}
            </span>{" "}
            StockCircle provides educational courses on finance only and does not offer investment advice, tips, recommendations, or portfolio management services.
          </p>
        </div>
      </footer>

      {/* fixed footer */}
      <div className="">
        <div className="fixed bottom-0 w-full bg-green-100 z-50">
          <div className="max-w-7xl mx-auto  hidden xl:block  ">
            <div className=" flex justify-between items-center py-2.5">
              <div className="fixed__footer__card_parent">
                {/* Phone Number Display */}
                <div className="footer__icons__parent">
                  <FaPhone className="text-gray-600 text-lg" />
                  <span className="sub__para">+91 9594596051</span>
                </div>

                <div className="footer__icons__parent">
                  <MdMarkEmailUnread className="text-gray-600 text-lg" />
                  <span className="sub__para">info@stockcircle.in</span>
                </div>
              </div>

              <div className="fixed__footer__card_parent">
                {/* WhatsApp Button */}
                <div>
                  <a
                    href={`https://wa.me/919594596051`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3  text-black"
                  >
                    <FaWhatsapp className="text-lg text-gray-600" />
                    <span className="sub__para">WhatsApp</span>
                  </a>
                </div>
                <div >
                  <a
                    href="https://www.instagram.com/stockcircle.in?igsh=MTFrenhtYjZ0ZjN5Yw=="
                    target="_blank"
                    className="flex items-center gap-x-3  text-black"
                  >
                    <FaInstagram className="text-gray-600 text-lg" />
                    <span className="sub__para">Instagram</span>
                  </a>
                </div>
                <div >
                  <a
                    href="https://www.linkedin.com/in/mayankkalyani/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    className="flex items-center gap-x-3  text-black"
                  >
                    <FaLinkedin className="text-gray-600 text-lg" />
                    <span className="sub__para">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
