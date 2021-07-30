import React from "react";
import "./StepTwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StepTwo() {
  return (
    <div className="space">
      <h5>Future Studio</h5>

      <form>
        <div>
          <p style={{ color: "#6200D3" }}>Pick your Achiever Mate</p>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Parents
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Friends
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Enemy
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Boyfriend/Girlfriend
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault5"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Dog
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault6"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Robot
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault7"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Myself
          </label>
        </div>
        <br />
        <h2>Upload Your Files from Storage</h2>

        <div>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
          />
          <button className="btn btn-icon" type="file">
            <FontAwesomeIcon
              className="fold"
              icon="folder"
              size="3x"
              color="blue"
              type="file"
            />
          </button>
        </div>
        <br />

        <button type="upload" className="btn btn-upload">
          upload
        </button>

        <br />
        <br />

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            The details said above are correct and I will be honest while doing
            the tasks. No cheating is done
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-accept">
          I Accept
        </button>
      </form>
    </div>
  );
}

export default StepTwo;
