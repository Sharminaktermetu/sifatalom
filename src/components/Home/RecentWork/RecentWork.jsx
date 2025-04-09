import SectionHeader from "@/components/Reuseable/SectionHeader";

import recentdata from "../../../assests/recent/website.png";
import recentdata1 from "../../../assests/websiteIcons/workIcon/Link.png";
import recentdata2 from "../../../assests/websiteIcons/workIcon/Eye.png";

import ReusableImageCard from "@/components/Reuseable/RecentWork";
import { Button } from "@/components/ui/button";


const imageCardsData = [
  {
    imageSrc: recentdata,
    title: "Who We Are",
    overlayImages: [recentdata1,recentdata2], // Add more images as needed
    overlayBackground: "#361068",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1,recentdata2],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1,recentdata2],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1,recentdata2],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1, ],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1,recentdata2],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1,recentdata2],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1,recentdata2],
    overlayBackground: "#2a0b4d",
  },
  {
    imageSrc: recentdata,
    title: "Our Vision",
    overlayImages: [recentdata1,recentdata2],
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
      <Button variant={'custom'} className='py-8 px-12'>LOAD MORE +</Button>
    </div>
  );
};

export default RecentWork;
