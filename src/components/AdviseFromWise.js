import React from "react";
import "./AdviseFromWise.css";
import { SiAddthis } from "react-icons/si";
import ReactRoundedImage from "react-rounded-image";
import Fsbutton from "./fsbutton";

function AdviseFromWise() {
  return (
    <div>
      <Fsbutton />
      <button id="wise" type="Submit">
        Talk to Wise
      </button>
      <br />
      <div className="container">
        <div>
          <p id="introducing">
            Introducing
            <br />
            TALK TO WISE
          </p>
        </div>
        <div>
          <button id="butsix" type="Submit">
            Join Event&nbsp;&nbsp;&nbsp;
            <SiAddthis color="purple" size="0.9rem" className="add" />
          </button>
        </div>
      </div>
      <br />
      <div className="query">
        <h2> Add your Query </h2>
      </div>
      <br />
      <div>
        <textarea id="YourQuery" type="textarea" />
      </div>
      <br />
      <br />
      <br />
      <div className="query">
        <h2> Recent entries </h2>
      </div>
      <div className="seeall">
        <p> see all </p>
      </div>{" "}
      <br />
      <div className="photo">
        <ReactRoundedImage roundedSize="0" imageWidth="50" imageHeight="50" />
      </div>
      <div>
        <textarea id="Queryone" type="textarea" />
      </div>
      <br />
      <br />
      <div className="photo">
        <ReactRoundedImage roundedSize="0" imageWidth="50" imageHeight="50" />
      </div>
      <div>
        <textarea id="Querytwo" type="textarea" />
      </div>
      <br />
      <br />
    </div>
  );
}
export default AdviseFromWise;
