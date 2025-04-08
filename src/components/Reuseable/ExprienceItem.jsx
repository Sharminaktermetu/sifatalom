import Image from "next/image";

const ExperienceItem = ({ years, company, role, image, index }) => {
  return (
    <div
      className={`text-primary-content my-10 ${
        index === 1 ? "border-x-8 border-[#8B3CFF] px-10 " : ""
      }`}
    >
      <div className="flex justify-center items-center gap-4 p-3">
        <div className="">
          <h3 className="text-[#8B3CFF]">{years}</h3>
          <p className="text-lg font-bold">{company}</p>
          <p>{role}</p>
        </div>
        {image && (
          <div>
            <Image src={image} alt={company} width={100} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;