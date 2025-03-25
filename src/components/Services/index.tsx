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
                "Act as your trusted advisor to align IT and business objectives.",
                "Develop tailored technology roadmaps for sustainable growth.",
                "Leverage deep integration & automation expertise (iPaaS and beyond).",
                "Guide strategic technology selection and vendor evaluation.",
                //"Enable continuous innovation through proactive insights.",
              ]}
            />

            {/* Architecture & Design Services */}
            <ServiceBox
              titleLine1="Architecture & Design"
              titleLine2="Services"
              shortDescription="Craft scalable, future-proof solutions tailored to you."
              bullets={[
                "Develop high-level solution designs and blueprints.",
                "Create reference architectures that ensure scalability and reliability.",
                "Incorporate best practices for security and performance.",
                "Adapt designs to unique compliance and business needs.",
                //"Lay the foundation for seamless system integration.",
              ]}
            />

            {/* Implementation Services */}
            <ServiceBox
              titleLine1="Implementation"
              titleLine2="Services"
              shortDescription="Turn your vision into reality with precision."
              bullets={[
                "Execute end-to-end project delivery with minimal disruption.",
                "Ensure robust testing, quality assurance, and risk mitigation.",
                "Accelerate time-to-value with agile implementation approaches.",
                "Leverage cross-functional teams for efficient rollouts.",
                //"Provide comprehensive training and knowledge transfer.",
              ]}
            />

            {/* Managed Integration Services */}
            <ServiceBox
              titleLine1="Managed Integration"
              titleLine2="Services"
              shortDescription="Ensure seamless performance and operational excellence."
              bullets={[
                "Provide 24/7 support, including incident & problem management.",
                "Continuously monitor and alert on critical workflows.",
                "Utilise observability solutions for proactive performance insights.",
                "Manage maintenance and change requests to evolve with your needs.",
                //"Drive ongoing optimisation and stability improvements.",
              ]}
            />
          </div>
        </div>
      </div>

      {/* Background SVG */}
    </section>
  );
};

export default Services;