"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FaSearch, FaPencilRuler, FaRocket, FaChartLine } from "react-icons/fa";

// Icon bullet item, similar to the old 'List' approach but with an icon
const IconBulletItem = ({ title, description, icon: Icon }) => (
  <div className="mb-6 flex items-center">
    {/* Icon in a square */}
    <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-primary bg-opacity-10 text-primary">
      <Icon size={40} />
    </div>
    {/* Text content */}
    <p className="flex-1 text-lg font-medium text-body-color">
      <span className="font-bold text-black dark:text-white">{title}:</span>
      <span className="ml-2">{description}</span>
    </p>
  </div>
);

const WhyUsSectionTwo = () => {
  return (
    <section
      id="about"
      className="pt-16 md:pt-20 lg:pt-28 dark:bg-bg-color-dark bg-gray-light relative z-10"
    >
      <div className="container">
        {/* Removed border-b to eliminate the horizontal line */}
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Column: Title + 4 Icon Bullets */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Approach"
                paragraph="Leverage the Inovize 4D Approach: Discover, Design, Deliver, and Drive—a proven framework to transform challenges into opportunities and achieve sustainable success."
                mb="44px"
                center={false}
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <IconBulletItem
                  title="Discover"
                  description="Identify your core challenges and strategic goals through in-depth analysis to establish a focused roadmap."
                  icon={FaSearch}
                />
                <IconBulletItem
                  title="Design"
                  description="Create a customized solution that aligns with your business objectives and addresses your specific requirements."
                  icon={FaPencilRuler}
                />
                <IconBulletItem
                  title="Deliver"
                  description="Execute with precision to deliver high-quality, reliable solutions that integrate seamlessly into your operations."
                  icon={FaRocket}
                />
                <IconBulletItem
                  title="Drive"
                  description="Continuously optimize performance and provide ongoing support to ensure sustained growth and success."
                  icon={FaChartLine}
                />
              </div>
            </div>

            {/* Right Column: Larger Image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[1/1] max-w-[500px] lg:mr-0">
                {/* Light Mode Image */}
                <Image
                  src="/images/why/Inovize_4D_approach_cycle.svgg"
                  alt="Inovize 4D Method Infographic (Light Mode)"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden"
                />
                {/* Dark Mode Image */}
                <Image
                  src="/images/why/Inovize_4D_approach_cycle.svg"
                  alt="Inovize 4D Method Infographic (Dark Mode)"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs (unchanged) */}
      <div className="absolute right-0 top-5 z-[-1]">
        {/* ...existing SVG code from WhyUsSectionTwo... */}
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        {/* ...existing SVG code from WhyUsSectionTwo... */}
      </div>
    </section>
  );
};

export default WhyUsSectionTwo;