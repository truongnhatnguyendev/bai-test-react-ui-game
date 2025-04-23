import { Swiper, SwiperSlide } from "swiper/react";
import { GameSection } from "../../../components/GameSection";
import { GameCard, GameCardProps } from "../../../components/Card";

const games: GameCardProps[] = [
  { title: "Deep Dive", image: "/images/deep.jpg", tag: "HOT" },
  { title: "Match Hero", image: "/images/match.jpg", tag: "NEW" },
  { title: "Match Hero", image: "" },
  { title: "Football Bet", image: "/src/assets/image.png" },
  { title: "Football Bet", image: "/src/assets/image.png" },
  { title: "Football Bet", image: "/src/assets/image.png" },
  { title: "Football Bet", image: "/src/assets/image.png" },
  { title: "Football Bet", image: "/src/assets/image.png" },
  { title: "Football Bet", image: "/src/assets/image.png" },
  { title: "Football Bet", image: "/src/assets/image.png" },
  { title: "Football Bet", image: "/src/assets/image.png" },
];

export const ExclusiveGames = () => {
  return (
    <GameSection title="Exclusive Games" seeAllLink="/exclusive">
      <Swiper spaceBetween={20} slidesPerView={"auto"}>
        {games.map((game, index) => (
          <SwiperSlide key={index} style={{ width: 160 }}>
            <GameCard {...game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </GameSection>
  );
};
