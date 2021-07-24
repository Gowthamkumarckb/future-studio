import React from "react";
import "./StepOne.css";

function StepOne() {
  return (
    <div>

      <div className="Gap">
        <h3>Future Studio</h3>
        <br />

        <div>
          <button className="Joiningform" type="Submit">
            ZD Joining Form
          </button>
        </div>

        <form>
          <div>
            <br />
            <p style={{ color: "#6200D3" }}>Your Goal</p>
            <textarea id="Yourgoal" />
          </div>
          <br />
          <div>
            <p style={{ color: "#6200D3" }}>
              Why do you want to achieve this goal?
            </p>
            <textarea id="Achievegoal" />
          </div>
          <br />
          <div>
            <p style={{ color: "#6200D3" }}>
              Your Inspiration?
              </p>
            <textarea id="Insperation" />
          </div>
          <br />
          <div className="radio">
            <label>
              <p style={{ color: "#6200D3" }}>
                Do you believe humanity still exist?
              </p>
              <input type="radio" className="rad" />
              yes
              <input type="radio" className="rad" />
              no
            </label>
          </div>
          <br />  
          <div className="radio">
            <label>
              <p style={{ color: "#6200D3" }}>Do you care for others?</p>
              <input type="radio" className="rad"/>
              yes
              <input type="radio" className="rad"/>
              no
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <p style={{ color: "#6200D3" }}>
                Will you be honest in achieving your goal/while doing your
                tasks?
              </p>
              <input type="radio" className="rad"/>
              yes
              <input type="radio" className="rad" />
              no
            </label>
          </div>
          <br />
          <div>
            <label>
              <p style={{ color: "#6200D3" }}>You believe you can?</p>
              <input type="radio" className="rad"/>
              yes
              <input type="radio" className="rad"/>
              no
            </label>
          </div>
          <br />
          <div>

            <button className="Submit" type="Submit">
              SUBMIT
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default StepOne;
