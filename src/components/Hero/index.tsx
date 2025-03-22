"use client";

import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { brandColors } from "@/lib/brandColors";
import List from "@/components/Common/List";

const Hero = () => {
  // Define typewriter words and corresponding bullet points
  const words = ["Connectivity", "Efficiency", "Insights", "Innovation", "Intelligent Automation"];
  const bulletPoints = [
    "Enhance operational efficiency with seamless system connectivity.",
    "Reduce costs through automated workflows and processes.",
    "Accelerate time-to-market with rapid application development.",
    "Drive data-driven decisions with actionable system insights.",
    "Boost agility by adapting quickly to market changes.",
    "Unlock growth with AI-powered automation strategies.",
  ];

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark 
                   md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 
                   2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Column: Text content */}
            <div className="w-full px-4 lg:w-1/2 mb-8 lg:mb-0">
              {/* Headline with Typewriter */}
              <h1 className="mb-5 text-left text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                Transforming Businesses with{" "}
                <span className="inline-block">
                  <Typewriter
                    words={words}
                    loop={1}
                    cursor={true}
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              {/* Subheadline (static) */}
              <p className="mb-8 text-left text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Expert-led consultancy and managed services for iPaaS, API-M, LCAP, Observability, App Dev, and Agentic AI.
              </p>

              {/* Key Message */}
              <p className="mb-8 text-left text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Founded by ex-SaaS technology leaders, we’re passionate about solving complex problems with innovative, customer-centric solutions. Our proven track record and commitment to doing the right thing set us apart.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center space-x-4">
                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/company/inovize"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-sm bg-[#0077B5] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#005C82]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    className="fill-current mr-2"
                  >
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                  Connect
                </a>

                {/* Contact Us Button */}
                <Link
                  href="#contact"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  scroll={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: Static Bullet Points in Two Columns */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-md lg:mr-0">
                <div className="mx-[-12px] flex flex-wrap">
                  {/* First Column: First 3 items */}
                  <div className="w-full px-3 sm:w-1/2">
                    {bulletPoints.slice(0, 3).map((text, index) => (
                      <List key={index} text={text} />
                    ))}
                  </div>
                  {/* Second Column: Next 3 items */}
                  <div className="w-full px-3 sm:w-1/2">
                    {bulletPoints.slice(3).map((text, index) => (
                      <List key={index + 3} text={text} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background SVGs (unchanged) */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
            <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_25:217)" />
            <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_25:217)" />
            <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_25:217)" />
            <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_25:217)" />
            <defs>
              <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                <stop offset="0.145833" stopColor={brandColors.inovize_red} stopOpacity="0" />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0.08" />
              </radialGradient>
              <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                <stop offset="0.145833" stopColor={brandColors.inovize_red} stopOpacity="0" />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0.08" />
              </radialGradient>
              <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_25:217" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint6_linear_25:217" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
                <stop offset="1" stopColor={brandColors.inovize_red} />
              </linearGradient>
              <linearGradient id="paint1_linear_25:218" x1="156.389" y1="69.2405" x2="156.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
                <stop offset="1" stopColor={brandColors.inovize_red} />
              </linearGradient>
              <linearGradient id="paint2_linear_25:218" x1="125.389" y1="69.2405" x2="125.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
                <stop offset="1" stopColor={brandColors.inovize_red} />
              </linearGradient>
              <linearGradient id="paint3_linear_25:218" x1="93.8507" y1="67.2674" x2="89.9278" y2="210.214" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
                <stop offset="1" stopColor={brandColors.inovize_red} />
              </linearGradient>
              <linearGradient id="paint4_linear_25:218" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816" gradientUnits="userSpaceOnUse">
                <stop stopColor={brandColors.inovize_red} />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint5_radial_25:218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 63) rotate(90) scale(43)">
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;