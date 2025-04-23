import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";

interface GameSectionProps {
  title: string;
  seeAllLink?: string;
  children: ReactNode;
}

export const GameSection = ({
  title,
  seeAllLink = "",
  children,
}: GameSectionProps) => {
  return (
    <section className="py-8 bg-[#0B1D3A] text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <Link
            to={seeAllLink}
            className="text-sm text-gray-300 hover:text-white sm:block hidden"
          >
            SEE ALL
          </Link>
          <TbGridDots className="text-xl" />
        </div>
      </div>

      <div className="overflow-hidden">{children}</div>
    </section>
  );
};
