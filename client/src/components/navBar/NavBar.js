import "./NavBar.css";
import logo from "../images/logo.png";
import bio from "../images/bio.jpg";
import { Theme } from "../theme/Theme";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const user = false;
  return (
    <div className="nav">
      <div className="topLeft">
        <img src={logo} alt="gratitude-logo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/info" className="link">
              INFO
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img src={bio} className="topImg" alt="user-image" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
        <Theme />
      </div>
    </div>
  );
};
