import "./Posts.css";
import { Post } from "../post/Post";
import { Default } from "../default/Default";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import ReactPaginate from "react-paginate";
import { Loading } from "../loader/Loading";
export const Posts = () => {
  const { user } = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const size = 6;
      const response = await axios.get(
        `http://localhost:5000/api/posts/?user=${user.others.username}&page=${pageNum}&size=${size}`,
        {
          headers: {
            accessToken: user.accessToken,
          },
        }
      );
      setPosts(response.data.content);
      setPageCount(response.data.totalPages);
    };
    fetchPosts();
    setLoading(false);
  }, [user, pageNum, pageCount]);
  const changePage = ({ selected }) => {
    console.log("click");
    console.log(pageNum);
    setPageNum(selected + 1);
  };
  if (loading) {
    return <Loading />;
  }
  if (user != null) {
    if (posts.length > 0) {
      return (
        <>
          <div className="posts">
            {posts.map((post, id) => {
              return <Post key={id} post={post} />;
            })}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              breakLabel={"..."}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              activeClassName={"paginationActive"}
            />
          </div>
          <div></div>
        </>
      );
    } else {
      return "No posts to display click on write to start writing journal";
    }
  } else {
    return <Default />;
  }
};
