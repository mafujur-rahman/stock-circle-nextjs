"use client";
import React from "react";
import Tooltip from "../../utilities/Tooltip";
import { FaTrophy } from "react-icons/fa6";

export default function CTA() {
  // Statistics data
  const statsData = [
    {
      id: 1,
      number: "1850+",
      title: "Students Trained",
      description: "Empowering learners with industry-ready skills.",
    },
    {
      id: 2,
      number: "4.7/5",
      title: "Average Rating",
      description: "Highly rated for quality teaching and support.",
    },
    {
      id: 3,
      number: "350+",
      title: "Batches Completed",
      description: "Consistently delivering successful learning journeys.",
    },
    {
      id: 4,
      number: "10+",
      title: "Years of Training & Mentorship",
      description: "A decade of guiding learners toward growth.",
    },
  ];

  return (
    <div className="gradient__color">
      <div className="cta__container">
        <div>
          <Tooltip
            icon={FaTrophy}
            text="Our Records"
            headerText="From Classroom to "
            colorText=" Closing Bell"
            des="Cohort completion, consistency stats, and case studies that map learning to results."
          />
        </div>

        <div>
          <div className="cta__card__parent">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="text-center text-white card__border p-5 rounded-md "
              >
                {/* Number */}
                <div className="sub__title !text-[#2AA169]">{stat.number}</div>

                {/* Title */}
                <h3 className="base__para mb-2">{stat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
