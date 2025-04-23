import React from "react";

interface IconTextButtonProps {
  icon?: React.ReactNode;
  img?: string;
  label: string;
  path: string;
  classname?: string;
  onClick: (path: string) => void;
}

export const IconTextButton: React.FC<IconTextButtonProps> = ({
  icon,
  img,
  label,
  path,
  classname,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(path)}
      className={`flex items-center justify-center align-middle gap-2 sm:w-[197px] w-[122px] h-[57px] rounded-lg border border-[#294060]  text-white hover:opacity-90 transition cursor-pointer ${classname}`}
    >
      {img && <img src={img} alt={label} className="w-5 h-5 object-contain " />}
      {icon && <div className="mr-1 text-xl">{icon}</div>}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};
