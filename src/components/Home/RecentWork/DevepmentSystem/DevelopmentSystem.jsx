import ExperienceCard from "@/components/Reuseable/ExprienceCard";

import { experienceData } from "@/data/exprience";
const DevelopmentSystem = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-32 justify-between rounded-xl">
      <div className="relative w-1/2 text-white">
        {/* Glow effect box behind the text */}
        <div className="absolute inset-0 z-0 -top-11">
          <div className="w-1/3 h-2/3 blur-3xl bg-[#8B3CFF] opacity-75 rounded-lg" />
        </div>

        {/* Text content */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">I Develop Systems that Work</h2>
          <p className="text-justify mt-5 text-lg">
            I develop systems that work by focusing on reliability, efficiency,
            and scalability. My approach involves understanding client needs,
            applying best practices, and ensuring seamless integration to
            deliver solutions that meet both short-term goals and long-term
            success.
          </p>
        </div>
      </div>

      <div>
        <div>
          <div className="grid grid-cols-2 gap-6 justify-items-center  text-white">
            {experienceData.map((item, index) => (
              <ExperienceCard
                key={index}
                number={item.number}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSystem;
