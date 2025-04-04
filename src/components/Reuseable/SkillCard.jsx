import Image from "next/image";

const SkillCard = ({ imgSrc, alt = "skill" }) => {
  return (
    <div className="w-48 h-48 border border-[#6A2FC1] bg-gradient-to-b from-[#361068] to-[#1A0B2E] flex justify-center items-center rounded-xl">
      <Image
        className="rounded-xl w-20 h-20"
        src={imgSrc}
        alt={alt}
       
      />
    </div>
  );
};

export default SkillCard;
