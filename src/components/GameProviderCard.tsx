import React from "react";

interface GameProviderCardProps {
  logo: string;
  name: string;
  totalGames: number;
}

export const GameProviderCard: React.FC<GameProviderCardProps> = ({
  logo,
  name,
  totalGames,
}) => {
  return (
    <div className="bg-primary-200 rounded-lg overflow-hidden sm:w-[156px] w-[120px] h-[122px] flex flex-col items-center justify-between text-white shadow-md">
      <div className="flex-1 flex items-center justify-center w-[93px] h-[30px]">
        <img src={logo} alt={name} className="max-h-[60px] object-contain" />
      </div>
      <div className="bg-primary-100 w-full text-center py-3">
        <p className="font-normal text-[13px] underline cursor-pointer">
          {name}
        </p>
        <p className="text-xs text-gray-400 underline cursor-pointer">
          {totalGames} games
        </p>
      </div>
    </div>
  );
};
