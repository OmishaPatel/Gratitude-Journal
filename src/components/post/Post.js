import "./Post.css";
export const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        {/* <span className="postTitle">Lorem ipsum dolor.</span> */}

        <span className="postDate">Oct 20,2021</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui
        recusandae officia aliquid rem magnam rerum voluptatem tenetur
        dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        qui recusandae officia aliquid rem magnam rerum voluptatem teneturLorem
        ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui
        recusandae officia aliquid rem magnam rerum voluptatem tenetur dolor.
        dolor.
      </p>
    </div>
  );
};
