import Image from "next/image";

const ExperienceItem = ({ years, company, role, image }) => {
  return (
    <div className="text-primary-content m-10 border-l-8 border-[#4A2083]">
      <div className="flex justify-center items-center gap-4 p-3">
        <div className="card-body">
          <h3 className="text-primary">{years}</h3>
          <p className="text-lg font-bold">{company}</p>
          <p>{role}</p>
        </div>
        {image && (
          <div>
            <Image src={image} alt={company} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
