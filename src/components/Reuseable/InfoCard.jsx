import Image from "next/image";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="w-full p-6 rounded-xl text-white shadow-lg flex gap-4">
      <Image
        src={icon}
        alt="Icon"
        className="w-16 h-16 bg-gradient-to-b from-[#361068] to-[#1A0B2E] rounded-lg p-3 border border-[#8B3CFF]"
      />
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-2 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
