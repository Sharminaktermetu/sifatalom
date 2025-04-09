import React from "react";
import upArrow from "../../assests/websiteIcons/PricingTable/upArrow.png";
import tick from "../../assests/websiteIcons/PricingTable/Check.png";
import close from "../../assests/websiteIcons/PricingTable/Close.png";
import Image from "next/image";

const PricingCard = ({
  features = [],
  noFeature = [],
  buttonLabel,
  title,
  price,
  index, // Add index as a prop
}) => {
  return (
    <div className="relative z-40 w-full max-w-sm p-6 bg-gradient-to-b from-[#361068] to-[#1A0B2E] border border-[#6A2FC1] rounded-xl text-white h-fit">
      {/* Conditional blur effect or top-0 */}
    

      <div className="relative z-30 mb-4 bg-[#6A2FC1]/30 rounded-lg p-4 flex w-full justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <h3 className="text-xl font-bold mb-2 text-[#B380FF]">৳ {price}</h3>
        </div>
        <Image src={upArrow} alt="Icon" className="w-16 h-16 p-3" />
      </div>

      <div className="relative z-10">
        {features.map((feature, index) => (
          <p key={index} className="mb-2 text-lg">
            <Image
              src={tick}
              alt="Icon"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            {feature}
          </p>
        ))}
        {noFeature.map((feature, index) => (
          <p key={index} className="mb-2 text-lg z-40">
            <Image
              src={close}
              alt="Icon"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            {feature}
          </p>
        ))}
        <div className="flex items-center justify-center z-10">
          <button className="mt-4 w-2/3 bg-[#6A2FC1] text-white py-2 rounded-md font-bold">
            Choose Plan
          </button>
        </div>

        <div
        className={`absolute   ${
          index === 0 ? "z-0 -bottom-32 -left-18 w-2/3 h-2/3 blur-[90px] bg-[#8B3CFF] opacity-55 rounded-full " : index === 2 ? "z-0 -top-56 -right-20 w-2/3 h-1/3 blur-[100px] bg-[#8B3CFF]  rounded-full " : ""
        }`}
      >
      
      </div>
      </div>
    </div>
  );
};

export default PricingCard;