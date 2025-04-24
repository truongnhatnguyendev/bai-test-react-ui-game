import { IGame } from "services/game/game.interface";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export const GameCard = ({ title, tag, image, id }: Partial<IGame>) => {
  const navigator = useNavigate();

  const handleClick = (id?: number) => {
    if (!id) return;
    navigator(`/game/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className="card relative bg-primary-100 text-white rounded-xl w-[160px] h-[230px] cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-xl"
      />
      {tag && (
        <div
          className={`absolute ${
            tag === "HOT" ? "tagHot" : "tagNew"
          } top-4 -left-[4px] ${
            tag === "NEW" ? "bg-[#18C27A]" : "bg-red-600"
          } text-white text-xs  px-1  rounded-r-xs rounded-t-xs z-10`}
        >
          {tag}
        </div>
      )}
      <span className="absolute z-50 bottom-1.5 tracking-[1.12px] align-middle uppercase left-0 right-0 flex items-center font-normal justify-center text-center text-[8px] ">
        {title}
      </span>
    </div>
  );
};
