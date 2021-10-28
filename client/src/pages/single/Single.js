import "./Single.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { SinglePost } from "../../components/singlePost/SinglePost";

export const Single = () => {
  const user = false;
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};
