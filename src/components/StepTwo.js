import React from 'react'
import { MdFolder } from "react-icons/md";
import "./StepTwo.css";

function StepTwo() {
  return (
    <div>
      <div className="Gap">
        <h1>Future Studio</h1>

        <form>
          <div>
            <p style={{ color: "#6200D3" }}>Pick your Achiever Mate</p>
          </div>
          <div className="radio">
            <label>
              <input type="radio" className="rad"/>
              Parents
            </label>
          </div>
      
          <div className="radio">
            <label>
              <input type="radio" className="rad"/>
              Friends
            </label>
          </div>
      
          <div className="radio">
            <label>
              <input type="radio" className="rad"/>
              Enemy
            </label>
          </div>
      
          <div className="radio">
            <label>
              <input type="radio" className="rad" />
              Boyfriend/Girlfriend
            </label>
          </div>
      
          <div className="radio">
            <label>
              <input type="radio" className="rad" />
              Dog
            </label>
          </div>
      
          <div className="radio">
            <label>
              <input type="radio" className="rad"/>
              Robot
            </label>
          </div>
      
          <div className="radio">
            <label>
              <input type="radio" className="rad"/>
              Myself
            </label>
          </div>
      
      
          <div className="Gap">
            <h2>Upload Your Files from Storage</h2>
          </div>
          <div>
          <textarea id="uploadFile"  />
          <MdFolder color="#A11CF9" size="3rem" className="Icon" />
          </div>
      
          <button className="Upload" type="Submit">
            Upload
          </button>
          <br />
          <br />      
      
          <div>
            <input type="checkbox" className="rad"/>
            <label>
              The details said above are correct and I will be honest while
              doing the tasks. No cheating is done
            </label>
          </div>
          <br />
        
          <button className="Accept" type="submit">
            I Accept
          </button>
         
        </form>
      </div>
    </div>
  )
}

export default StepTwo

