"use client";
import React from "react";
import Tooltip from "../../utilities/Tooltip";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import BaseBtn from "../../utilities/BaseBtn";

export default function About() {
  // const financialContent = [
  //   {
  //     id: 1,
  //     number: '10K+',
  //     title: 'Investment  Management'
  //   },
  //   {
  //     id: 2,
  //     number: '15.5K',
  //     title: 'Wealth Planning and insurance '
  //   },
  //   {
  //     id: 3,
  //     number: '45.5K',
  //     title: 'Corporate Finance Management'
  //   }
  // ]

  return (
    <section>
      <div className="grid lg:grid-cols-[35%_60%] xl:grid-cols-2 gap-x-5 xl:gap-x-10 justify-between items-end">
        <div>
          <Tooltip
            icon={FaUserAlt}
            text="About Us"
            headerText="Leading Financial Solutions "
            colorText="for Your Success"
            // des='Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to help you achieve your financial goals and secure your future.'
          />
        </div>
        {/* <div className='grid md:grid-cols-3 gap-3  lg:gap-5 mt-5 md:mt-10 lg:mt-0'>
          {financialContent?.map((data, i) => (
            <div key={i} className='card__border p-5 rounded-md'>
              <h3 className='small__title mb-1.5'>{data.number}</h3>
              <p className='base__para'>{data.title}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* content area */}

      <div className="section_topSpace">
        <div className="ab__content__container">
          <div className="">
            <Image
              src="https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/about.jpg"
              height={800}
              width={800}
              alt="about us image"
              className="object-cover rounded-md h-full w-full"
            />
          </div>

          <div className="">
            <div className=" mt-5 mb-5 md:mt-10 md:mb-5 lg:mt-0 lg:mb-0">
              <div className=" ab__card__parent card__border">
                <p className="base__para">
                  At StockCircle, we believe money shouldn’t feel like rocket
                  science—or worse, like a gamble. We cut through the noise and
                  make investing simple, fun, and practical. Think of us as your
                  circle where financial wisdom is shared, mistakes are avoided,
                  and wins are celebrated.
                </p>

                <p className="base__para mt-2">
                  Based in Mumbai, we’re a team of CFA, CA, MBA, CMT, and CFP
                  professionals who decided finance shouldn’t be locked behind
                  boring textbooks or jargon-filled lectures. That’s why our
                  live courses are built to keep you hooked, not half-asleep.
                  Our mission? To remove the age-old stigma that “stock market =
                  gambling” and prove it’s actually an art, a science, and a
                  life skill. Whether it’s stocks, derivatives, or the basics of
                  money management, we teach you how to play smart, not lucky.
                  Finance is serious business, sure—but who said it can’t be
                  fun?
                </p>

                {/* <button className='btn__style mt-5 flex gap-x-2 items-center'>
                  {' '}
                  <span>Learn More</span>{' '}
                  <span>
                    <MdArrowOutward />
                  </span>{' '}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
