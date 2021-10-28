import "./SinglePost.css";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        {/* <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet. */}
        <div className="singlePostEdit">
          <i className="far fa-edit singlePostIcon"></i>
          <i className="far fa-trash-alt singlePostIcon"></i>
        </div>
        {/* </h1> */}
        <div className="singlePostInfo">
          <span className="singlePostDate">Oct 20, 2021</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          vitae harum, minima nulla, hic dolorum at inventore consequuntur, iste
          eos ipsum. Porro ipsum quasi assumenda deserunt, alias tenetur ad!
          Odio aperiam praesentium non et at nulla dolorum optio, repellat
          dolore magni distinctio explicabo, error sint? Id quod voluptates
          voluptatem laboriosam?
        </p>
      </div>
    </div>
  );
};
