import React, { Component } from "react";
import { MdFolder } from "react-icons/md";
import "./StepTwo.css";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
  }
  //form
  render() {
    return (
      <div className="Gap">
        <h1>Future Studio</h1>

        <form onSubmit={this.formSubmit}>
          <div>
            <p style={{ color: "purple" }}>Pick your Achiever Mate</p>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Parents"
                checked={this.state.selectedOption === "Parents"}
                onChange={this.onValueChange}
              />
              Parents
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Friends"
                checked={this.state.selectedOption === "Friends"}
                onChange={this.onValueChange}
              />
              Friends
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Enemy"
                checked={this.state.selectedOption === "Enemy"}
                onChange={this.onValueChange}
              />
              Enemy
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Boyfriend/Girlfriend"
                checked={this.state.selectedOption === "Boyfriend/Girlfriend"}
                onChange={this.onValueChange}
              />
              Boyfriend/Girlfriend
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Dog"
                checked={this.state.selectedOption === "Dog"}
                onChange={this.onValueChange}
              />
              Dog
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Robot"
                checked={this.state.selectedOption === "Robot"}
                onChange={this.onValueChange}
              />
              Robot
            </label>
          </div>
          <br />
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Myself"
                checked={this.state.selectedOption === "Myself"}
                onChange={this.onValueChange}
              />
              Myself
            </label>
          </div>
          <br />
          <br />
          <div className="Gap">
            <h1>Upload Your Files from Storage</h1>
          </div>
          <div className="Icon">
            <textarea
              id="Yourgoal"
              value={this.state.Goal}
              onChange={this.onGoalChange}
            />

            <MdFolder color="purple" size="4rem" />
          </div>
          <br />
          <button className="Upload" type="Submit">
            Upload
          </button>
          <br />
          <br />
          <br />
          <div>
            <input type="checkbox" onChange={this.handleCheckClick} />
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
    );
  }
}

export default StepTwo;
