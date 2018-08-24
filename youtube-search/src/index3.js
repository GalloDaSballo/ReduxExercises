/**
 * History
 * 1-Basic init
 * 2-Search Bar Inclusion
 * 3- Index.js APP will be responsible for fetching the data cause it contasins all smaller classes. i.e. broader scope
 */
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCV36EiG8SubgCkcLpQ5GEHxGJ-h7axVSw'

// import SearchBar from 'search_bar'; //Doesnt work because we didn't set up a namespace
import SearchBar from './components/search_bar'; //From this dir to the .js file

YTSearch({key: API_KEY, term: 'surfboards'},
  function(data){
    console.log(data);
  }
);

//Const = ES6 similar to var but can't be changed -> a constant
//App is a functional component -> outputs stuff
//Searchbar is a class component -> Manages state
const App = () => {
  //This is JSX Babel will convert this to some sort of JS
  return (
    //It requires the closing "/" otherwise it doesn't compile
    <div>
      <SearchBar />
    </div>
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
