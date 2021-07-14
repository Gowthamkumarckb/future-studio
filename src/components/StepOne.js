import React, { Component } from "react";
import'./StepOne.css'

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Goal: "",
      achieve:"",
      inspiration:"",
    };
    this.onGoalChange = this.onGoalChange.bind(this);
    this.onachieveChange = this.onachieveChange.bind(this);
    this.onInspirationChange = this.onInspirationChange.bind(this);
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
    this.onValueChange3 = this.onValueChange3.bind(this);
    this.onValueChange4 = this.onValueChange4.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  onGoalChange(event) {
    this.setState({
      Goal: event.target.value
    });
  }
  onachieveChange(event) {
    this.setState({
      achieve: event.target.value
    });
  }
  onInspirationChange(event) {
    this.setState({
      inspiration: event.target.value
    });
  }

  onValueChange1(event) {
    this.setState({
      selectedOption1: event.target.value
    });
  }
  onValueChange2(event) {
    this.setState({
      selectedOption2: event.target.value
    });
  }
  onValueChange3(event) {
    this.setState({
      selectedOption3: event.target.value
    });
  }
  onValueChange4(event) {
    this.setState({
      selectedOption4: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.Goal)
    console.log(this.state.achieve)
    console.log(this.state.inspiration)
    console.log(this.state.selectedOption1)
    console.log(this.state.selectedOption2)
    console.log(this.state.selectedOption3)
    console.log(this.state.selectedOption4)
    

  }
       //form
  render() {
    return (
      <div>
        <h1>Future Studio</h1>

        <form onSubmit={this.formSubmit}>
        <div>
          <p>Your Goal</p>
          <input type="textarea"
          value={this.state.Goal}
          onChange={this.onGoalChange}/>
        </div>
        <div>
          <p>Why do you want to achieve this goal?</p>
          <input type="textarea"
          value={this.state.achieve}
          onChange={this.onachieveChange}/>
        </div>
        <div>
          <p>Your Inspiration?</p>
          <input type="textarea"
          value={this.state.inspiration}
          onChange={this.onInspirationChange} />
        </div>
       
        <div className="radio">
        <label>
          <p>Do you believe humanity still exist?</p>
            <input
              type="radio"
              value="yes"
              checked={this.state.selectedOption1 === "yes"}
              onChange={this.onValueChange1}
            />
            yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="no"
              checked={this.state.selectedOption1 === "no"}
              onChange={this.onValueChange1}
            />
            no
          </label>
        </div>

        <div className="radio">
        <label>
        <p>Do you care for others?</p>
            <input
              type="radio"
              value="yes"
              checked={this.state.selectedOption2 === "yes"}
              onChange={this.onValueChange2}
            />
            yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="no"
              checked={this.state.selectedOption2 === "no"}
              onChange={this.onValueChange2}
            />
            no
          </label>
        </div>

        <div className="clrs">
        <label>
        <p>Will you be honest in achieving your goal/while doing your tasks?</p>
            <input
              type="radio"
              value="yes"
              checked={this.state.selectedOption3 === "yes"}
              onChange={this.onValueChange3}
            />
            yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="no"
              checked={this.state.selectedOption3 === "no"}
              onChange={this.onValueChange3}
            />
            no
          </label>
        </div>

        <div className="radio">
        <label>
        <p>You believe you can?</p>
            <input
              type="radio"
              value="yes"
              checked={this.state.selectedOption4 === "yes"}
              onChange={this.onValueChange4}
            />
            yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="no"
              checked={this.state.selectedOption4 === "no"}
              onChange={this.onValueChange4}
            />
            no
          </label>
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
      </div>
    );
  }
}

export default StepOne;
