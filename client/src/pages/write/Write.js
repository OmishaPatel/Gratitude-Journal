import "./Write.css";

export const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="writeImg"
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="far fa-image writeIcon"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          {/* <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          /> */}
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder='I am grateful for "what" , because "why"..'
            type="text"
            className="writeInput writeText"
            style={{ resize: "none" }}
          ></textarea>
          <button className="writeSubmit">Save</button>
        </div>
      </form>
    </div>
  );
};
