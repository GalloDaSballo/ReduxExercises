import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostsIndex extends Component{
  //Called when the component shows up on the page first
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    console.log(this.props.posts)
    return(
      <div>
        Posts Index
      </div>
    )
  }
}

//State become accessible to props
function mapStateToProps(state){
  return {posts: state.props}
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
