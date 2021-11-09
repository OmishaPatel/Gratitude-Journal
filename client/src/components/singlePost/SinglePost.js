import { useLocation } from "react-router";
import "./SinglePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);
  const { user } = useContext(Context);
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);
  const PF = "https://omi-gratitude-journal.herokuapp.com/images/";
  useEffect(() => {
    const getSinglePost = async () => {
      const res = await axios.get(
        "https://omi-gratitude-journal.herokuapp.com/api/posts/" + path
      );
      setPost(res.data);
      setDesc(res.data.desc);
    };
    getSinglePost();
  }, [path]);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        "https://omi-gratitude-journal.herokuapp.com/api/posts/" + path,
        {
          headers: {
            accessToken: user.accessToken,
          },
          data: {
            username: user.others.username,
          },
        }
      );

      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        "https://omi-gratitude-journal.herokuapp.com/api/posts/" + path,
        {
          username: user.others.username,
          desc,
        }
      );
      setUpdate(false);
      console.log("handle update");
    } catch (err) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}

        <div className="singlePostEdit">
          <i
            className="far fa-edit singlePostIcon"
            onClick={() => setUpdate(true)}
          ></i>
          <i
            className="far fa-trash-alt singlePostIcon"
            onClick={handleDelete}
          ></i>
        </div>

        <div className="singlePostInfo">
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {update && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};
