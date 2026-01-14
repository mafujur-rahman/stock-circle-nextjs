import {
  RiBarChartBoxLine,
  RiBriefcase4Line,
  RiMoneyDollarCircleLine,
  RiPlayCircleLine,
  RiRefreshLine,
  RiNotification3Line,
  RiBook2Line,
  RiChat1Line,
  RiStackLine,
  RiShieldCheckLine,
  RiStarLine,
  RiCheckboxCircleLine,
  RiMedalLine,
  RiSmartphoneLine,
} from "react-icons/ri";
import { MdOutlineJoinFull } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { BsFillTrophyFill, BsStack } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";

const coursePagesData = {
  technicalAnalysis: {
    slug: "technical-analysis",

    // Hero Section
    heroBanner: {
      btnText: "Upskill Yourself",
      title: "Basics of technical analysis",
      subtitle: "The gateway to everything in marker (ECG of the markets)",
      highlights: [
        "50+ hours training",
        "Expert mentors with 9+ years of experience",
        "Real world data sets and forever handholding",
        "Placement assistance with top recruiters",
      ],
      bannerImg:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/07.jpg",
      ctas: [
        {
          label: "Download Brochure",
          href: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/bochures/Stockcricle%20Brochure%20Basics%20of%20Technical%20Analysis.pdf",
          type: "secondary",
          icon: FaDownload,
        },
      ],
    },

    curriculamData: {
      mainTitle: "Financial Modeling ",
      mainDescription: "Waiting for description",
      textColor: "Course Curriculum",
      text: "Course",
      icon: BsStack,
      ytLink: "https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ",
      faqs: [
        {
          title: "What is technical analysis?",
          answer: [
            "A method of analyzing price movements and market trends",
            "Uses charts, patterns, and indicators to predict future price direction",
            "Focuses on market psychology and historical price behavior",
          ],
        },
        {
          title:
            "How is technical analysis different from fundamental analysis?",
          answer: [
            "Technical analysis studies price charts and market trends",
            "Fundamental analysis looks at company financials, economy, and real value",
            "Technical is short-term focused, fundamental is long-term focused",
          ],
        },
        {
          title: "What is trading and investing psychology?",
          answer: [
            "Understanding emotions and mindset while making financial decisions",
            "Helps avoid fear, greed, and impulsive mistakes",
            "Improves discipline, patience, and risk management",
          ],
        },
        {
          title: "What are candlesticks?",
          answer: [
            "A chart type that shows price movement within a specific time period",
            "Each candlestick shows open, high, low, and close prices",
            "Useful for spotting market patterns and trader sentiment",
          ],
        },
        {
          title: "What are Japanese candlesticks?",
          answer: [
            "Traditional candlestick charting technique developed in Japan",
            "Provides visual patterns to identify trend reversals and continuation",
            "Most commonly used in modern trading platforms",
          ],
        },
        {
          title: "What is Dow Theory?",
          answer: [
            "One of the earliest principles of market trend analysis",
            "States that markets move in trends: uptrend, downtrend, or sideways",
            "Helps traders understand market cycles and big movements",
          ],
        },
        {
          title: "What is support and resistance?",
          answer: [
            "Support is a price level where demand prevents further decline",
            "Resistance is a level where selling pressure stops price from rising",
            "Key levels for planning entry and exit points",
          ],
        },
        {
          title: "What is money management?",
          answer: [
            "Managing risk and protecting capital while trading",
            "Includes setting stop-loss, position sizing, and risk-reward ratio",
            "Helps traders survive long-term and avoid big losses",
          ],
        },
        {
          title: "What are candlestick patterns?",
          answer: [
            "Specific shapes formed by candlesticks that signal market direction",
            "Used to predict reversals or continuation of trends",
            "Examples: Doji, Hammer, Engulfing, Shooting Star",
          ],
        },
        {
          title: "What are chart and price patterns?",
          answer: [
            "Repeated shapes on charts that indicate market behavior",
            "Used to forecast breakout or trend continuation",
            "Examples: Head & Shoulders, Double Top, Triangle",
          ],
        },
        {
          title: "What are indicators and oscillators?",
          answer: [
            "Technical tools used to measure price trends and momentum",
            "Indicators show trend direction (e.g., Moving Average)",
            "Oscillators show overbought/oversold zones (e.g., RSI, MACD)",
          ],
        },
      ],
    },

    // Career Scope Section
    modelingCourse: {
      mainTitle: "Financial Modeling Career ",
      mainDescription:
        "Let’s get to know how this qualification can shape your future and career.",
      textColor: "Scope & Salary",
      text: "Banking Career",
      icon: BsFillTrophyFill,
      cta: { label: "Learn More", href: "#" },
      courseData: [
        {
          key: "growth",
          title: "Growth & Recognition",
          description:
            "Financial Modeling is the most recognized and growth-oriented core finance job due to the dynamic nature of the work.",
          icon: RiBarChartBoxLine,
        },
        {
          key: "profiles",
          title: "Job Profiles",
          description:
            "After completing our course, you can get a core finance job in Investment Banking, Equity Research, Valuations, etc.",
          icon: RiBriefcase4Line,
        },
        {
          key: "salary",
          title: "Median Salary",
          description:
            "Although compensation depends on experience and education, the median CTC of an Investment Banker amounts to INR 12 LPA.",
          icon: RiMoneyDollarCircleLine,
        },
      ],
    },

    faq: {
      mainTitle: "Basic Technical  ",
      mainDescription:
        "Master the art of reading the market through charts and patterns to trade confidently and spot opportunities early",
      textColor: "Analysis",
      text: "FAQs",
      icon: FaQuestionCircle,
      items: [
        {
          title: "What is technical analysis?",
          description:
            "Technical analysis studies price charts, indicators, and market patterns to predict future price movements.",
        },
      
        {
          title: "Who is this program for?",
          description:
            "This program is ideal for students, working professionals, beginners, traders, and anyone interested in finance or the stock market.",
        },
        {
          title: "What salary is expected after placements?",
          description:
            "Freshers typically start between ₹3–6 LPA depending on skills, performance, and the company hiring.",
        },
        {
          title: "What kind of jobs can I get?",
          description:
            "You can apply for roles like Equity Research Analyst, Financial Analyst, Trader, Risk Analyst, Investment Advisor, and Portfolio Assistant.",
        },
        {
          title: "Are there any prerequisites for this course?",
          description:
            "No prior experience is required. Basic computer knowledge and willingness to learn are enough.",
        },
        {
          title: "What professional courses can be done with this?",
          description:
            "You can pursue CFA, NISM certifications, FRM, CFP, financial modeling, or advanced trading and investment courses.",
        },
      ],
    },

    exclusiveContent: {
      mainTitle: "Exclusive ",
      mainDescription:
        "Unlock Premium Resources: Your Comprehensive Investment Banking Toolkit",
      textColor: "Content Access",
      text: "Content",
      icon: GoFileSubmodule,
      items: [
        {
          title: "Investment Banking Handbook",
          description:
            "A comprehensive guide covering the A-Z of investment banking, from fundamental concepts to advanced strategies.",
          icon: RiBook2Line,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Financial Model Templates",
          description:
            "Ready-to-use Excel templates for various financial modeling scenarios, designed by industry veterans for real-world applications.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App With Up-to-Date Resources",
          description:
            "Our Mobile Application provides instant access to all our study materials, updated regularly to reflect the latest industry trends.",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
    },

    whyUs: {
      mainTitle: "What Makes Us  ",
      mainDescription:
        "Their team elaborated that the motto of  is to ensure whether the student learnt the actual concept, not just from the examination point of view but also from a standpoint of getting a Job in the field of risk. They believe that education extends way beyond the classroom teaching. Hence, They use real life examples, story telling techniques, and softwares to make the students visualize the tough formulas and not just mug them up.",
      textColor: "The Best ?",
      text: "Why Us",
      icon: FaUsers,
      cta: { label: "Learn More", href: "#" },
      items: [
        {
          title: "Fully Practical Approach",
          description:
            "Learn Financial Modeling and valuation from the real-world perspective, not books.",
          icon: RiCheckboxCircleLine,
        },
        {
          title: "Highly Credible Trainers",
          description:
            "Our trainers are Investment Bankers themselves and have extensive experience in core finance.",
          icon: RiShieldCheckLine,
        },
        {
          title: "Most Detailed Curriculum",
          description:
            "Our curriculum is THE MOST detailed across the Investment Banking training industry.",
          icon: RiStarLine,
        },
        {
          title: "100% Placement Assistance",
          description:
            "After the course completion, students get access to our placement network of 200+ recruiters.",
          icon: RiMedalLine,
        },
      ],
    },

    programHighlights: {
      mainTitle: "Program Highlights of Our ",
      textColor: "Financial Modeling Course data",
      text: "Financial",
      icon: RiPlayCircleLine,
      mainDescription:
        "Here are a few features of our coaching which will help you breeze through Financial Modeling.",

      items: [
        {
          title: "180+ Hours Videos",
          description:
            "Comprehensive video content covering all aspects of Financial Modeling.",
          icon: RiPlayCircleLine,
        },
        {
          title: "Revision & Backup Classes",
          description:
            "Extra classes to revise concepts and make up for missed sessions.",
          icon: RiRefreshLine,
        },
        {
          title: "Relevant Industry Updates",
          description:
            "Stay aligned with the latest market practices and industry insights.",
          icon: RiNotification3Line,
        },
        {
          title: "Exhaustive Question Banks",
          description:
            "Extensive practice questions for concept clarity and exam prep.",
          icon: RiBook2Line,
        },
        {
          title: "Unlimited Doubt Sessions",
          description: "Get your doubts resolved with unlimited Q&A support.",
          icon: RiChat1Line,
        },
        {
          title: "Case Studies Approach",
          description: "Real-life case studies to bridge theory and practice.",
          icon: RiStackLine,
        },
      ],
      otherFeatures: "10+ Other Features",
    },
  },

  derivativesMarket: {
    slug: "derivatives-market",

    heroBanner: {
      btnText: "Advance Your Skills",
      title: "Basics of Derivatives Market",
      subtitle: "Waiting for description",
      highlights: [
        "60 days duration",
        "SEBI registered mentors",
        "100% placement guidance",
        "Real case data sets",
        "Forever hand holding",
      ],
      bannerImg:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/risk.jpg",
      ctas: [
        {
          label: "Download Brochure",
          href: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/bochures/Stockcricle%20Brochure%20Basics%20of%20Derivatives%20Market.pdf",
          type: "secondary",
          icon: FaDownload,
        },
      ],
    },

    modelingCourse: {
      mainTitle: "Risk Management Career ",
      mainDescription:
        "Explore career opportunities and growth potential in risk management.",
      textColor: "Scope & Salary",
      text: " Scope & Salary",
      icon: BsFillTrophyFill,
      cta: { label: "Learn More", href: "#" },
      courseData: [
        {
          key: "growth",
          title: "Growth & Recognition",
          description:
            "Risk management professionals are increasingly sought after due to global financial volatility.",
          icon: RiBarChartBoxLine,
        },
        {
          key: "profiles",
          title: "Job Profiles",
          description:
            "Careers include Risk Analyst, Compliance Manager, and Credit Risk Specialist.",
          icon: RiBriefcase4Line,
        },
        {
          key: "salary",
          title: "Median Salary",
          description:
            "The average salary for a Risk Manager in India ranges from INR 10-15 LPA depending on experience.",
          icon: RiMoneyDollarCircleLine,
        },
      ],
    },
    curriculamData: {
      mainTitle: "Financial Modeling ",
      mainDescription:
        "Our curriculum is the most detailed, concept driven and Industry relevant.Investing grows wealth over the long term Investments carry higher risk but higher potential returns",
      textColor: "Course Curriculum",
      text: "Course",
      icon: BsStack,
      ytLink: "https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ",
      faqs: [
        {
          title: "What is the difference between saving and investing?",
          answer: [
            "Saving keeps money safe for short-term needs",
            "Investing grows wealth over the long term",
            "Savings are usually low-risk (bank deposits)",
            "Investments carry higher risk but higher potential returns",
          ],
        },
        {
          title: "What is compound interest?",
          answer: [
            "Interest calculated on the initial principal plus accumulated interest",
            "Helps money grow faster over time",
            "Common in savings accounts and reinvested dividends",
          ],
        },
        {
          title: "What are stocks and bonds?",
          answer: [
            "Stocks represent ownership in a company",
            "Bonds are loans you give to governments or corporations",
            "Stocks are generally higher risk, higher reward",
            "Bonds are lower risk, with fixed interest payments",
          ],
        },
        {
          title: "What is diversification in investing?",
          answer: [
            "Spreading investments across assets to reduce risk",
            "Prevents losses from being concentrated in one area",
            "Commonly done with stocks, bonds, real estate, and mutual funds",
          ],
        },
        {
          title: "What is a mutual fund?",
          answer: [
            "A pool of money from multiple investors",
            "Managed by professionals who buy a diversified portfolio",
            "Good option for beginners seeking diversification",
          ],
        },
        {
          title: "What is the difference between IRA and 401(k)?",
          answer: [
            "IRA is an individual retirement account, opened by anyone",
            "401(k) is offered by employers with contribution matching",
            "Both provide tax advantages for retirement savings",
          ],
        },
        {
          title: "What is risk tolerance in investing?",
          answer: [
            "An investor’s ability to handle losses",
            "Higher risk tolerance allows investing in stocks",
            "Lower risk tolerance leans towards bonds or savings",
          ],
        },
        {
          title: "What is an emergency fund?",
          answer: [
            "Cash set aside for unexpected expenses",
            "Covers 3–6 months of living costs",
            "Protects against job loss or medical emergencies",
          ],
        },
        {
          title: "What is inflation and why does it matter?",
          answer: [
            "Inflation is the rise in the cost of goods and services",
            "Reduces purchasing power over time",
            "Investments can help beat inflation",
          ],
        },
        {
          title: "What is the difference between gross income and net income?",
          answer: [
            "Gross income is total earnings before deductions",
            "Net income is what remains after taxes and expenses",
            "Net income reflects actual take-home pay",
          ],
        },
      ],
    },

    exclusiveContent: {
      mainTitle: "Exclusive Content access ",
      mainDescription:
        "Unlock specialized risk management tools and case studies.",
      textColor: "Management",
      text: "content",
      icon: GoFileSubmodule,

      items: [
        {
          title: "Risk Analysis Handbook",
          description:
            "Guides covering quantitative and qualitative risk assessment methods.",
          icon: RiBook2Line,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Stress Test Templates",
          description:
            "Ready-to-use models for stress testing and scenario analysis.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App With  Resources",
          description: "Our Mobile Application provides trends.",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
    },

    faq: {
      mainTitle: "Basic of Derivatives ",
      mainDescription:
        "Clear answers to help you understand our Finance Program, its career opportunities, and what you can expect after enrollment.",
      textColor: "Market",
      text: "FAQs",
      icon: FaQuestionCircle,
      items: [
       
        
        {
          title: "What is the derivatives market?",
          description:
            "The derivatives market involves trading contracts like futures and options, used for hedging, speculation, and risk management.",
        },
        
     
        {
          title: "Who is this program for?",
          description:
            "Understand the market where traders buy and sell contracts like futures and options instead of actual shares, helping reduce risk and enhance returns.",
        },
        {
          title: "What salary is expected after placements?",
          description:
            "Freshers typically start between ₹3–6 LPA depending on skills, performance, and the company hiring.",
        },
        {
          title: "What kind of jobs can I get?",
          description:
            "You can apply for roles like Equity Research Analyst, Financial Analyst, Trader, Risk Analyst, Investment Advisor, and Portfolio Assistant.",
        },
        {
          title: "Are there any prerequisites for this course?",
          description:
            "No prior experience is required. Basic computer knowledge and willingness to learn are enough.",
        },
        {
          title: "What professional courses can be done with this?",
          description:
            "You can pursue CFA, NISM certifications, FRM, CFP, financial modeling, or advanced trading and investment courses.",
        },
      ],
    },

    programHighlights: {
      mainTitle: "Program Highlights of Our ",
      textColor: "  Risk Management Course",
      mainDescription:
        "benefitsHere are a few features of our coaching which will help you breeze through Financial Modeling",

      text: "Risk Management",
      icon: AiOutlineIssuesClose,

      items: [
        {
          title: "120+ Hours of Classes",
          description: "Extensive practical learning.",
          icon: RiPlayCircleLine,
        },
        {
          title: "Industry Expert Mentors",
          description: "Learn from experienced professionals.",
          icon: RiStarLine,
        },
      ],
      otherFeatures: "5+ Other Features",
    },
  },

  fundamentalAnalysis: {
    slug: "fundamental-analysis",

    heroBanner: {
      btnText: "Step into IB",
      title: "Basics of Fundamental Analysis",
      subtitle: "Waiting for descriptions",
      highlights: [
        "15 days duration",
        "SEBI registered mentors",
        "Real case data sets",
        "Practical use case scenarios",
      ],
      bannerImg:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/144558.jpg",
      ctas: [
        {
          label: "Download Brochure",
          href: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/bochures/Stockcricle%20Brochure%20Basics%20of%20Fundamental%20Analysis.pdf",
          type: "secondary",
          icon: FaDownload,
        },
      ],
    },

    curriculamData: {
      mainTitle: "Financial Modeling ",
      mainDescription:
        "Our curriculum is the most detailed, concept driven and Industry relevant.Investing grows wealth over the long term Investments carry higher risk but higher potential returns",
      textColor: "Course Curriculum",
      text: "Course",
      icon: BsStack,
      ytLink: "https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ",
      faqs: [
        {
          title: "What is fundamental analysis?",
          answer: [
            "A method of evaluating a company’s real value (intrinsic value)",
            "Studies financial statements, business model, and future growth potential",
            "Used to find whether a stock is undervalued or overvalued",
          ],
        },
        {
          title:
            "How is fundamental analysis different from technical analysis?",
          answer: [
            "Fundamental analysis studies company financials and economic factors",
            "Technical analysis studies price charts, trends, and patterns",
            "Fundamental is long-term focused, technical is short- to medium-term focused",
          ],
        },
        {
          title: "What are micro and macro economic factors?",
          answer: [
            "Micro factors include company earnings, products, management, and competition",
            "Macro factors include economy, inflation, interest rates, and global events",
            "Both influence stock performance and investor decisions",
          ],
        },
        {
          title: "Is fundamental analysis for trading or investing?",
          answer: [
            "Mostly used for long-term investing",
            "Helps identify strong companies for wealth creation",
            "Short-term traders rely more on technical analysis",
          ],
        },
        {
          title: "How to read a company?",
          answer: [
            "Study revenue, profit, and cash flow growth",
            "Check debt levels, balance sheet strength, and management quality",
            "Analyze industry position, competitive advantages, and future plans",
          ],
        },
        {
          title: "What are con-calls (conference calls)?",
          answer: [
            "Quarterly calls where company management talks to investors",
            "Discuss performance, future plans, risks, and opportunities",
            "Useful for understanding real business conditions",
          ],
        },
        {
          title: "What are IPOs, NFOs, and NPOs? What is the grey market?",
          answer: [
            "IPO: Initial Public Offering — when a company first sells shares to the public",
            "NFO: New Fund Offer — when a mutual fund launches a new scheme",
            "NPO: Non-performing Offering (rare term) — usually refers to unlisted offerings",
            "Grey Market: Informal market where IPO shares are traded before official listing",
          ],
        },
        {
          title: "What are common jargons in fundamental analysis?",
          answer: [
            "P/E Ratio: Price divided by earnings, shows valuation",
            "ROE: Return on Equity, shows profitability",
            "Market Cap: Total value of the company",
            "Dividend Yield: Cash given back to shareholders",
            "EPS: Earnings per share, shows company earning power",
          ],
        },
      ],
    },

    exclusiveContent: {
      mainTitle: "Exclusive content access",
      mainDescription:
        "Unlock specialized risk management tools and case studies.",
      textColor: "Management",
      text: "content",
      icon: GoFileSubmodule,

      items: [
        {
          title: "Risk Analysis Handbook",
          description:
            "Guides covering quantitative and qualitative risk assessment methods.",
          icon: RiBook2Line,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Stress Test Templates",
          description:
            "Ready-to-use models for stress testing and scenario analysis.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App With  Resources",
          description: "Our Mobile Application provides trends.",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
    },

    modelingCourse: {
      mainTitle: "Investment Banking Career, ",
      mainDescription:
        "Prepare for one of the most lucrative careers in finance.",
      textColor: "Scope & Salary",
      text: "Banking Career",
      icon: BsFillTrophyFill,
      cta: { label: "Learn More", href: "#" },
      courseData: [
        {
          key: "growth",
          title: "Growth & Recognition",
          description:
            "Investment banking remains the top choice for ambitious finance professionals worldwide.",
          icon: RiBarChartBoxLine,
        },
        {
          key: "profiles",
          title: "Job Profiles",
          description: "Roles include Analyst, Associate, and M&A Specialist.",
          icon: RiBriefcase4Line,
        },
        {
          key: "salary",
          title: "Median Salary",
          description:
            "Entry-level analysts can earn INR 15-20 LPA with global growth potential.",
          icon: RiMoneyDollarCircleLine,
        },
      ],
    },

    faq: {
      mainTitle: "Basics of Fundamental ",
      mainDescription:
        "Learn how to evaluate a company's true worth by studying its financial performance, growth potential, and economic environment",
      textColor: "Analysis",
      text: "FAQs",
      icon: FaQuestionCircle,
      items: [
        
        {
          title: "What is fundamental analysis?",
          description:
            "Fundamental analysis evaluates a company's financials, growth potential, and economic factors to determine its true value.",
        },
       
       
       
        {
          title: "Who is this program for?",
          description:
            "This program is ideal for students, working professionals, beginners, traders, and anyone interested in finance or the stock market.",
        },
        {
          title: "What salary is expected after placements?",
          description:
            "Freshers typically start between ₹3–6 LPA depending on skills, performance, and the company hiring.",
        },
        {
          title: "What kind of jobs can I get?",
          description:
            "You can apply for roles like Equity Research Analyst, Financial Analyst, Trader, Risk Analyst, Investment Advisor, and Portfolio Assistant.",
        },
        {
          title: "Are there any prerequisites for this course?",
          description:
            "No prior experience is required. Basic computer knowledge and willingness to learn are enough.",
        },
        {
          title: "What professional courses can be done with this?",
          description:
            "You can pursue CFA, NISM certifications, FRM, CFP, financial modeling, or advanced trading and investment courses.",
        },
      ],
    },

    whyUs: {
      mainTitle: "Why Choose Our Investment ?",
      mainDescription:
        "Their team elaborated that the motto of  is to ensure whether the student learnt the actual concept, not just from the examination point of view but also from a standpoint of getting a Job in the field of risk. They believe that education extends way beyond the classroom teaching. Hence, They use real life examples, story telling techniques, and softwares to make the students visualize the tough formulas and not just mug them up.",
      textColor: "Banking Program",
      text: "Why Us",
      icon: FaUsers,
      cta: { label: "Learn More", href: "#" },
      items: [
        {
          title: "Trainers from Bulge Bracket Banks",
          description: "Mentors from Goldman Sachs, JP Morgan, etc.",
          icon: RiShieldCheckLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
      ],
    },

    programHighlights: {
      mainTitle: "Program of Investment ",
      textColor: "  Banking Course",
      mainDescription:
        "Key program benefitsHere are a few features of our coaching which will help you breeze through Financial Modeling.",
      text: "Investment Banking",
      icon: RiBankFill,
      items: [
        {
          title: "150+ Hours of Live Training",
          description: "Interactive learning with mentors.",
          icon: RiPlayCircleLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Real Deal Case Studies",
          description: "Analyze actual M&A deals.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App  Resources",
          description: "Our Mobile Application provid ",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
      otherFeatures: "8+ Other Features",
    },
  },
  fundaModule: {
    slug: "funda-Module",

    heroBanner: {
      btnText: "Step into IB",
      title: "Techno - funda module ",
      subtitle: "Waiting for descriptions",
      highlights: [
        "30 days duration",
        "SEBI registered mentors",
        "100% placement guidance",
        "Real case data sets",
        "Forever hand holding",
        "Exclusive strategies",
      ],
      bannerImg:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/144558.jpg",
      ctas: [
        {
          label: "Download Brochure",
          href: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/bochures/Stockcricle%20Brochure%20Techno%20-%20Funda%20Module.pdf",
          type: "secondary",
          icon: FaDownload,
        },
      ],
    },

    curriculamData: {
      mainTitle: "Financial Modeling ",
      mainDescription:
        "Our curriculum is the most detailed, concept driven and Industry relevant.Investing grows wealth over the long term Investments carry higher risk but higher potential returns",
      textColor: "Course Curriculum",
      text: "Course",
      icon: BsStack,
      ytLink: "https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ",
      faqs: [
        {
          title: "What is the Darvas Box?",
          answer: [
            "A trading strategy developed by Nicolas Darvas",
            "Identifies price ranges where a stock moves between support and resistance",
            "Used to find breakout opportunities in trending markets",
          ],
        },
        {
          title: "What is Gap Theory?",
          answer: [
            "A concept that studies price gaps on charts",
            "Gaps occur when price jumps up or down with no trading in between",
            "Used to predict continuation or reversal after a gap",
          ],
        },
        {
          title: "What are cash and derivatives market strategies?",
          answer: [
            "Cash market involves buying and selling stocks directly",
            "Derivatives involve futures and options for hedging or trading",
            "Strategies include hedging, arbitrage, spread trading, and risk protection",
          ],
        },
        {
          title:
            "What is the benefit of combining fundamentals, technicals, and derivatives?",
          answer: [
            "Fundamentals help find strong companies",
            "Technicals help identify the right price and timing",
            "Derivatives help hedge risks and enhance returns",
            "Combining all three creates a powerful trading and investing approach",
          ],
        },
        {
          title: "What are exclusive strategies?",
          answer: [
            "Specialized methods used by experienced traders",
            "Often include custom technical setups and unique risk models",
            "Designed to improve accuracy and consistency",
          ],
        },
        {
          title: "What are oscillators?",
          answer: [
            "Technical tools that move between two extremes",
            "Used to identify overbought and oversold market conditions",
            "Examples: RSI, MACD, Stochastic, CCI",
          ],
        },
        {
          title: "What is the use of various trading apps?",
          answer: [
            "Track stock prices, charts, and news in real time",
            "Analyze technical indicators and patterns",
            "Manage portfolios and execute trades easily",
          ],
        },
        {
          title: "What is news-based trading and investing?",
          answer: [
            "Taking positions based on financial news and economic events",
            "Includes earnings reports, mergers, budgets, and global updates",
            "Helps capture quick market movements after major announcements",
          ],
        },
      ],
    },

    exclusiveContent: {
      mainTitle: "Exclusive content access",
      mainDescription:
        "Unlock specialized risk management tools and case studies.",
      textColor: "Management",
      text: "content",
      icon: GoFileSubmodule,

      items: [
        {
          title: "Risk Analysis Handbook",
          description:
            "Guides covering quantitative and qualitative risk assessment methods.",
          icon: RiBook2Line,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Stress Test Templates",
          description:
            "Ready-to-use models for stress testing and scenario analysis.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App With  Resources",
          description: "Our Mobile Application provides trends.",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
    },

    modelingCourse: {
      mainTitle: "Investment Banking Career, ",
      mainDescription:
        "Prepare for one of the most lucrative careers in finance.",
      textColor: "Scope & Salary",
      text: "Banking Career",
      icon: BsFillTrophyFill,
      cta: { label: "Learn More", href: "#" },
      courseData: [
        {
          key: "growth",
          title: "Growth & Recognition",
          description:
            "Investment banking remains the top choice for ambitious finance professionals worldwide.",
          icon: RiBarChartBoxLine,
        },
        {
          key: "profiles",
          title: "Job Profiles",
          description: "Roles include Analyst, Associate, and M&A Specialist.",
          icon: RiBriefcase4Line,
        },
        {
          key: "salary",
          title: "Median Salary",
          description:
            "Entry-level analysts can earn INR 15-20 LPA with global growth potential.",
          icon: RiMoneyDollarCircleLine,
        },
      ],
    },

    faq: {
      mainTitle: "Techno - Funda  ",
      mainDescription:
        "Understand how strong a company really is by studying its financial health, future potential, and industry position.",
      textColor: "Module",
      text: "FAQs",
      icon: FaQuestionCircle,
      items: [
        
     
      
        {
          title: "What is the Techno Funda module?",
          description:
            "The Techno Funda module combines technical and fundamental analysis to identify high-quality stocks with strong chart setups.",
        },
        
        {
          title: "Who is this program for?",
          description:
            "This program is ideal for students, working professionals, beginners, traders, and anyone interested in finance or the stock market.",
        },
        {
          title: "What salary is expected after placements?",
          description:
            "Freshers typically start between ₹3–6 LPA depending on skills, performance, and the company hiring.",
        },
        {
          title: "What kind of jobs can I get?",
          description:
            "You can apply for roles like Equity Research Analyst, Financial Analyst, Trader, Risk Analyst, Investment Advisor, and Portfolio Assistant.",
        },
        {
          title: "Are there any prerequisites for this course?",
          description:
            "No prior experience is required. Basic computer knowledge and willingness to learn are enough.",
        },
        {
          title: "What professional courses can be done with this?",
          description:
            "You can pursue CFA, NISM certifications, FRM, CFP, financial modeling, or advanced trading and investment courses.",
        },
      ],
    },

    whyUs: {
      mainTitle: "Why Choose Our Investment ?",
      mainDescription:
        "Their team elaborated that the motto of  is to ensure whether the student learnt the actual concept, not just from the examination point of view but also from a standpoint of getting a Job in the field of risk. They believe that education extends way beyond the classroom teaching. Hence, They use real life examples, story telling techniques, and softwares to make the students visualize the tough formulas and not just mug them up.",
      textColor: "Banking Program",
      text: "Why Us",
      icon: FaUsers,
      cta: { label: "Learn More", href: "#" },
      items: [
        {
          title: "Trainers from Bulge Bracket Banks",
          description: "Mentors from Goldman Sachs, JP Morgan, etc.",
          icon: RiShieldCheckLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
      ],
    },

    programHighlights: {
      mainTitle: "Program of Investment ",
      textColor: "  Banking Course",
      mainDescription:
        "Key program benefitsHere are a few features of our coaching which will help you breeze through Financial Modeling.",
      text: "Investment Banking",
      icon: RiBankFill,
      items: [
        {
          title: "150+ Hours of Live Training",
          description: "Interactive learning with mentors.",
          icon: RiPlayCircleLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Real Deal Case Studies",
          description: "Analyze actual M&A deals.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App  Resources",
          description: "Our Mobile Application provid ",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
      otherFeatures: "8+ Other Features",
    },
  },
  financeProgram: {
    slug: "finance-Program",

    heroBanner: {
      btnText: "Step into IB",
      title: "Personal Finance Program",
      subtitle: "Waiting for descriptions",
      highlights: [
        "15 days course",
        "Mentors with 10+ years of experience",
        "Placement assistance",
        "All types of tips and tricks",
        "Finance under one roof",
      ],
      bannerImg:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/banner-photos/144558.jpg",
      ctas: [
        {
          label: "Download Brochure",
          href: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/bochures/Stockcricle%20Brochure%20Personal%C2%A0Finance%C2%A0Course.pdf",
          type: "secondary",
          icon: FaDownload,
        },
      ],
    },

    curriculamData: {
      mainTitle: "Financial Modeling ",
      mainDescription:
        "Our curriculum is the most detailed, concept driven and Industry relevant.Investing grows wealth over the long term Investments carry higher risk but higher potential returns",
      textColor: "Course Curriculum",
      text: "Course",
      icon: BsStack,
      ytLink: "https://www.youtube.com/embed/QQ1QOlMRXNs?si=1tVJqhiqSgDR0YGQ",
      faqs: [
        {
          title: "What is the difference between finance and personal finance?",
          answer: [
            "Finance deals with managing money for businesses, markets, and governments",
            "Personal finance focuses on managing an individual’s income, expenses, and savings",
            "Finance is broad; personal finance is about everyday money decisions",
          ],
        },
        {
          title: "Why is personal finance important?",
          answer: [
            "Helps you control spending and avoid debt",
            "Builds savings for emergencies and future goals",
            "Improves financial stability and long-term wealth",
          ],
        },
        {
          title: "What is real estate?",
          answer: [
            "Property that includes land, buildings, and housing",
            "A popular long-term investment option",
            "Provides rental income and potential value growth",
          ],
        },
        {
          title: "What are commodities?",
          answer: [
            "Raw materials like gold, oil, and agricultural products",
            "Traded in markets as an asset class",
            "Used for diversification and inflation protection",
          ],
        },
        {
          title: "What is investing?",
          answer: [
            "Putting money into assets to grow wealth over time",
            "Includes stocks, bonds, real estate, and mutual funds",
            "A long-term method to build financial security",
          ],
        },
        {
          title: "What is saving?",
          answer: [
            "Setting aside money for short-term needs or safety",
            "Usually kept in bank accounts with low risk",
            "Essential for emergencies and planned expenses",
          ],
        },
        {
          title: "What are bonds?",
          answer: [
            "Loans given to governments or companies",
            "Provide fixed interest over time",
            "Lower risk than stocks but offer lower returns",
          ],
        },
        {
          title: "What is insurance?",
          answer: [
            "A financial product that protects against major risks",
            "Includes health, life, car, and property insurance",
            "Helps reduce unexpected financial losses",
          ],
        },
        {
          title: "What is taxation?",
          answer: [
            "Money paid to the government from income or purchases",
            "Used to fund public services and infrastructure",
            "Affects net income and financial planning",
          ],
        },
        {
          title: "What are expenses?",
          answer: [
            "Money spent on daily needs and lifestyle",
            "Includes food, rent, bills, and transportation",
            "Managing expenses is key to saving efficiently",
          ],
        },
        {
          title: "What are borrowings?",
          answer: [
            "Taking money as loans or credit that must be repaid",
            "Includes home loans, personal loans, and credit cards",
            "Should be used carefully to avoid high debt",
          ],
        },
      ],
    },

    exclusiveContent: {
      mainTitle: "Exclusive content access",
      mainDescription:
        "Unlock specialized risk management tools and case studies.",
      textColor: "Management",
      text: "content",
      icon: GoFileSubmodule,

      items: [
        {
          title: "Risk Analysis Handbook",
          description:
            "Guides covering quantitative and qualitative risk assessment methods.",
          icon: RiBook2Line,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Stress Test Templates",
          description:
            "Ready-to-use models for stress testing and scenario analysis.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App With  Resources",
          description: "Our Mobile Application provides trends.",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
    },

    modelingCourse: {
      mainTitle: "Investment Banking Career, ",
      mainDescription:
        "Prepare for one of the most lucrative careers in finance.",
      textColor: "Scope & Salary",
      text: "Banking Career",
      icon: BsFillTrophyFill,
      cta: { label: "Learn More", href: "#" },
      courseData: [
        {
          key: "growth",
          title: "Growth & Recognition",
          description:
            "Investment banking remains the top choice for ambitious finance professionals worldwide.",
          icon: RiBarChartBoxLine,
        },
        {
          key: "profiles",
          title: "Job Profiles",
          description: "Roles include Analyst, Associate, and M&A Specialist.",
          icon: RiBriefcase4Line,
        },
        {
          key: "salary",
          title: "Median Salary",
          description:
            "Entry-level analysts can earn INR 15-20 LPA with global growth potential.",
          icon: RiMoneyDollarCircleLine,
        },
      ],
    },

    faq: {
      mainTitle: "Personal Finance ",
      mainDescription:
        "Clear answers to help you understand our Finance Program, its career opportunities, and what you can expect after enrollment.",
      textColor: "Program",
      text: "FAQs",
      icon: FaQuestionCircle,
      items: [
        
       
        {
          title: "What is personal finance?",
          description:
            "Personal finance includes managing income, savings, investments, insurance, expenses, and tax planning for a secure financial future.",
        },
        {
          title: "Who is this program for?",
          description:
            "This program is ideal for students, working professionals, beginners, traders, and anyone interested in finance or the stock market.",
        },
        {
          title: "What salary is expected after placements?",
          description:
            "Freshers typically start between ₹3–6 LPA depending on skills, performance, and the company hiring.",
        },
        {
          title: "What kind of jobs can I get?",
          description:
            "You can apply for roles like Equity Research Analyst, Financial Analyst, Trader, Risk Analyst, Investment Advisor, and Portfolio Assistant.",
        },
        {
          title: "Are there any prerequisites for this course?",
          description:
            "No prior experience is required. Basic computer knowledge and willingness to learn are enough.",
        },
        {
          title: "What professional courses can be done with this?",
          description:
            "You can pursue CFA, NISM certifications, FRM, CFP, financial modeling, or advanced trading and investment courses.",
        },
      ],
    },

    whyUs: {
      mainTitle: "Why Choose Our Investment ?",
      mainDescription:
        "Their team elaborated that the motto of  is to ensure whether the student learnt the actual concept, not just from the examination point of view but also from a standpoint of getting a Job in the field of risk. They believe that education extends way beyond the classroom teaching. Hence, They use real life examples, story telling techniques, and softwares to make the students visualize the tough formulas and not just mug them up.",
      textColor: "Banking Program",
      text: "Why Us",
      icon: FaUsers,
      cta: { label: "Learn More", href: "#" },
      items: [
        {
          title: "Trainers from Bulge Bracket Banks",
          description: "Mentors from Goldman Sachs, JP Morgan, etc.",
          icon: RiShieldCheckLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
        {
          title: "Placement Assistance",
          description: "Strong connections with IB recruiters.",
          icon: RiMedalLine,
        },
      ],
    },

    programHighlights: {
      mainTitle: "Program of Investment ",
      textColor: "  Banking Course",
      mainDescription:
        "Key program benefitsHere are a few features of our coaching which will help you breeze through Financial Modeling.",
      text: "Investment Banking",
      icon: RiBankFill,
      items: [
        {
          title: "150+ Hours of Live Training",
          description: "Interactive learning with mentors.",
          icon: RiPlayCircleLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/computeravif.avif",
        },
        {
          title: "Real Deal Case Studies",
          description: "Analyze actual M&A deals.",
          icon: RiStackLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/course.jpg",
        },
        {
          title: "Mobile App  Resources",
          description: "Our Mobile Application provid ",
          icon: RiSmartphoneLine,
          img: "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/course-image/images.jpg",
        },
      ],
      otherFeatures: "8+ Other Features",
    },
  },
};

export { coursePagesData };
