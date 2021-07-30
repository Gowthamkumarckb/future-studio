import React from "react";
import "./StepOne.css";
import StepTwo from "./StepTwo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function StepOne() {
  return (
    <div className="space">
      <h5>Future Studio</h5>
      <button className="btn btn-JoiningForm" type="Submit">
        ZD Joining Form
      </button>

      <form>
        <br />
        <div>
          <p style={{ color: "#6200D3" }}>Your Goal</p>
          <textarea className="form-control" id="Yourgoal"></textarea>
        </div>

        <div>
          <br />
          <p style={{ color: "#6200D3" }}>
            Why do you want to achieve this goal?
          </p>
          <textarea className="form-control" id="Achievegoal"></textarea>
        </div>
        <br />

        <div>
          <p style={{ color: "#6200D3" }}>Your Inspiration?</p>
          <textarea className="form-control" id="Insperation"></textarea>
        </div>
        <br />

        <div>
          <p style={{ color: "#6200D3" }}>
            Do you believe humanity still exist?
          </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions1"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions1"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              No
            </label>
          </div>
        </div>

        <div>
          <p style={{ color: "#6200D3" }}>Do you care for others?</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions2"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions2"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              No
            </label>
          </div>
        </div>

        <div>
          <p style={{ color: "#6200D3" }}>
            Will you be honest in achieving your goal/while doing your tasks?
          </p>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions3"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions3"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              No
            </label>
          </div>
        </div>

        <div>
          <p style={{ color: "#6200D3" }}>You believe you can?</p>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions4"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions4"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              No
            </label>
          </div>
        </div>

        <div>
          <button className="btn btn-submit" type="Submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepOne;
