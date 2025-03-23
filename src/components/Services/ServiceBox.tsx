import OfferList from "../Common/OfferList";
import { brandColors } from "@/lib/brandColors";

const ServiceBox = (props: {
  titleLine1: string;
  titleLine2: string;
  shortDescription: string;
  bullets: string[];
}) => {
  const { titleLine1, titleLine2, shortDescription, bullets } = props;

  return (
    <div className="w-full">
      <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark flex flex-col h-full">
        {/* Full Title (Centered with Line Break) */}
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white text-center">
          {titleLine1}
          <br />
          {titleLine2}
        </h3>

        {/* Short Description (Centered) */}
        <p className="mb-4 text-base font-medium text-body-color text-center">
          {shortDescription}
        </p>

        {/* Horizontal Line */}
        <div className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10" />

        {/* Bullet Points */}
        <div className="flex-grow">
          {bullets.map((bullet, index) => (
            <OfferList key={index} text={bullet} status="active" />
          ))}
        </div>

        {/* Decorative SVG */}
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={brandColors.inovize_red} stopOpacity="0.62" />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={brandColors.inovize_red} stopOpacity="0.62" />
                <stop offset="1" stopColor={brandColors.inovize_red} stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;