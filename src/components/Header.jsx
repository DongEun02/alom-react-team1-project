import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header-title">Kimbab CINEMA</h1>
      </Link>
    </div>
  );
};

export default Header;
