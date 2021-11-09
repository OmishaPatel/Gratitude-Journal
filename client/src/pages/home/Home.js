import "./Home.css";
import { Header } from "../../components/header/Header";
import { Posts } from "../../components/posts/Posts";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "../../context/Context";

export const Home = () => {
  const { user } = useContext(Context);
  return (
    <>
      <Header />

      <div className="home">
        {user != null && <Posts />}

        <Sidebar />
      </div>
    </>
  );
};
