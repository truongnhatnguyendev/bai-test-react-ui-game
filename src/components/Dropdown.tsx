interface DropdownProps {
  label: string;
  onClick: () => void;
  isOpen: boolean;
  content: React.ReactNode;
}

export function Dropdown({ label, onClick, isOpen, content }: DropdownProps) {
  return (
    <div key={label}>
      <button
        className="w-full h-[47px] flex items-center justify-between bg-[#1e3558] px-5 py-4 rounded-xl text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-white text-base font-medium">{label}</span>
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            points="5 8 10 13 15 8"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && <div className="px-6 pb-2">{content}</div>}
    </div>
  );
}
