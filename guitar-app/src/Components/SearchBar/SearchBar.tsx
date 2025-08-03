import { useEffect, useState } from "react";
import "./SearchBar.css";
interface SearchBarProps {
  defaultValue: string | null;
  placeholder?: string;
  onSearch: (value: string) => void;
}
export default function SearchBar({
  defaultValue,
  onSearch,
  placeholder,
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    defaultValue && onSearch(value);
  }, [defaultValue, value, onSearch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <section className="searchBar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="#B8B8C0"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="#B8B8C0"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </section>
  );
}
