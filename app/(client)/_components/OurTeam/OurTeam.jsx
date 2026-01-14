"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUserAlt, FaLinkedin } from "react-icons/fa";
import Tooltip from "../utilities/Tooltip";





const teamMembers = [
  {
    name: "Mayank Kalyani",
    role: "Founder and CEO",
    image: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-team/mayank.jpg",
    description: "Leads the company’s vision, strategy, and long-term growth.",
    linkedin: "https://www.linkedin.com/in/mayankkalyani/",
  },
  {
    name: "Sapna Lakhotia",
    role: "Article Assistant",
    image: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-team/shapna.jpg",
    description:
      "Oversees financial planning, budgeting, and smooth fiscal operations.",
    linkedin: "linkedin.com/in/sapna-lakhotia-b5b817220",
  },
  {
    name: "Shreya Mehta",
    role: "Marketing Manager",
    image: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-team/sreya.jpg",
    description:
      "Drives brand presence through strategic social media campaigns.",
    linkedin: "https://www.linkedin.com/in/shreyamehta17/",
  },
  {
    name: "Saral Kumar",
    role: "Management Supervisor",
    image: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-team/saral.jpg",
    description:
      "Shapes the brand identity and manages public relations initiatives .",
    linkedin: "https://www.linkedin.com/in/saralkumar/",
  },
  {
    name: "Prashant Bhutra",
    role: "Social Media Specialist",
    image: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/stock-team/prosanth.jpg",
    description:
      "Creates engaging content and supports daily social media execution.",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Dinesh Gupta",
    role: "Head of Accounts",
    image: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/hero-final.png",
    description:
      "Manages financial records, compliance, and company accounting systems.",
    linkedin: "https://linkedin.com/",
  },
];

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, role, image, linkedin } = teamMembers[currentIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden items-center ">
        {/* Left Side: Team List */}
        <div>
          <div className="max-w-xl mb-6 lg:mb-10">
            <Tooltip
              icon={FaUserAlt}
              text="Meet Our Team"
              headerText="Dedicated experts"
              colorText="with you every step"
              des="Discover our comprehensive financial services, expert investment strategies, and personalized wealth management solutions designed to."
            />
          </div>

          <div className="lg:block hidden">
            <div className="flex  sm:grid-cols-2 lg:flex xl:grid xl:grid-cols-2 gap-5 overflow-x-auto order-2 xl:overflow-visible scrollbar-hide snap-x snap-mandatory">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`p-4 cursor-pointer transition rounded-xl min-w-[250px] snap-center ${
                    index === currentIndex
                      ? "border border-black/10"
                      : "border hover:border-black/10 border-black/10 lg:border-black/5 text-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex items-center gap-x-2.5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      height={500}
                      width={500}
                      className={`size-16 object-cover object-top transition ${
                        index === currentIndex
                          ? "border-2 rounded-full p-1 border-[#4483B8]"
                          : "border-2 rounded-full p-1 border-black/5"
                      }`}
                    />
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-semibold ${
                          index === currentIndex
                            ? "text-[#4483B8]"
                            : "text-gray-500"
                        }`}
                      >
                        {member.name}
                      </h3>
                      <p
                        className={`text-sm sm:text-base ${
                          index === currentIndex
                            ? "text-gray-600"
                            : "text-gray-400"
                        }`}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Responsive team list */}
        <div className=" block lg:hidden order-2">
          <div className="flex  sm:grid-cols-2 lg:flex xl:grid xl:grid-cols-2 gap-5 overflow-x-auto  xl:overflow-visible scrollbar-hide snap-x snap-mandatory">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer transition rounded-xl min-w-[250px] snap-center ${
                  index === currentIndex
                    ? "border border-black/10"
                    : "border hover:border-black/10 border-black/10 lg:border-black/5 text-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center gap-x-2.5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={500}
                    width={500}
                    className={`size-16 object-cover object-top transition ${
                      index === currentIndex
                        ? "border-2 rounded-full p-1 border-[#4483B8]"
                        : "border-2 rounded-full p-1 border-black/5"
                    }`}
                  />
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-semibold ${
                        index === currentIndex
                          ? "text-[#4483B8]"
                          : "text-gray-500"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${
                        index === currentIndex
                          ? "text-gray-600"
                          : "text-gray-400"
                      }`}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Highlighted Member (on top for mobile/tablet) */}
        <div className="relative w-full  h-[400px] md:h-[500px] lg:h-[400px] xl:h-[600px] rounded-xl overflow-hidden order-1 lg:order-none">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover object-top"
          />

          {/* Smooth Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent flex items-end p-6 sm:p-8 transition duration-700 ease-in-out">
            <div className="text-left text-[#4483B8]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                {name}
              </h2>
              <h4 className="text-base sm:text-lg text-[#2AA169] font-medium">
                {role}
              </h4>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-[#4483B8] text-white rounded-full hover:bg-[#2A5F85] transition cursor-pointer"
              >
                <FaLinkedin className="text-lg" />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
