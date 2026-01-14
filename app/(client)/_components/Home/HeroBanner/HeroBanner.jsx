"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../utilities/Navbar";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import Image from "next/image";
import HeroTooltip from "../../utilities/HeroTooltip";
import { MdArrowOutward } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

export default function HeroBanner() {
  const images = [
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-hero.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-hero.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-hero.png",
  ];

  const handleDownload = async () => {
    const fileUrl =
      "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/bochures/Stockcricle%20Brochure%20Design%20A.pdf";

    // Open PDF in new tab
    window.open(fileUrl, "_blank", "noopener,noreferrer");

    // Fetch and force download
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "StockCircle-Brochure.pdf";
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Navbar />

      <div className="section__gap mt-[20vh]  xl:mt-[10vh]">
        <div className="grid lg:grid-cols-2 items-center gap-x-10 ">
          <div>
            <HeroTooltip
              // icon={FaUserGraduate}
              // text='Live Courses'
              headerText="Concepts to clarity. "
              colorText=" Clarity to confidence ."
              des="Join our interactive live classes and access recorded sessions, guided projects, and personalized mentorship. Gain real-world skills and accelerate your career with courses designed for learners at every level."
            />
            <div>
              <div className="flex gap-x-5 items-center my-10">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center bg-[#4483b8] text-white gap-x-2 btn__style cursor-pointer group"
                >
                  Download
                  <span>
                    <FaDownload />
                  </span>
                </button>

                <Link href="/contact">
                  <button className="inline-flex items-center gap-x-2 btn__style cursor-pointer group">
                    Contact Us
                    <span>
                      <MdArrowOutward />
                    </span>
                  </button>
                </Link>
              </div>

            </div>

            {/* <div className='flex items-center gap-10 mb-16 xl:mb-0 '>
              <div className='flex items-center '>
                {images.map((src, i) => (
                  <div key={i} className='-ml-3 first:ml-0'>
                    <Image
                      width={40}
                      height={40}
                      alt='student image'
                      src={src}
                      className='size-10 rounded-full border-2 border-white object-cover'
                    />
                  </div>
                ))}
              </div>

              <div>
                <h3 className='small__title'>500K +</h3>
                <p className='base__para'>Successfully placed job</p>
              </div>
            </div> */}
          </div>

          <div className="relative hidden lg:block">
            <div>
              <Image
                height={2000}
                width={2000}
                alt="hero image"
                // src="https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/hero-final.png"
                src="https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-team/mayank.png"
                className=" h-[75vh] object-left object-cover  "
              />
            </div>
            <div className="absolute top-3/4 right-[5%] -translate-y-1/2">
              <div className="backdrop-blur-md bg-white/10  shadow-xl rounded-2xl p-6 w-72 text-white">
                {/* Icon */}
                {/* <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[#2AA169]/50 text-white mb-4'>
                  <FaGraduationCap className='w-6 h-6' />
                </div> */}

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  Completed Batches
                </h3>

                {/* Number / Stat */}
                <p className="text-3xl font-bold mb-2">350 +</p>

                {/* Short Description */}
                <p className="text-sm text-white/80">
                  Students successfully completed our courses and advanced their
                  careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="   bg-gradient-to-l from-green-300 via-[#4483b8] to-green-300">
        <div className="text-white max-w-7xl mx-auto  py-5 ">
          <Marquee>
            350+ live batches completed 1850+ students trained 4.7/5 average
            rating 96% course completion rate
          </Marquee>
        </div>
      </div>
    </div>
  );
}
