/**
 * Exporting data, status and components
 */

import React, { Component } from 'react' //Required for all compoennts that use JSX

/**
 * This is called "Function component" because it is literally a function
 * To save state we need to turn it into a class based component
 */
class SearchBar extends Component{ //By calling component we don't need to write React.Component
  //The constructor
  constructor(props){
    super(props) //need to call the super constructor

    //Create the state using standard js syntax
    this.state = {term : ''}
  }

  render(){
    return (
      <div>
        <input
          //Just like old school js
          // onChange={this.onInputChange}
          onChange = {event => {this.setState({term : event.target.value}); console.log(this)}}
          //Note that this is not the input element, it is the SearchBar class
          value={this.state.term}
          placeholder="input"/>
        Value of the input: {this.state.term}
      </div>
    )
  }// The method call when ReactDOM.render is called

  //on NameOfElement TypeOfEvent
  onInputChange(event) { //event just like any other js event
    let value = event.target.value

    this.setState({term : value }) //This doesn't work.
  }
}


const foo = 4
export default SearchBar //SearchBar() will be available if imported from other files

// export default foo;  // If we used this, SearchBar would "import" foo rather than SearchBar()
