import "./NavBar.css";
import logo from "../images/logo.png";
import bio from "../images/bio.jpg";
import { Theme } from "../theme/Theme";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export const NavBar = () => {
  const { user, dispatch } = useContext(Context);
  console.log(user);
  const PF = "https://omi-gratitude-journal.herokuapp.com/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };
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
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user != null ? (
          <Link to="/settings">
            {user.others.profilePicture ? (
              <img
                src={PF + user.others.profilePicture}
                className="topImg"
                alt="user-image"
              />
            ) : (
              <i className="far fa-user defaultImg"></i>
            )}
          </Link>
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

        <Theme />
      </div>
    </div>
  );
};
