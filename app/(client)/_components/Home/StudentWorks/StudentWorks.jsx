"use client";
import React from "react";
import Tooltip from "../../utilities/Tooltip";
import { FaUserTie } from "react-icons/fa";

import Marquee from "react-fast-marquee";

export default function StudentWorks() {
  const images = [
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/client-collaboration/Arbolus%20Technologies%20Pvt%20Ltd.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/BNIFinal.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/handson.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/client-collaboration/Emveebee%20Media%20Pvt%20Ltd.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/client-collaboration/Stockcircle-er-collaboration-logo.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/client-collaboration/Motilal%20Oswal%20Wealth%20Management.png",
    "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/client-collaboration/mks.png"
  ];

  return (
    <div>
      <div className="text-center max-w-3xl mx-auto ">
        <Tooltip
          icon={FaUserTie}
          text="Client Collaboration"
          headerText="Collaborating with industry,  "
          colorText=" with leaders"
          des="Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to help you achieve your financial goals and secure your future."
        />
      </div>

      <div className="section_topSpace space-y-5 lg:space-y-8">
        <Marquee
          direction="left"
          speed={40}
          gradient={true}
          gradientColor="#ffff"
          pauseOnHover={true}
          autoFill
        >
          {images.map((img, i) => (
            <div className="st__works__row__parent">
              <img
                key={`row1-${i}`}
                src={img}
                alt={`student-left-${i}`}
                className="st__works__row__img"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
