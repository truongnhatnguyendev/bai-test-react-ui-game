import { Link } from "react-router-dom";

interface CommonListItem {
  label: string;
  to: string;
}

interface CommonListProps {
  items: CommonListItem[];
}

export const CommonList = ({ items }: CommonListProps) => {
  return (
    <ul className="space-y-5 text-gray-400 mt-3 text-[15px]">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.to}
            className="block cursor-pointer hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
