import { SliderBanner } from "components/SliderBanner";
import { IMAGES } from "assets";

export const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Another Event: Win Big!",
      buttonText: "PLAY NOW",
      imageUrl: IMAGES.banner,
      tag: "Hot Promo",
    },
    {
      id: 2,
      title: "Piggy Christmas Tap: €35,000 For Your Wins",
      buttonText: "JOIN AND WIN",
      imageUrl: IMAGES.banner,
      tag: "Exclusive Tournament",
      onClick: () => console.log("Join clicked"),
    },
    {
      id: 3,
      title: "Another Event: Win Or Lose To €10,000!",
      buttonText: "PLAY NOW",
      imageUrl: IMAGES.banner,
      tag: "Hot Promo",
    },
  ];
  return (
    <div className="sm:h-[486px] sm:p-0 p-5 mb-0">
      <SliderBanner banners={banners} />
    </div>
  );
};
