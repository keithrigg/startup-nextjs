"use client";

import SectionTitle from "../Common/SectionTitle";
import { brandColors } from "@/lib/brandColors";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Services"
          paragraph="Whether you need CxO-level strategic advice or operational excellence - we've got the right services for your current & future needs."
          center
          mb="80px"
        />

        {/* Services List */}
        <div className="relative">
          {/* Grid for Services */}
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {/* Strategic Advisory Services */}
            <ServiceBox
              titleLine1="Strategic Advisory"
              titleLine2="Services"
              shortDescription="Navigate complexity with CxO-level strategic advice."
              bullets={[
                "Align technology with business goals.",
                "Leverage deep iPaaS expertise.",
                "Provide strategic insights for growth.",
              ]}
            />

            {/* Architecture & Design Services */}
            <ServiceBox
              titleLine1="Architecture & Design"
              titleLine2="Services"
              shortDescription="Craft scalable, future-proof solutions tailored to you."
              bullets={[
                "Architect robust, adaptable systems.",
                "Ensure seamless integration.",
                "Address your unique challenges.",
              ]}
            />

            {/* Implementation Services */}
            <ServiceBox
              titleLine1="Implementation"
              titleLine2="Services"
              shortDescription="Turn your vision into reality with precision."
              bullets={[
                "Deliver projects on time and on target.",
                "Bring automation vision to life.",
                "Skilled professionals at work.",
              ]}
            />

            {/* Managed Integration Services */}
            <ServiceBox
              titleLine1="Managed Integration"
              titleLine2="Services"
              shortDescription="Ensure seamless performance and operational excellence."
              bullets={[
                "Monitor and maintain workflows 24/7.",
                "Optimize for continuous improvement.",
                "Provide peace of mind.",
              ]}
            />
          </div>
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} />
              <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColors.inovize_red} />
              <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Services;