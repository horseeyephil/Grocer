import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckoutButton from './checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: ["apples","bananas","cereal"],
      first: "",
      isCheckoutMode: false,
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  changeHandler(event) {
    this.setState({first: event.target.value});
  }

  clickHandler() {
    this.setState({first: ""});
  }

  handleCheckout() {
    this.setState({isCheckoutMode: true})
  }

  render() {
    return (
      <div>
        {
          this.state.groceries.map((grocery) => {
          return(
            <div>{grocery}</div>
          )
        })
        }
        {
          this.state.isCheckoutMode && 
          <span>Checked out?</span>
        }
        <input onChange={this.changeHandler} value={this.state.first}></input>
        {
          this.state.first && 
          <span onClick={this.clickHandler}>X</span>
        }
        <CheckoutButton letsCheckout={this.handleCheckout}/>
      </div>
    );
  }
}

export default App;
