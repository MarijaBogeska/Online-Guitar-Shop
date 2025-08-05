import { useState } from "react";
import "./Dropdown.css";

interface DropdownProps {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
  setCurrentPage: (value: number) => void | null;
  placeholder?: string;
}

export default function Dropdown({
  options,
  selected,
  setSelected,
  setCurrentPage,
  placeholder = "Filter by type",
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="Dropdown">
      <div className="dropdown-header" onClick={() => setOpen(!open)} style={{color: open ? "#FF6C33" : "#B8B8C0", border: `1px solid ${open ? "#FF6C33": "#B8B8C0"}` }}>
        {selected || placeholder}
        <span className="arrow" style={{ color: open ? "#FF6C33" : "#B8B8C0" }}>
          ▽
        </span>
        <span className="filter-icon">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_4418_9865)">
              <path
                className="filter-stroke"
                d="M5.40002 2.09961H18.6C19.7 2.09961 20.6 2.99961 20.6 4.09961V6.29961C20.6 7.09961 20.1 8.09961 19.6 8.59961L15.3 12.3996C14.7 12.8996 14.3 13.8996 14.3 14.6996V18.9996C14.3 19.5996 13.9 20.3996 13.4 20.6996L12 21.5996C10.7 22.3996 8.90002 21.4996 8.90002 19.8996V14.5996C8.90002 13.8996 8.50002 12.9996 8.10002 12.4996L4.30002 8.49961C3.80002 7.99961 3.40002 7.09961 3.40002 6.49961V4.19961C3.40002 2.99961 4.30002 2.09961 5.40002 2.09961Z"
                strokeWidth="1.5"
                stroke={open ? "#FF6C33" : "#B8B8C0"}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="filter-stroke"
                d="M10.93 2.09961L6 9.99961"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4418_9865">
                <rect width="24" height="24" fill="#B8B8C0" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
      {open && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown-option ${
                option === selected ? "active" : ""
              }`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
                if (setCurrentPage) {
                  setCurrentPage(1);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
