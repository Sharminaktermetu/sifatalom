import ExperienceCard from "@/components/Reuseable/ExprienceCard";
import styles from "./Deve.module.css";
import { experienceData } from "@/data/exprience";
const DevelopmentSystem = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-32 justify-between rounded-xl">
      <div className="text-white w-1/2">
        <div className={`${styles.bannerBackground}`}>
          <h2 className="">I Develop System that Works</h2>

          <p className="text-justify mt-5">
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
        <ExperienceCard key={index} number={item.number} label={item.label} />
      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSystem;
