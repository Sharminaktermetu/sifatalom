import Image from "next/image";
import profile from "@/assests/profile.png";
import arrow from "@/assests/arrow.png";
import styles from "./Banner.module.css";
import pen from "@/assests/websiteIcons/HeroIcon/pen.png";
const Banner = () => {
  return (
    <div className="min-h-screen hero text-white bg-[#1E1E1E]">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className={`max-w-2/3 ${styles.bannerBackground}`}>
        <Image
          src={profile}
          alt="profile"
          width={300}
        />
        </div>
      <div className="max-w-2xl -mt-24">
          <div className="relative">
          <div>
            <Image
              src={arrow}
              alt="arrow"
              className="absolute -top-24 -left-36 w-[250px] h-80"
            />
          </div>
          
          
           </div>
           <h2 className="mt-10 text-3xl font-bold">
              Hello! I am <span className="text-[#8B3CFF]">Md. Sifat Alam</span>
            </h2>
            <h2 className="py-6">I’m a Full Stack Web Developer</h2>
            <div className="flex gap-2">
              <span>Currently I’m working as a project manager at  {"   "}</span>
              <div className="flex items-center justify-center">
              <span className="text-[#8B3CFF] underline font-bold flex"> DEMO SOFTWARE LTD.</span>
              <Image  src={pen} alt="" width={30} height={100} className="-mt-5 skew-x-12"/>
              </div>
            </div>
            <p className="w-2xl text-justify mt-5">
              As a Web Developer, I’m passionate about creating websites that
              not only look amazing but also work seamlessly for users. With
              experience in both front-end and back-end technologies, I specialize
              in building responsive, secure, and scalable web solutions that meet
              the unique needs of each client. I focus on writing clean, efficient
              code and designing intuitive user experiences, ensuring that every
              project is both functional and visually appealing. I stay on top of
              the latest industry trends and best practices to deliver high-quality
              work on time and within budget, every time. <br />
            

              Collaboration is at the heart of my workflow. I enjoy working closely
              with clients and team members to transform ideas into reality,
              leveraging agile methodologies to adapt to evolving project
              requirements. Whether it’s developing a custom web application,
              integrating APIs, or enhancing an existing platform, I’m committed to
              delivering solutions that exceed expectations and drive results.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
