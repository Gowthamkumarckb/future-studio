import React from 'react';
import Fsbutton from "./fsbutton";
import ProgressBar from "./Progress";
import "./ActivityStudio.css";

function ActivityStudio() {
  return (
    <div>
      <div className="Gap">
        <Fsbutton />
        <br />
        <div>
          <h3>Milestone Timeline</h3>
        </div>
        <div>
          <input type="box" className="box" />
        </div>
        <br />
        <div>
          <button className="YourActivities" type="Submit">
            Your Activities
          </button>
          <button className="TaskManager" type="Submit">
            Task Manager
          </button>
        </div>
        <div className="container1">
              <div className="Top">
                <h3>Activity Box</h3>
              </div>
              <div className="container2">
                <label className="mile"> Milestone1</label>
                <ProgressBar />
              </div>
              <form>
                <div>
              <textarea
                className="tk"
                placeholder="Task1"
               ></textarea>
              <input type="checkbox" className="check" />
              </div>
               <div>
              <textarea
                className="tk"
                placeholder="Task2"
              ></textarea>
              <input type="checkbox" className="check" />
              </div>
              </form>
        </div>
      </div> 
    </div>
  )
}

export default ActivityStudio;