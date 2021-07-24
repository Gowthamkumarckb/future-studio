import React, { useState } from "react";
import Calendar from "react-calendar";
import "./SelfDiary.css";
import "react-calendar/dist/Calendar.css";
import Fsbutton from "./fsbutton";

function SelfDiary() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
    <Fsbutton /> 
    <div className="calendar">
        <p>Calendar </p>
        <p className="diary">Diary</p>
      </div>
    <div className="calen">
      <Calendar onChange={onChange} value={value} />

      <div className="rec">
        <h2> Recent entries </h2>

        <p className="see"> see all </p>
      </div>
      <div>
        <textarea
          id="info1"
          type="textarea"
          placeholder="02/12/2020 &nbsp; info about today"
        />
      </div>
      <div>
        <textarea
          id="info2"
          type="textarea"
          placeholder="01/12/2020 &nbsp; info about today"
        />
      </div>
    </div>
    </div>
  );
}
export default SelfDiary;
