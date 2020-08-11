import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    firstNumber:0,
    lastOperation: "AC",
    total: 0,
    arrayOfButtons: [],
  }

  evaluate = () => {
    switch (this.state.lastOperation) {
      case "Plus":
        this.setState({total:Number(this.state.firstNumber)+Number(this.state.total)});
        this.setState({firstNumber:Number(this.state.firstNumber)+Number(this.state.total)});
        break;
      case "Minus":
        this.setState({total:Number(this.state.firstNumber)-Number(this.state.total)});
        this.setState({firstNumber:Number(this.state.firstNumber)-Number(this.state.total)});
        break;
      case "Times":
        this.setState({total:Number(this.state.firstNumber)*Number(this.state.total)});
        this.setState({firstNumber:Number(this.state.firstNumber)*Number(this.state.total)});
        break;
      case "Divide":
        this.setState({total:Number(this.state.firstNumber)/Number(this.state.total)});
        this.setState({firstNumber:Number(this.state.firstNumber)/Number(this.state.total)});
        break;
      default:
    }
  }

  clickButton = (event) => {
    let buttonClicked;
    if(event.target.id==="") {
      buttonClicked=event.target.parentElement
    }
    else {
      buttonClicked=event.target
    }
    console.log(buttonClicked.id);
    console.log(this.state.arrayOfButtons);
    switch (buttonClicked.id) {
      case "AC":
        this.setState({firstNumber:0});
        this.setState({total:0});
        this.setState({lastOperation:"AC"});
        this.setState({arrayOfButtons:[]})
        break;
      case "PlusMinus":
        this.setState({total:-1*this.state.total});
        this.evaluate();
        break;
      case "Percent":
        this.setState({total:this.state.total/100});
        break;
      case "SquareRoot":
        this.setState({total:Math.sqrt(this.state.total)});
        break;
      case "Point":
        this.setState({total:this.state.total+"."});
        break;
      case "Divide":
        if (this.state.lastOperation!=="AC"&&this.state.lastOperation!=="Equals") {
          this.evaluate()
        }
        else {this.setState({firstNumber:Number(this.state.total)})}
        this.setState({lastOperation:"Divide"});
        this.setState({total:""});
        break;
      case "Times":
        if (this.state.lastOperation!=="AC"&&this.state.lastOperation!=="Equals") {
          this.evaluate()
        }
        else {this.setState({firstNumber:Number(this.state.total)})}
        this.setState({lastOperation:"Times"});
        this.setState({total:""});
        break;
      case "Minus":
        if (this.state.lastOperation!=="AC"&&this.state.lastOperation!=="Equals") {
          this.evaluate()
        }
        else {this.setState({firstNumber:Number(this.state.total)})}
        this.setState({lastOperation:"Minus"});
        this.setState({total:""});
        break;
      case "Plus":
        if (this.state.lastOperation!=="AC"&&this.state.lastOperation!=="Equals") {
          this.evaluate()
        }
        else {this.setState({firstNumber:Number(this.state.total)})}
        this.setState({lastOperation:"Plus"});
        this.setState({total:""});
        break;
      case "Equals":
        this.evaluate();
        this.setState({lastOperation:"Equals"});
        break;
      default:
    }
    if (buttonClicked.id.substr(0,6)==="Button") {
      if (this.state.total===0|isNaN(this.state.total)) {
        this.setState({total:buttonClicked.id.substr(-1)})
      }
      else {
        this.setState({total:this.state.total.toString()+buttonClicked.id.substr(-1)})
      }
      this.state.arrayOfButtons.push(buttonClicked.id.substr(-1))
    }
    else {
      this.state.arrayOfButtons.push(buttonClicked.id)
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Dan&rsquo;s Calculator</h1>
        <Calculator total={this.state.total} clickButton={this.clickButton}/>
        <footer>
          <li>Made by Dan A</li>
          <li><a href="" title="Code on GitHub">See the code</a></li>
          {/* <li><a href="" title="My website">My website</a></li> */}
        </footer>
      </div>
    );
  }
}

const Calculator = (props) => {
  return (
    <div className="calculator">
      <Display total={props.total}/>
      <Buttons clickButton={props.clickButton}/>
    </div>
  )
}

const Display = (props) => {
  return (
      <div className="display">
          <div>
              {props.total}
          </div>
      </div>
  )
}

const Buttons = (props) => {
  return (
      <div className="buttons">
          <Button id="AC" innerHTML="AC" clickButton={props.clickButton}/>
          <Button id="PlusMinus" innerHTML="&plusmn;" clickButton={props.clickButton}/>
          <Button id="Percent" innerHTML="%" clickButton={props.clickButton}/>
          <Button id="Divide" innerHTML="&divide;" clickButton={props.clickButton}/>
          <Button id="Button7" innerHTML="7" clickButton={props.clickButton}/>
          <Button id="Button8" innerHTML="8" clickButton={props.clickButton}/>
          <Button id="Button9" innerHTML="9" clickButton={props.clickButton}/>
          <Button id="Times" innerHTML="&times;" clickButton={props.clickButton}/>
          <Button id="Button4" innerHTML="4" clickButton={props.clickButton}/>
          <Button id="Button5" innerHTML="5" clickButton={props.clickButton}/>
          <Button id="Button6" innerHTML="6" clickButton={props.clickButton}/>
          <Button id="Minus" innerHTML="-" clickButton={props.clickButton}/>
          <Button id="Button1" innerHTML="1" clickButton={props.clickButton}/>
          <Button id="Button2" innerHTML="2" clickButton={props.clickButton}/>
          <Button id="Button3" innerHTML="3" clickButton={props.clickButton}/>
          <Button id="Plus" innerHTML="+" clickButton={props.clickButton}/>
          <Button id="Button0" innerHTML="0" clickButton={props.clickButton}/>
          <Button id="Point" innerHTML="." clickButton={props.clickButton}/>
          <Button id="SquareRoot" innerHTML="&radic;" clickButton={props.clickButton}/>
          <Button id="Equals" innerHTML="=" clickButton={props.clickButton}/>
      </div>
  )
}

const Button = (props) => {
  return (
      <div className="button" id={props.id} onClick={props.clickButton}>
        <div>
            {props.innerHTML}
        </div>
      </div>
  )
}

export default App;
