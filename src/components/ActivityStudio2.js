import React from 'react';
import "./ActivityStudio2.css";
import { BsPencil } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import Fsbutton from "./fsbutton";

function ActivityStudio2() {
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
        </div><br/><br/>
        <div> 
          <textarea id="taskone" type="textarea" 
          placeholder="TASK 1 &nbsp; Status Completed"
          />
        </div><br/><br/>
        <div>
          <textarea id="tasktwo" type="textarea"
          placeholder="TASK 2 &nbsp; Status-Ongoing"
          />
          <BsPencil  color='purple' size='1.5rem'/>&nbsp;
          <BsFillTrashFill color='purple' size='1.5rem' />
          </div><br/><br/>
          <div id="text">
          <h4>Add New Task</h4>
          </div>
          <div id="icon">
          <SiAddthis color='purple' size='1.5rem'/>
          </div>
          <br/><br/>
      </div>
        </div>
    )
}

export default ActivityStudio2;
