/**
 * History
 * 1-Basic init
 * 2-Search Bar Inclusion
 * 3- Index.js APP will be responsible for fetching the data cause it contasins all smaller classes. i.e. broader scope
 * 4- Added VideoList
 * 5- Allows Selected Video -> ONVideoSelect which gets propagated to video_list and then to video_list_item
 * 6- Allow to search for video
 */

import _ from 'lodash';
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
    this.state = {
      videos : [],
      selectedVideo : null
    }; //Default object
    this.videoSearch('surfboards')
  }
  
  videoSearch(the_term){
    YTSearch(
      {key: API_KEY, term: the_term},
      (video_results) => {
        this.setState({
          videos : video_results,
          selectedVideo: video_results[0]
        })
        //his.setState({videos}) is equivalent if we change video_results to videos
      }
    )
  }


  render(){
    //Debounce will return a function that can only be called every 300ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      //It requires the closing "/" otherwise it doesn't compile
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    ) /*Passing props to pass videos data to VideoList*/
    //Parenthesis to make it prettier / less messy
  }
}



//Automatically inserted in the dom via js
ReactDOM.render(<App />, document.querySelector('.container'));
//Render the app component inside the .container

//LAST NOTE: always place one class/component per file.
