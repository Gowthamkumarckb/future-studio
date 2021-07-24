import React from 'react';
import "./fsbutton.css";

function Fsbutton() {
  return (
    <div>
      <div className="Gap">
        <h1>Future Studio</h1>
        <button className="ActivityStudio" type="Submit">
          Activity Studio
        </button>
        <button className="ZDSelfDiary" type="Submit">
          ZD Self-Diary
        </button>
        <button className="ZDMotivationalShala" type="Submit">
          ZD Motivational Shala
        </button>
        <button className="AdiviseFromWise" type="Submit">
          Adivise from wise
        </button>
      </div>
    </div>
  )
}

export default Fsbutton;

