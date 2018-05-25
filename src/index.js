import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component
//That shows some html

//Const = ES6 similar to var but can't be changed -> a constant
const App = () => {
  //This is JSX Babel will convert this to some sort of JS
  return <div>Hi!</div>;
  /*
   * return React.createElement(
   * "div",
   * null,
   * "Hi!"
   * );
   */
}


//Automatically inserted in the dom via js
ReactDOM.render(<App />, document.querySelector('.container'));
//Render the app component inside the .container

//LAST NOTE: always place one class/component per file.
