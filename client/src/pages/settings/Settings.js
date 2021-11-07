import { Sidebar } from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./Settings.css";
import axios from "axios";
import { useContext, useState } from "react";
import logo from "../../components/images/logo.png";

export const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [deleteacc, setDeleteacc] = useState(false);
  const PF = "http://localhost:5000/images/";
  console.log(user.others.id);
  const handleData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/data/?user=" + user.others.username
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "gratitudejournal.csv");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      id: user.others.id,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/" + user.others.id,
        updatedUser,
        {
          headers: {
            accessToken: user.accessToken,
          },
        }
      );
      setSuccess(true);
      setTimeout(function () {
        window.location.replace("/login");
      }, 3000);
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  const deleteData = {
    id: user.others.id,
    username: user.others.username,
  };
  const handleDelete = async () => {
    alert("Are you sure you want to delete your account?");
    try {
      await axios.delete(
        "http://localhost:5000/api/users/" + user.others.id,

        {
          headers: {
            accessToken: user.accessToken,
          },
          data: {
            id: user.others.id,
            username: user.others.username,
          },
        }
      );
      setDeleteacc(true);
      setTimeout(function () {
        dispatch({ type: "LOGOUT" });
      }, 2000);

      setTimeout(function () {
        window.location.replace("/");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPicture">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : PF + user.others.profilePicture
              }
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="far fa-user-circle settingsProfileIcon"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label>Email</label>
          <input
            type="email"
            placeholder={user.others.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
        <button className="dataButton" type="submit" onClick={handleData}>
          Download Data (CSV format)
        </button>
        <button className="deleteButton" type="submit" onClick={handleDelete}>
          Delete Account
        </button>
        {deleteacc && (
          <span
            style={{
              color: "green",
              textAlign: "center",
              marginTop: "20px",
              marginLeft: "15px",
            }}
          >
            Your account has been deleted...
          </span>
        )}
      </div>
      <Sidebar />
    </div>
  );
};
