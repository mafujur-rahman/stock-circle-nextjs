"use client";
import React from "react";
import Tooltip from "../../utilities/Tooltip";
import { BsStack } from "react-icons/bs";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { SiBetterstack } from "react-icons/si";
import { SiSololearn } from "react-icons/si";
import { SiGraphite } from "react-icons/si";
import { GiCroissantsPupil } from "react-icons/gi";
import BaseBtn from "../../utilities/BaseBtn";
import { IoAnalyticsOutline } from "react-icons/io5";
import { SiMarketo } from "react-icons/si";
import { VscFileSubmodule } from "react-icons/vsc";
import { AiOutlineDropbox } from "react-icons/ai";

export default function OurCourses() {
  return (
    <section>
      <div className="text-center max-w-3xl mx-auto ">
        <Tooltip
          icon={BsStack}
          text="Our Offers"
          headerText="What are we "
          colorText="offering"
          des="Learn from industry professionals with our comprehensive trading courses, investment strategies, and financial education programs designed to build your expertise and confidence in the markets."
        />
      </div>

      {/* our courses cards */}

      <div className=" course__container  section_topSpace">
        {/* left first card */}
        <div className="card__border course__card__parent">
          <h3 className="small__title course__card__title">
            <span className="course__card__icon card__border">
              <IoAnalyticsOutline className="arrow__color" />{" "}
            </span>{" "}
            Basics of Technical Analysis
          </h3>
          <p className="base__para">
            Study historical price and volume data to forecast future market
            movements and make trading decisions. 100% placement support, 950+
            students enrolled .
          </p>

          <div className="mt-5">
            <BaseBtn
              text="Join Now"
              icon={MdArrowOutward}
              link="/technical-analysis"
            />
          </div>
        </div>
        {/* left second card */}
        <div className="card__border course__card__parent">
          <h3 className="small__title course__card__title">
            <span className="course__card__icon card__border">
              <SiMarketo className="arrow__color" />{" "}
            </span>{" "}
            Basics of Derivatives Market
          </h3>
          <p className="base__para">
            Use financial instruments like futures, options, forwards, and swaps
            to manage risk or speculate on price movements . 100% placement
            support, 1300+ students enrolled .
          </p>

          <div className="mt-5">
            <BaseBtn
              text="Join Now"
              icon={MdArrowOutward}
              link="/derivatives-market"
            />
          </div>
        </div>

        <div className="card__border course__card__parent">
          <h3 className="small__title course__card__title">
            <span className="course__card__icon card__border">
              <VscFileSubmodule className="arrow__color" />{" "}
            </span>{" "}
            Techno - Funda Module
          </h3>
          <p className="base__para">
            Combine technical analysis (studying price charts and indicators)
            with fundamental analysis (evaluating a company's financial health)
            to make informed trading and investment decisions. 100% placement
            support, 700+ students enrolled .
          </p>

          <div className="mt-5">
            <BaseBtn
              text="Join Now"
              icon={MdArrowOutward}
              link="/funda-Module"
            />
          </div>
        </div>
      </div>

{/* new aded h sd*/}
      <div className="max-w-[80%]  mx-auto mt-5 grid xl:grid-cols-2 gap-5 ">
        <div className="card__border course__card__parent">
          <h3 className="small__title course__card__title">
            <span className="course__card__icon card__border">
              <AiOutlineDropbox className="arrow__color" />{" "}
            </span>{" "}
            Basics of Fundamental Analysis
          </h3>
          <p className="base__para">
            Evaluate a company's intrinsic value by studying its financial
            health, economic environment, and industry to make informed
            investment decisions. Master long term investments, 300+ students
            enrolled
          </p>

          <div className="mt-5">
            <BaseBtn
              text="Join Now"
              icon={MdArrowOutward}
              link="/fundamental-analysis"
            />
          </div>
        </div>
        <div className="card__border course__card__parent">
          <h3 className="small__title course__card__title">
            <span className="course__card__icon card__border">
              <SiGraphite className="arrow__color" />{" "}
            </span>{" "}
            Personal Finance Program
          </h3>
          <p className="base__para">
            Manage their money effectively to achieve financial stability and
            meet their life goals. 800+ students enrolled, make money work for
            you .
          </p>

          {/* <ul className="base__list__para course__list__parent">
              <li>100% Job Support</li>
              <li>3,000+ Students Enrolled</li>
            </ul> */}

          <div className="mt-5">
            <BaseBtn
              text="Join Now"
              icon={MdArrowOutward}
              link="/finance-Program"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
