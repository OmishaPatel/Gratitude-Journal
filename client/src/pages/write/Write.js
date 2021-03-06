import axios from "axios";
import { Context } from "../../context/Context";
import { useState, useContext } from "react";
import "./Write.css";
import { Spinner } from "../../components/loader/Spinner";
export const Write = () => {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newPost = {
      username: user.others.username,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(
          "https://omi-gratitude-journal.herokuapp.com/api/upload",
          data
        );
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "https://omi-gratitude-journal.herokuapp.com/api/posts",
        newPost,
        {
          headers: {
            accessToken: user.accessToken,
          },
        }
      );
      setLoading(false);
      window.location.replace("/post/" + res.data.id);
    } catch (err) {}
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}

      <form onSubmit={handleSubmit} className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="far fa-image writeIcon"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder='I am grateful for "what" , because "why"..'
            type="text"
            className="writeInput writeText"
            style={{ resize: "none" }}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className="writeSubmit" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
