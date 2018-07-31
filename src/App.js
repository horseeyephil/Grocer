import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckoutButton from './checkout';
import ExpandingList from './ExpandingList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: ["apples","bananas","oranges"],
      isCheckoutMode: false,
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  componentWillMount() {
    if (this.state.groceries[this.state.groceries.length - 1] !== "") {
      this.setState({groceries: this.state.groceries.concat("")})
    }
  }

  changeHandler(i,event) {
    const list = this.state.groceries.slice(0);
    list[i] = event.target.value;
    this.setState({groceries: list[list.length - 1] === "" ? list : list.concat("")});
  }

  clickHandler() {
    this.setState({first: ""});
  }

  handleCheckout() {
    this.setState({isCheckoutMode: true})
  }

  removeHandler(i) {
    const list = this.state.groceries.slice(0,i).concat(this.state.groceries.slice(i+1));
    this.setState({groceries: list});
  }

  render() {
    return (
      <div>
        <CheckoutButton letsCheckout={this.handleCheckout}/>
        {
          this.state.isCheckoutMode && 
          <span>Checked out?</span>
        }
        <ExpandingList onChange={this.changeHandler} onRemoveClick={this.removeHandler} list={this.state.groceries} />
      </div>
    );
  }
}

export default App;
