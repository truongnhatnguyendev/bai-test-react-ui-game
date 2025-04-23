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
    <div className="bg-[#122344] rounded-lg overflow-hidden w-[156px] h-[122px] flex flex-col items-center justify-between text-white shadow-md">
      <div className="flex-1 flex items-center justify-center w-[93px] h-[30px]">
        <img src={logo} alt={name} className="max-h-[60px] object-contain" />
      </div>
      <div className="bg-[#152e54] w-full text-center py-3">
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-gray-300 underline cursor-pointer">
          {totalGames} games
        </p>
      </div>
    </div>
  );
};
