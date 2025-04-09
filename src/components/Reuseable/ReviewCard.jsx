import Image from "next/image";
import review from "@/assests/websiteIcons/review/review.png";
import quote from "@/assests/websiteIcons/review/quote.png";

const ReviewCard = ({ reviewText, index }) => {
  return (
    <div
      className={`w-96 bg-[rgb(54,16,104)] text-white p-3 rounded-lg h-60 ${
        index === 1 ? "-mt-20" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image src={review} alt="" />
          <p className="font-bold">5.0</p>
        </div>
        <Image src={quote} alt="" className="-mb-8 opacity-45" />
      </div>
      <p>{reviewText}</p>
    </div>
  );
};

export default ReviewCard;