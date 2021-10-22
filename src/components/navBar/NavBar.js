import "./NavBar.css";
import logo from "../images/logo.png";
import bio from "../images/bio.jpg";
import { Theme } from "../theme/Theme";
export const NavBar = () => {
  return (
    <div className="nav">
      <div className="topLeft">
        <img src={logo} alt="gratitude-logo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">INFO</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={bio} className="topImg" alt="user-image" />
        <i className="topSearchIcon fas fa-search"></i>
        <Theme />
      </div>
    </div>
  );
};
