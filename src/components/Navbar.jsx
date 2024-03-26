import "./navbar.scss";
import searchPNG from "/search-normal.png";
import heartPNG from "/heart-filled.png";
import notificationPNG from "/notification.png";
import settingPNG from "/setting-2.png";
import userSVG from "/user.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>
          <Link to="/">MORENT</Link>
        </h1>
        <form>
          <img src={searchPNG} alt="" />
          <input type="text" placeholder="Search something here" />
        </form>
      </div>
      <div className="right">
        <div className="icons">
          <span>
            <img src={heartPNG} alt="" />
          </span>
          <span>
            <img src={notificationPNG} alt="" />
            <div className="dot"></div>
          </span>
          <span>
            <img src={settingPNG} alt="" />
          </span>
        </div>
        <div className="user">
          <span>
            <img src={userSVG} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
