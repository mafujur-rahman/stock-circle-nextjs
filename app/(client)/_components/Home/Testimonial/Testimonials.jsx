"use client";
import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import Tooltip from "../../utilities/Tooltip";
import { IoIosPeople } from "react-icons/io";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("KajalAgarwal");

  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = {
    KajalAgarwal: {
      name: "Kajal Agarwal",
      position: "StockCircle Student",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text:
        "I always thought derivatives sirf big traders ke liye hota hai. StockCircle ke course ke baad samajh aaya ki issue derivatives ka nahi, approach ka hota hai. Risk management aur position sizing ne meri sabse badi galti sudhaar di. Losses control mein aaye aur confidence kaafi better hua.",
      stats: [],
    },

    CharviKhandelwal: {
      name: "Charvi Khandelwal",
      position: "StockCircle Student",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text:
        "This derivatives course gave me much-needed structure. Instead of random option buying, I now plan trades with defined risk and exits. Mayank’s way of explaining probabilities and discipline really changed how I look at trades.",
      stats: [],
    },

    SandeepPai: {
      name: "Sandeep Pai",
      position: "StockCircle Student",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text:
        "Yahan sirf strategies nahi sikhayi, mindset bhi sikhaya. Pehle har move pe trade karta tha, ab sirf jab setup banta hai tab entry leta hoon. StockCircle ke sessions ke baad drawdowns kam hue hain aur clarity kaafi improve hui hai.",
      stats: [],
    },

    PriyaLakhotia: {
      name: "Priya Lakhotia",
      position: "StockCircle Student",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text:
        "This course connected all the dots for me. Fundamentals helped with stock selection, technicals helped with timing, and derivatives helped with risk control. For the first time, my decisions feel logical instead of reactive.",
      stats: [],
    },

    BhavyaSuman: {
      name: "Bhavya Suman",
      position: "StockCircle Student",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text:
        "Technical analysis pehle bas indicators aur lines lagana lagta tha. Is course ne sikhaya ki price aur volume ko kaise read karte hain. Ab charts dekh kar lagta hai ki market ki story samajh aa rahi hai, guess nahi.",
      stats: [],
    },

    AkashVanwari: {
      name: "Akash Vanwari",
      position: "StockCircle Student",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text:
        "What I liked most was the simplicity. Instead of cluttered charts, Mayank focuses on structure, trends, and key levels. My trades are fewer now, but far more planned and disciplined.",
      stats: [],
    },

    TeenaShetty: {
      name: "Teena Shetty",
      position: "StockCircle Community Member",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text:
        "One of the best parts of learning with StockCircle is the community. Every Tuesday, the session called ‘Market Kya Lag Raha Hai’ feels less like a lecture and more like an open discussion where real market doubts are addressed honestly. The support from Mayank and the StockCircle team goes beyond just stock markets. It genuinely feels like a long-term learning ecosystem, not just a course.",
      stats: [],
    },
  };


  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="">
      <div>
        <div className="text-center max-w-3xl mx-auto ">
          <Tooltip
            icon={IoIosPeople}
            text="Testimonial"
            headerText="Real Students. Real "
            colorText=" Outcomes ."
            des="From first chart to first profit, they did the work—and it shows."
          />
        </div>
      </div>

      <div className="md:bg-white md:py-5 md:px-10 lg:px-10   lg:py-14 xl:px-0 rounded-md section_topSpace ">
        {/* Tabs */}
        <div
          ref={scrollRef}
          className="tes__container scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {Object.keys(testimonials).map((company) => {
            const testimonial = testimonials[company];
            return (
              <button
                key={company}
                onClick={() => setActiveTab(company)}
                className={`tes__tab__parent transition cursor-pointer ${activeTab === company
                    ? "bg-[#2AA169] !text-white"
                    : "bg-green-100 text-gray-700 hover:bg-green-200"
                  }`}
              >
                <span className=" whitespace-nowrap">{testimonial.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="tes__content__parent">
          {/* Testimonial card */}
          <div className="tes__card__parent card__border">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeTab].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="base__para mb-4">{testimonials[activeTab].text}</p>
            <div className="flex items-center gap-3">
             
              <div>
                <h4 className="sub__para">{testimonials[activeTab].name}</h4>
                {/* <p className="text-sm text-gray-600">
                  {testimonials[activeTab].position}
                </p> */}
              </div>
            </div>
          </div>

          {/* Stats card */}
          {/* <div className="tes__card__parent card__border flex flex-col justify-center">
            {testimonials[activeTab].stats.map((stat, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <p className="sub__title">{stat.value}</p>
                <p className="base__para">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
