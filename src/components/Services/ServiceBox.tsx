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
      </div>
    </div>
  );
};

export default ServiceBox;