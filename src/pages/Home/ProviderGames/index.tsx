import { Swiper, SwiperSlide } from "swiper/react";
import { GameSection } from "components/GameSection";
import { GameProviderCard } from "components/GameProviderCard";

import { IMAGES } from "assets";

export const Providers = () => {
  const providers = [
    {
      logo: IMAGES.provider,
      name: "Evolution",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Spribe",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Turbo Games",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: IMAGES.provider,
      name: "Wazdan",
      totalGames: 312,
    },
  ];

  return (
    <GameSection title="All Providers" seeAllLink="/exclusive">
      <div className="sm:mx-10 mx-0">
        <Swiper
          breakpoints={{
            0: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 20,
            },
          }}
          slidesPerView={"auto"}
        >
          {providers.map((game, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <GameProviderCard
                logo={game.logo}
                name={game.name}
                totalGames={game.totalGames}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </GameSection>
  );
};
