import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

import {Link} from 'react-router-dom'

class PostsIndex extends Component{
  //Called when the component shows up on the page first
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        </li>
      )
    })
  }

  render(){

    console.log(this.props.posts)
    // let Posts = 'undefined'
    // if(this.props.posts != undefined){
    //   Posts = this.props.posts.map((item) => {
    //     return(<p>{item.title}</p>)
    //   })
    // }

    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    )
  }
}

//State become accessible to props
function mapStateToProps(state){
  return {posts: state.posts}
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
