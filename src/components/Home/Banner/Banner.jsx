import Image from "next/image";
import profile from "@/assests/profile.png";
import arrow from "@/assests/arrow.png";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className="min-h-screen hero text-white bg-[#1E1E1E]">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <Image
          src={profile}
          alt="profile"
          width={380}
        />

      <div
        className={`max-w-2/3 ${styles.bannerBackground}`}
      >
          <div className="relative">
          <div>
            <Image
              src={arrow}
              alt="arrow"
              className="absolute -top-44 -left-56 w-[260px] h-80"
            />
          </div>
           <h2>
              Hello! I am <span className="text-[#8B3CFF]">Md. Sifat Alam</span>
            </h2>
          
           </div>
            <h2 className="py-6">I’m a Full Stack Web Developer</h2>
            <p>
              Currently I’m working as a project manager at{" "}
              <span className="text-[#8B3CFF]">DEMO SOFTWARE LTD.</span>
            </p>
            <p className="w-2xl text-justify mt-5">
              As a Web Developer, I’m passionate about creating websites that
              not only look amazing but also work seamlessly for users. With
              experience in both front-end and back-end technologies, I specialize
              in building responsive, secure, and scalable web solutions that meet
              the unique needs of each client. I focus on writing clean, efficient
              code and designing intuitive user experiences, ensuring that every
              project is both functional and visually appealing. I stay on top of
              the latest industry trends and best practices to deliver high-quality
              work on time and within budget, every time.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
