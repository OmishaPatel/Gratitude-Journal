import "./Post.css";
import { Link } from "react-router-dom";
export const Post = ({ post }) => {
  const PF = "https://omi-gratitude-journal.herokuapp.com/images/";

  return (
    <Link to={`/post/${post.id}`} className="link">
      <div className="post">
        {post.photo ? (
          <img className="postImg" src={PF + post.photo} alt="" />
        ) : (
          <img
            className="postImg"
            src={`https://source.unsplash.com/random?gratitude?inspiration?sig=${Math.random()}`}
            alt=""
          />
        )}

        <div className="postInfo">
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </Link>
  );
};
