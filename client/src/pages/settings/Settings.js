import { Sidebar } from "../../components/sidebar/Sidebar";
import "./Settings.css";

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update Account</span>
          <span className="settingsDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPicture">
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="far fa-user-circle settingsProfileIcon"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Your name" />
          <label>Email</label>
          <input type="email" placeholder="name@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="dataButton">Download Data (CSV format)</button>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
