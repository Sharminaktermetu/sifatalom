import Image from "next/image";

const SectionHeader = ({ title, imageSrc, alt = "section image" }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-4xl text-white font-bold -mb-24">{title}</h1>
      <Image src={imageSrc} alt={alt} />
    </div>
  );
};

export default SectionHeader;
