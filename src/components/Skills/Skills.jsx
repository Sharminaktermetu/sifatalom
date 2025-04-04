import skill from "../../assests/topasset/skill.png";

import Image from "next/image";
import styles from "./Skills.module.css";
import skills from "@/data/skills";
import SkillCard from "../Reuseable/SkillCard";
const Skills = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-20">
        <h1 className="text-4xl text-white font-bold -mb-24">Skills</h1>
        <Image src={skill} alt="profile" />
        <div className="">

        <div className={`${styles.bannerBackground}`}>
            
        <div className="grid grid-cols-4 mt-20 justify-items-center gap-12">
        {skills.slice(0,12).map((skill, index) => (
        <SkillCard key={index} imgSrc={skill.img} alt={skill.name} />
      ))}
       
        </div>

        <div className="flex justify-center items-center mt-12 gap-12">
        {skills.slice(12,15).map((skill, index) => (
        <SkillCard key={index} imgSrc={skill.img} alt={skill.name} />
      ))}
       
        </div>
         
        </div>

        </div>
      
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
