export interface GameCardProps {
  title: string;
  tag?: "HOT" | "NEW";
  image: string;
}

export const GameCard = ({ title, tag, image }: GameCardProps) => {
  return (
    <div className="relative bg-primary-100 text-white rounded-xl overflow-hidden w-[160px] h-[230px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {tag && (
        <div
          style={{
            clipPath: "polygon(3px 7px, 100% 1px, 100% 78%, 0% 100%)",
          }}
          className={`absolute top-4 -left-[3px] ${
            tag === "NEW" ? "bg-[#18C27A]" : "bg-red-600"
          } text-white text-xs  px-2 py-1  rounded-sm z-10`}
        >
          {tag}
        </div>
      )}
      <div className="absolute z-50 bottom-1.5 tracking-[1.12px] align-middle uppercase left-0 right-0 flex items-center font-normal justify-center text-center text-[8px] ">
        {title}
      </div>
    </div>
  );
};
