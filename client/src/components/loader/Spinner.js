import "./Loading.css";
import React from "react";

export const Spinner = () => {
  return (
    <div className="loadingWrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
