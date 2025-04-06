import skill from "../../../assests/topasset/skill.png";

import styles from "./Skills.module.css";
import skills from "@/data/skills";
import SkillCard from "../../Reuseable/SkillCard";
import SectionHeader from "../../Reuseable/SectionHeader";
const Skills = () => {
  return (
    <>
      <div>
        <SectionHeader imageSrc={skill} title={"Skills"} />
        <div className=" max-w-7xl mx-auto mt-20 mb-20">
          <div className={`${styles.bannerBackground}`}>
            <div className="grid grid-cols-4 mt-20 justify-items-center gap-12 hero-content">
              {skills.slice(0, 12).map((skill, index) => (
                <SkillCard key={index} imgSrc={skill.img} alt={skill.name} />
              ))}
            </div>

            <div className="flex justify-center items-center mt-12 gap-12">
              {skills.slice(12, 15).map((skill, index) => (
                <SkillCard key={index} imgSrc={skill.img} alt={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        
        <div className="m-10 mt-32 border border-[#6A2FC1] bg-gradient-to-b from-[#361068] to-[#1A0B2E] flex justify-center items-center rounded-xl">
          <div className="grid grid-cols-3 justify-items-center">
            <div className="text-primary-content m-10 border-r-8  border-[#4A2083]">
              <div className="card-body">
                <h2 className="">Dedication</h2>
                <p className="text-justify text-xl">
                  I am committed to delivering high-quality web development solutions, focusing on clean code, user-centric design, and efficient project execution. My dedication ensures timely delivery and aligns with client goals, while maintaining industry best practices and continuous improvement.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="text-primary-content mt-10">
              <div className="card-body">
                <h2 className="">Smart Work</h2>
                <p className="text-justify text-xl">
                  I focus on working smart by leveraging effective strategies, optimising processes, and utilising the right tools to achieve maximum results with minimal effort. My approach emphasises efficiency, innovation, and consistently delivering high-quality outcomes while meeting deadlines and client expectations.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="text-primary-content m-10 border-l-8  border-[#4A2083]">
              <div className="card-body">
                <h2 className="">Collaboration</h2>
                <p className="text-justify text-xl">
                  I prioritise effective collaboration in my work by actively engaging with team members, sharing insights, and supporting collective problem-solving. My focus is on clear communication, mutual respect, and leveraging diverse strengths to achieve high-quality, timely results.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
