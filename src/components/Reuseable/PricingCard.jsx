
import React from "react";
import tick from "../../assests/services/tick.png";
import Image from "next/image";

const PricingCard = ({features = [],  buttonLabel }) => {
    return (
      <div className="w-full max-w-sm p-6 bg-gradient-to-b from-[#361068] to-[#1A0B2E] border border-[#6A2FC1] rounded-xl text-white shadow-lg">
    
  
        <div  className="mb-6">
          {features.map((feature, index) => (
           <p  key={index} className="mb-2 text-lg font-semibold">
            <Image src={tick}    alt="Icon" width={20} height={20} className="inline-block mr-2" />
               {feature}
               
            </p>
          ))}
       
        </div>
  
   
      </div>
    );
  };
  
  export default PricingCard;
  