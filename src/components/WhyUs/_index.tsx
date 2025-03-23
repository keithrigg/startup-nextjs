import SectionTitle from "../Common/SectionTitle";

const WhyWorkWithUs = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Why Work with Us"
          paragraph="Our Approach: Expertise Meets Integrity"
          center
          mb="80px"
        />

        {/* Key Points */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {/* Unmatched Expertise */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M28 16H24V12H16V16H12V24H16V28H24V24H28V16ZM20 20H16V16H20V20ZM24 20H20V24H24V20Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Unmatched Expertise</h3>
              <p className="text-base text-body-color">
                Our team’s deep knowledge of iPaaS and adjacent technologies solves problems others can’t.
              </p>
            </div>

            {/* Customer-Centricity */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M20 12C16.14 12 13 15.14 13 19C13 22.86 16.14 26 20 26C23.86 26 27 22.86 27 19C27 15.14 23.86 12 20 12ZM20 24C17.24 24 15 21.76 15 19C15 16.24 17.24 14 20 14C22.76 14 25 16.24 25 19C25 21.76 22.76 24 20 24Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Customer-Centricity</h3>
              <p className="text-base text-body-color">
                We put your needs at the heart of every solution, ensuring outcomes that matter.
              </p>
            </div>

            {/* Purposeful Innovation */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M20 12L28 16V24L20 28L12 24V16L20 12ZM20 14.82L14.82 17.5V22.5L20 25.18L25.18 22.5V17.5L20 14.82Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Purposeful Innovation</h3>
              <p className="text-base text-body-color">
                We harness technology to drive results, not just for its own sake.
              </p>
            </div>

            {/* Trusted Partnership */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M28 20H24V16H16V20H12V24H16V28H24V24H28V20ZM20 20H16V24H20V20ZM24 20H20V24H24V20Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Trusted Partnership</h3>
              <p className="text-base text-body-color">
                We guide you every step of the way, from strategy to success.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Methodology: The Inovize 4D Method */}
        <div className="relative">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Unique Methodology: The Inovize 4D Method
          </h3>
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {/* Discover */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M28 20C28 24.42 24.42 28 20 28C15.58 28 12 24.42 12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20ZM20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C22.2 24 24 22.2 24 20C24 17.8 22.2 16 20 16Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Discover</h3>
              <p className="text-base text-body-color">
                Understand your challenges and goals.
              </p>
            </div>

            {/* Design */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M28 12H12V16H28V12ZM12 18H28V22H12V18ZM12 24H28V28H12V24Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Design</h3>
              <p className="text-base text-body-color">
                Architect the right solution.
              </p>
            </div>

            {/* Deliver */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M28 14L16 14L16 26L28 26L28 14ZM20 18L24 18L24 22L20 22L20 18Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Deliver</h3>
              <p className="text-base text-body-color">
                Build it with precision.
              </p>
            </div>

            {/* Drive */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-inovize_red bg-opacity-10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="fill-current text-inovize_red"
                  >
                    <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" />
                    <path d="M28 16H24V12H16V16H12V24H16V28H24V24H28V16ZM20 20H16V16H20V20ZM24 20H20V24H24V20Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Drive</h3>
              <p className="text-base text-body-color">
                Optimize and support for lasting impact.
              </p>
            </div>
          </div>

          {/* Connecting Arrows for Flow (Visible on lg screens) */}
          <div className="absolute top-1/2 hidden -translate-y-1/2 lg:block">
            {/* Arrow from Discover to Design */}
            <div className="absolute left-[calc(25%-40px)] top-[-20px] w-20">
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20H70M70 20L60 10M70 20L60 30"
                  stroke="#FF4A6C"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* Arrow from Design to Deliver */}
            <div className="absolute left-[calc(50%-40px)] top-[-20px] w-20">
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20H70M70 20L60 10M70 20L60 30"
                  stroke="#FF4A6C"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* Arrow from Deliver to Drive */}
            <div className="absolute left-[calc(75%-40px)] top-[-20px] w-20">
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20H70M70 20L60 10M70 20L60 30"
                  stroke="#FF4A6C"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs (unchanged) */}
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
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
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
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;