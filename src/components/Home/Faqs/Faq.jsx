import SectionHeader from "@/components/Reuseable/SectionHeader";
import InfoCard from "@/components/Reuseable/InfoCard";
import { infoCardData } from "@/data/infoData";

const Faq = () => {
  return (
    <div className="bg-[#1E1E1E] py-4 mt-40">
      <SectionHeader
        title={"Questions? Look Here."}
        topTitle={"Frequently asked questions"}
      />
      <div>
        <div className="mt-32 rounded-xl">
          <div className="grid grid-cols-2 gap-10 justify-items-center">
          {infoCardData.map((card, index) => (
        <InfoCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
            
          </div>
      </div>
    </div>
    </div>
    
  );
};

export default Faq;
