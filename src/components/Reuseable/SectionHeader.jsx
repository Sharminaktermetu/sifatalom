import Image from "next/image";

const SectionHeader = ({ title, imageSrc, topTitle }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-28 mb-12">
      <h3  className="text-lg text-[#B380FF] font-bold  uppercase">{topTitle}</h3>
      <h1 className="text-4xl text-white font-bold  uppercase">{title}</h1>
     
    </div>
  );
};

export default SectionHeader;
