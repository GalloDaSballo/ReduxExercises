/**
 * History
 * 1-Basic init
 * 2-Search Bar Inclusion
 */
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCV36EiG8SubgCkcLpQ5GEHxGJ-h7axVSw'

// import SearchBar from 'search_bar'; //Doesnt work because we didn't set up a namespace
import SearchBar from './components/search_bar'; //From this dir to the .js file

//Const = ES6 similar to var but can't be changed -> a constant
const App = () => {
  //This is JSX Babel will convert this to some sort of JS
  return (
    <SearchBar /> //It requires the closing "/" otherwise it doesn't compile
  ) //Parenthesis to make it prettier / less messy
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
