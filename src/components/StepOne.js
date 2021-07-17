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
      <div className="Gap">
        <h3>Future Studio</h3><br/>
        <div>
        <button className="Joiningform" type="Submit">
          ZD Joining Form
        </button>
        </div>
        <form onSubmit={this.formSubmit}>
        <div>
          <p style={{color:"purple"}}>Your Goal</p>
          <textarea id="Yourgoal"
          value={this.state.Goal}
          onChange={this.onGoalChange}/>
        </div>
        <br/>
        <div>
          <p style={{color:"purple"}}>Why do you want to achieve this goal?</p>
          <textarea id="Achievegoal"
          value={this.state.achieve}
          onChange={this.onachieveChange}/>
        </div>
        <div>
          <p style={{color:"purple"}}>Your Inspiration?</p>
          <textarea id="Insperation"
          value={this.state.inspiration}
          onChange={this.onInspirationChange} />
        </div>
       
        <div className="radio">
        <label>
          <p style={{color:"purple"}}>Do you believe humanity still exist?</p>
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
        <p style={{color:"purple"}}>Do you care for others?</p>
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

        <div className="radio">
        <label>
        <p style={{color:"purple"}}>Will you be honest in achieving your goal/while doing your tasks?</p>
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

        <div>
        <label>
        <p style={{color:"purple"}}>You believe you can?</p>
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
        <br/>
        <div>
        <button className="Submit" type="Submit">
          SUBMIT
        </button>
        </div>
      </form>
      </div>
    );
  }
}

export default StepOne;