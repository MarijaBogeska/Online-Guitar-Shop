import "./Button.css";

interface ButtonProps {
  text: string;
  arrow?: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ text, arrow,onClick,disabled }: ButtonProps) {
  return <button className="Button" onClick={onClick} disabled={disabled}>
    {arrow === "left" && "<"}
    <div className="btnText">{text}</div>
    {arrow === "right" && ">"}
  </button>;
}
