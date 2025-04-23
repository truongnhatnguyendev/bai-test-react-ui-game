import { Swiper, SwiperSlide } from "swiper/react";
import { GameSection } from "components/GameSection";
import { GameProviderCard } from "components/GameProviderCard";

export const Providers = () => {
  const providers = [
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Evolution",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Spribe",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Turbo Games",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Wazdan",
      totalGames: 312,
    },
    {
      logo: "/src/assets/providerGame/image.png",
      name: "Wazdan",
      totalGames: 312,
    },
  ];

  return (
    <GameSection title="All Providers" seeAllLink="/exclusive">
      <Swiper spaceBetween={20} slidesPerView={"auto"}>
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
    </GameSection>
  );
};
