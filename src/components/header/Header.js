import "./Header.css";
import headerImage from "../images/header-image.jpg";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">My Gratitude</span>
        <span className="headerTitleLarge">Journal</span>
      </div>
      <img className="headerImg" src={headerImage} alt="header-image" />
    </div>
  );
};
