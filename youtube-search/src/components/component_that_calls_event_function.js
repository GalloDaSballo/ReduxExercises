/**
 * Example of input tag that reacts to change
 */

import React, { Component } from 'react'; //Required for all compoennts that use JSX

/**
 * This is called "Function component" because it is literally a function
 * To save state we need to turn it into a class based component
 */
class SearchBar extends Component{ //By calling component we don't need to write React.Component
  render(){
    return (
      <input
        //Just like old school js
        onChange={this.onInputChange} //onChange={(event) => { console.log(event.target.value) }} 
        placeholder="input"/>
    )
  }// The method call when ReactDOM.render is called

  //on NameOfElement TypeOfEvent
  onInputChange(event) { //event just like any other js event
    console.log("onInputChange")
    console.log(this)
    console.log(event.target.value)
  }
}


const foo = 4;
export default SearchBar; //SearchBar() will be available if imported from other files

// export default foo;  // If we used this, SearchBar would "import" foo rather than SearchBar()
