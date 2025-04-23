import { useNavigate } from "react-router-dom";
import { IconTextButton } from "components/IconTextButton";
import { GrGamepad } from "react-icons/gr";
import { BsSliders } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import { ICONS } from "assets";

interface MenuOptionsProps {
  label: string;
  to: string;
  icon?: React.ReactNode;
  img?: string;
  background?: string;
  visibleOn: "desktop" | "mobile" | "both";
}

export const MenuOptions = () => {
  const navigate = useNavigate();
  const menus: MenuOptionsProps[] = [
    {
      label: "Diamond mine",
      to: "/games",
      img: ICONS.diamond,
      visibleOn: "desktop",
    },
    {
      label: "VIP",
      to: "/vip",
      img: ICONS.vip,
      visibleOn: "desktop",
    },
    {
      label: "Promotion",
      to: "/promotions",
      img: ICONS.promotion,
      visibleOn: "desktop",
    },
    {
      label: "Hot Match",
      to: "/games",
      img: ICONS.hot,
      visibleOn: "desktop",
    },
    {
      label: "P2P Transaction",
      img: ICONS.p2p,
      to: "/games",
      visibleOn: "desktop",
    },
    {
      label: "Search",
      to: "/search",
      icon: <CiSearch />,
      background: "bg-[#152e54]",
      visibleOn: "mobile",
    },
    {
      label: "Games",
      to: "/games",
      icon: <GrGamepad />,
      background: "bg-[#152e54]",
      visibleOn: "both",
    },
    {
      label: "Providers",
      to: "/providers",
      icon: <BsSliders />,
      background: "bg-[#152e54]",
      visibleOn: "both",
    },
  ];

  function handleClick(path: string) {
    navigate(path);
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-3">
      {menus.map((menu, idx) => {
        const visibilityClass =
          menu.visibleOn === "mobile"
            ? "block sm:hidden"
            : menu.visibleOn === "desktop"
            ? "hidden sm:block"
            : "block";
        return (
          <div key={idx} className={visibilityClass}>
            <IconTextButton
              img={menu.img}
              icon={menu.icon}
              path={menu.to}
              label={menu.label}
              classname={menu.background}
              onClick={handleClick}
            />
          </div>
        );
      })}
    </div>
  );
};
