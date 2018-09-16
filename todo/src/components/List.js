/**
 * The Todo List Container
 * Manages the State and displays the TodoListItems
 */
import React, { Component } from 'react';

export default class List extends Component {
  //The constructor
  constructor(props){
    super(props) //need to call the super constructor

    //Create the state using standard js syntax
    this.state = {term : '', list : {}}
  }

  render(){

    return (
      <div className="search-bar">
        <input
          //Just like old school js
          // onChange={this.onInputChange}
          onChange = {event => this.onInputChange(event.target.value)}
          //Note that this is not the input element, it is the SearchBar class
          value={this.state.term}
          placeholder="input"/>
      </div>
    )
  }// The method call when ReactDOM.render is called


  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
}
