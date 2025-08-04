import "./Header.css";
import logo from "../../../public/logo.png"

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <div>VibeStrings</div>
    </div>
  );
}
