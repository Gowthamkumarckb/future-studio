import React from "react";
import logo from "./image/logo.png";
import "./DreamCommunity.css";
import { Container, Row, Col } from "react-bootstrap";
function DreamCommunity() {
  return (
    <div>
      <div className="header-logo">
        <img src={logo} id="logo"></img>
      </div>
    </div>
  );
}

export default DreamCommunity;
