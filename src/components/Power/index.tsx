"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example bullet points
const bulletPoints = [
  {
    title: "Enhance Operational Efficiency",
    description:
      "Seamless system connectivity that streamlines daily tasks and boosts productivity.",
  },
  {
    title: "Reduce Costs",
    description:
      "Automated workflows and processes to eliminate errors and lower operational expenses.",
  },
  {
    title: "Accelerate Time-to-Market",
    description:
      "Rapid application development for faster delivery of new products and features.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Actionable insights through integrated analytics, powering more confident choices.",
  },
  {
    title: "Boost Agility",
    description:
      "Adapt quickly to evolving market conditions and maintain a competitive edge.",
  },
  {
    title: "Unlock Growth with AI",
    description:
      "AI-powered automation strategies to scale innovation and future-proof your business.",
  },
];

const PowerSection = () => {
  // By default, show 3 slides on large screens, 2 on tablets, 1 on mobile.
  // We'll set autoplaySpeed = 7000 (7s) for large screens to slow it down.
  // For smaller breakpoints, we keep it at 5000 (5s).
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 10000, // slower on large screens
    responsive: [
      {
        // Below 1024px (tablet size and down)
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 5000, // keep the existing speed on medium screens
        },
      },
      {
        // Below 640px (mobile)
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 5000, // same as above for mobile
        },
      },
    ],
  };

  return (
    <section
      id="power"
      className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark pt-8 pb-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-xl font-bold text-center text-black dark:text-white sm:text-2xl md:text-3xl">
          Experience the Power of Intelligent Automation:
        </h2>

        <Slider {...settings}>
          {bulletPoints.map((item, index) => (
            <div key={index} className="px-3">
              {/* Card with higher contrast in light mode */}
              <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-md p-6 h-full flex flex-col justify-center">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base !leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Force slick-dots to be white */}
      <style jsx global>{`
        .slick-dots li button::before {
          color: #fff !important;
        }
        .slick-dots li.slick-active button::before {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
};

export default PowerSection;