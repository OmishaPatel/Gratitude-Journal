import "./Posts.css";
import { Post } from "../post/Post";
import { Default } from "../default/Default";
export const Posts = () => {
  const user = true;
  return <div className="posts">{user ? <Post /> : <Default />}</div>;
};
