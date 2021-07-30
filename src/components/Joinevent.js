import React from "react";
import "./Joinevent.css";
import logo from "./image/logo.png";
import { BsPeopleCircle } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { RiHome6Fill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BsFillBellFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Fsbutton from "./fsbutton";

function Joinevent() {
  return (
    <div className="container-lg">
      <div className="container-md">
        <section>
          <br />
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <BsPeopleCircle color="white" align="center" size="2rem" />
        </section>
        <br />
        <br />
        <section>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <IoMdHome color="white" align="center" size="2rem" />
        </section>
        <br />
        <br />
        <section>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <BsFillStarFill color="white" align="center" size="2rem" />
        </section>
        <br />
        <br />
        <section>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaLightbulb color="white" align="center" size="2rem" />
        </section>
        <br />
        <section>
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ImBook color="white" align="center" size="2rem" />
        </section>
        <br />
        <br />
        <section>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <RiHome6Fill color="white" align="center" size="2rem" />
        </section>
        <br />
        <br />
        <section>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FiSettings color="white" align="center" size="2rem" />
        </section>
      </div>

      <div className="container-sm">
        <section className="header-logo">
          <img src={logo} id="logo"></img>
          <br />
          <br />
          <StepOne />
        </section>

        <section className="form-content-one"> </section>
        <br />
        <br />

        <section className="form-content-two">
          <div>
            <br />
            <br />
            &nbsp;&nbsp;
            <BsFillBellFill color="white" align="center" size="1rem" />
          </div>
          <br />
          <div>
            <br />
            &nbsp;&nbsp;
            <RiMessage2Fill color="white" align="center" size="1rem" />
          </div>
          <br />
          <div>
            <br />
            &nbsp;&nbsp;
            <FaPowerOff color="white" align="center" size="1rem" />
          </div>
          <br />
        </section>
      </div>
    </div>
  );
}
export default Joinevent;
