import React, { Component } from "react";
import "./StepTwo.css";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
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
            <p>Pick your Achiever Mate</p>
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

          <div>
            <input
              type="checkbox"
              onChange={this.handleCheckClick}
            />
            <label>The details said above are correct and I will be honest while
              doing the tasks. No cheating is done</label>
          </div>


          <button className="btn btn-default" type="submit">
            I Accept
          </button>
        </form>
      </div>
    );
  }
}

export default StepTwo;
