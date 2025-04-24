import { Swiper, SwiperSlide } from "swiper/react";
import { GameSection } from "components/GameSection";
import { GameCard } from "components/Card/Card";
import { useEffect, useState } from "react";
import { IGame } from "services/game/game.interface";
import { gameService } from "services/game/game.service";

export const ExclusiveGames = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    gameService.getMany().then(setGames);
  }, []);

  return (
    <GameSection title="Exclusive Games" seeAllLink="/exclusive">
      <Swiper spaceBetween={20} slidesPerView={"auto"}>
        {games.map((game) => (
          <SwiperSlide key={game.id} style={{ width: 160 }}>
            <GameCard {...game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </GameSection>
  );
};
