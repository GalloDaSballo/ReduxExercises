import React, { Component } from 'react'

import { connect } from 'react-redux'

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      //If we don't have state, bail early
      return<div>Select a book to get started.</div>
    }
    return(
      <div>
        <h3>Book Detail for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
