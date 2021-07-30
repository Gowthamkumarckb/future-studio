import React from "react";
import "./Rightbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function rightbar() {
  return (
    <div className="rightbar-container">
      <div className="icon-continter">
        <FontAwesomeIcon icon="bell" id="icon" />
        <FontAwesomeIcon icon="comment" id="icon" />
        <FontAwesomeIcon icon="power-off" id="icon" />
      </div>
    </div>
  );
}

export default rightbar;
