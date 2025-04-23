import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { SiAndroid, SiApple } from "react-icons/si";
import { useState } from "react";
import { Dropdown } from "../../components/Dropdown";
import { CommonList } from "../../components/CommonList";

const games = [
  { label: "Game 1", to: "/games/1" },
  { label: "Game 2", to: "/games/2" },
  { label: "Game 3", to: "/games/3" },
  { label: "Game 14", to: "/games/14" },
];

const abouts = [
  { label: "About US", to: "/about/1" },
  { label: "Promotions", to: "/about/2" },
  { label: "VIP", to: "/about/3" },
  { label: "Help Center", to: "/about/14" },
  { label: "Awards & Certificates", to: "/about/14" },
  { label: "App", to: "/about/14" },
];

const Informations = [
  { label: "General Terms & Conditions", to: "/" },
  { label: "Responsible Gaming Policy", to: "/" },
  { label: "Sports Betting Rules", to: "/" },
  { label: "Privacy and Cookies Policy", to: "/" },
  { label: "Payment Methods", to: "/" },
  { label: "Limits", to: "/" },
];

const menuData = [
  {
    label: "Games",
    content: <CommonList items={games} />,
  },
  {
    label: "About",
    content: <CommonList items={abouts} />,
  },
  {
    label: "Legal Information",
    content: <CommonList items={Informations} />,
  },
];
const socialIcons = [FaTelegramPlane, FaFacebookF, FaInstagram, FaTwitter];

export const Footer = () => {
  // State cho accordion mobile
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  return (
    <footer className="bg-[#152e54] text-white py-10">
      <div className="hidden md:flex max-md:flex-col gap-10 justify-between text-sm container mx-auto px-6">
        <div>
          <h4 className="font-semibold text-base mb-2">Help Center</h4>
          <p className="mb-3 text-gray-300">If you have any questions?</p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded mb-4">
            GET ANSWERS
          </button>
          <div className="flex gap-3 text-xl text-gray-300">
            {socialIcons.map((Icon, i) => (
              <Icon key={i} />
            ))}
          </div>
        </div>

        {menuData.map((item, index) => (
          <div key={index}>
            <h4 className="font-semibold text-base mb-2">{item.label}</h4>
            {item.content}
          </div>
        ))}
        <div className="flex flex-col items-start gap-2">
          <div className="flex w-[160px] items-center gap-2 bg-[#12294A] px-3 py-2 rounded cursor-pointer">
            <SiApple size={24} />
            <span>
              Bluechip App <p>for Mac OS</p>
            </span>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-center gap-1 w-[76px] bg-[#12294A] px-3 py-2 rounded cursor-pointer">
              <SiAndroid size={24} />
              <span className="text-[#90A2BD]">Android</span>
            </div>
            <div className="flex flex-col items-center w-[76px] gap-1 bg-[#12294A] px-3 py-2 rounded cursor-pointer">
              <SiApple size={24} />
              <span className="text-[#90A2BD]">iOS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full max-w-md mx-auto flex flex-col gap-6 px-3">
        {menuData.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          const handleClick = () =>
            setOpenIndexes((prev) =>
              isOpen ? prev.filter((i) => i !== idx) : [...prev, idx]
            );
          return (
            <Dropdown
              key={item.label}
              label={item.label}
              onClick={handleClick}
              isOpen={isOpen}
              content={item.content}
            />
          );
        })}

        <div className="flex flex-col items-center gap-2 mt-2">
          <span className="text-base text-white mb-1">Follow Us</span>
          <div className="flex justify-center gap-7 text-2xl text-white">
            {socialIcons.map((Icon, i) => (
              <Icon key={i} />
            ))}
          </div>
        </div>

        <div className="bg-[#1e3558] rounded-xl px-5 py-5 flex sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-base mb-1">Help Center</h4>
            <p className="text-gray-300 text-sm">If you have any questions?</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-5 py-2 rounded self-end sm:self-auto mt-2 sm:mt-0">
            GET ANSWERS
          </button>
        </div>

        <div className="flex gap-3">
          <div className="bg-[#1e3558] flex-1 rounded-xl flex items-center gap-3 px-4 py-3">
            <SiAndroid size={28} className="text-white" />
            <div>
              <div className="font-medium text-white">Bluechip App</div>
              <div className="text-[#90A2BD] text-xs">for Android</div>
            </div>
          </div>
          <div className="bg-[#1e3558] flex-1 rounded-xl flex items-center gap-3 px-4 py-3">
            <SiApple size={28} className="text-white" />
            <div>
              <div className="font-medium text-white">Bluechip App</div>
              <div className="text-[#90A2BD] text-xs">for iOS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
