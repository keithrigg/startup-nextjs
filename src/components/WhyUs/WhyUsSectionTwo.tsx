import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { brandColors } from "@/lib/brandColors";

// Custom SVGs for the icons
const DiscoverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
);

const DeliverIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 0l4 4h-8l4-4zm-2 12l-4-4h3V9h2v3h3l-4 4z" />
  </svg>
);

const DriveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-2-7.5l-5-5-1.41 1.41L14.17 11H7v2h7.17l-3.59 3.59L11.41 18l5-5z" />
  </svg>
);

const WhyUsSectionTwo = () => {
  const List = ({ title, description, icon: Icon }) => (
    <div className="mb-6 flex items-center">
      {/* Icon in a Square */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-lg mr-4 bg-primary bg-opacity-10 text-primary"
      >
        <Icon />
      </div>
      {/* Text Content */}
      <p className="flex-1 text-lg font-medium text-body-color">
        <span className="font-bold text-black dark:text-white">{title}:</span>
        <span className="ml-2">{description}</span>
      </p>
    </div>
  );

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-9 text-center lg:text-left">
              <SectionTitle
                title="Our Approach"
                paragraph="Embrace the 4D Approach: Discover, Design, Deliver, and Drive Your Path to Success."
                mb="44px"
              />
            </div>
            <div
              className="relative mx-auto mb-12 aspect-[1/1] max-w-[400px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* Light Mode Image */}
              <Image
                src="/images/why/inovize_4D_light.svg"
                alt="Inovize 4D Method Infographic (Light Mode)"
                fill
                className="mx-auto max-w-full dark:hidden"
              />
              {/* Dark Mode Image */}
              <Image
                src="/images/why/inovize_4D_dark.svg"
                alt="Inovize 4D Method Infographic (Dark Mode)"
                fill
                className="mx-auto max-w-full hidden dark:block"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px] flex items-center h-[400px]">
              <div className="w-full">
                <List
                  title="Discover"
                  description="Uncover your challenges and goals to set a clear path."
                  icon={DiscoverIcon}
                />
                <List
                  title="Design"
                  description="Architect a tailored solution that fits your unique needs."
                  icon={DesignIcon}
                />
                <List
                  title="Deliver"
                  description="Build with precision for seamless, reliable results."
                  icon={DeliverIcon}
                />
                <List
                  title="Drive"
                  description="Optimize and support to ensure long-term success."
                  icon={DriveIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs */}
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} />
              <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} />
              <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
              <stop offset="1" stopColor={brandColors.inovize_red} />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
              <stop offset="1" stopColor={brandColors.inovize_red} />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
              <stop offset="1" stopColor={brandColors.inovize_red} />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} stopOpacity="0" />
              <stop offset="1" stopColor={brandColors.inovize_red} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default WhyUsSectionTwo;