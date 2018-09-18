import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../actions'

import {Link} from 'react-router-dom'

class PostShow extends Component{
  componentDidMount(){
    /* Provided by react-router */
    /* match -> the url
       params -> all the params
       id -> the specific param we defined as wildcard -> :id
    */
   if(!this.props.post){
     /* This check above allows caching -> Note that the updates won't appear if this is the case*/
      const postId = this.props.match.params.id
      this.props.fetchPost(postId)
    }
  }

  onDeleteClick(){
    const {id} = this.props.match.params
    this.props.deletePost(id, () => {
      /* Callback that get's called by the action creator after succesful deletion */
      this.props.history.push('/')
    });
  }

  render(){
    const {post} = this.props; /* === post = this.props.post */

    if(!post){
      return(<div>Loading...</div>)
    }
    return(
      <div>
        <Link to="/" className="btn btn-secondary">Back to Index</Link>
        <button className="pull-xs-right btn btn-danger"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}
/* {posts} -> We only care about state.posts
   ownProps -> is = to this.props
*/
function mapStateToProps({posts}, ownProps){
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow)
