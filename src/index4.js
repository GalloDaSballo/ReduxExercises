/**
 * History
 * 1-Basic init
 * 2-Search Bar Inclusion
 * 3- Index.js APP will be responsible for fetching the data cause it contasins all smaller classes. i.e. broader scope
 * 4- Added VideoList
 * 5- Allows Selected Video
 */
import React, { Component } from 'react'; //Required for all compoennts that use JSX
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCV36EiG8SubgCkcLpQ5GEHxGJ-h7axVSw';

// import SearchBar from 'search_bar'; //Doesnt work because we didn't set up a namespace
import SearchBar from './components/search_bar'; //From this dir to the .js file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//Const = ES6 similar to var but can't be changed -> a constant
//App is a functional component -> outputs stuff
//Searchbar is a class component -> Manages state
class App extends Component{
  //this.props -> Can access this.props to get the props.
  constructor(props){
    super(props); //need to call the super constructor

    //Create the state using standard js syntax
    this.state = { videos : [] }; //Default object

    YTSearch(
      {key: API_KEY, term: 'surfboards'},
      (video_results) => {
        this.setState({videos : video_results })
        //his.setState({videos}) is equivalent if we change video_results to videos
      }
    );

  }

  render(){
    return (
      //It requires the closing "/" otherwise it doesn't compile
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    ) /*Passing props to pass videos data to VideoList*/
    //Parenthesis to make it prettier / less messy
  }
}



//Automatically inserted in the dom via js
ReactDOM.render(<App />, document.querySelector('.container'));
//Render the app component inside the .container

//LAST NOTE: always place one class/component per file.
