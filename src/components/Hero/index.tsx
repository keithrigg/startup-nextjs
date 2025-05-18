"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const words = ["Connectivity", "Efficiency", "Insights", "Innovation", "Intelligent Automation"];

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-4 pt-[80px] dark:bg-gray-dark md:pb-[40px] md:pt-[100px] xl:pb-[80px] xl:pt-[120px]"
    >
      <div className="container">
        <div className="flex flex-wrap items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Transforming Businesses with{" "}
              <span className="inline-block min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
                <Typewriter
                  words={words}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              Expert-led Consultancy &amp; Managed Services company, founded by former SaaS &amp;
              Industry technology leaders — we forge strategic partnerships with businesses to
              accelerate innovation, streamline operations, and drive sustainable growth through
              tailored Intelligent Automation solutions.
              <br />
              <br />
              Ready to elevate your business?
              <br />
              Begin your transformation journey with us today.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/inovize"
                aria-label="social-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-[#0077B5] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#005C82]"
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

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                //scroll={false}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[500px] aspect-[25/24]">
              <Image
                src="/images/about/about-image.svg"
                alt="about-image"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="about-image"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs (unchanged) */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        {/* ... (background SVGs remain the same) */}
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        {/* ... (background SVGs remain the same) */}
      </div>
    </section>
  );
};

export default Hero;