import SectionHeader from "@/components/Reuseable/SectionHeader";
import profe from "../../../assests/topasset/profe.png";
import bag from "../../../assests/services/bag.png";
import bgbag from "../../../assests/services/bgbag.png";
import Image from "next/image";
import { experienceList } from "@/data/exprience";
import ExperienceItem from "@/components/Reuseable/ExprienceItem";
const ProfessinalWork = () => {
  return (
    <div className="mt-60">
      <SectionHeader title={'Professional Journey'} topTitle={'WORK'}/>

      <div className="mt-32 border border-[#6A2FC1] bg-gradient-to-b from-[#361068] to-[#1A0B2E] rounded-xl">

        <div className="py-8 border-b-2 border-[#4A2083]   text-white flex items-center gap-4 justify-center">
          
           <div className="flex gap-5 items-center">
           <Image src={bgbag} alt="" className="w-20 h-20" />
           <h2>Work Experience</h2>
          
           </div>
           
         
         
        </div>

        <div className=" flex items-center justify-center   gap-10">
         
        {experienceList.map((item, index) => (
        <ExperienceItem
          key={index}
          years={item.years}
          company={item.company}
          role={item.role}
          image={item.image}
          index={index}
        />
      ))}
          
          </div>
        </div>
      </div>

  );
};

export default ProfessinalWork;
