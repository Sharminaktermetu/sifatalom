import SectionHeader from "@/components/Reuseable/SectionHeader";
import recent from "../../../assests/topasset/recent.png";
import Image from "next/image";
import recentdata from "../../../assests/recent/website.png";
import recentdata1 from "../../../assests/recent/2.png";
import ReusableImageCard from "@/components/Reuseable/RecentWork";
import DevelopmentSystem from "./DevepmentSystem/DevelopmentSystem";

const imageCardsData = [
  {
    imageSrc: recentdata,
    title: "Who We Are",
    overlayImages: [recentdata1], // Add more images as needed
    overlayBackground: "#361068",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1],
    overlayBackground: "#2a0b4d",
  },
];
const RecentWork = () => {
  return (
    <div className="mt-40">
      <SectionHeader topTitle={'Portfolio'} title={'MY RECENT WORK'}/>
      <div className="mt-32  flex justify-center items-center rounded-xl">
        <div className="grid grid-cols-3 justify-items-center gap-5">
          {imageCardsData.map((item, index) => (
            <ReusableImageCard key={index} {...item} />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default RecentWork;
