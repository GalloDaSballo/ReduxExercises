/**
 * Container, i.e. smart component that interacts with Redux state directly
 */
import React, {Component} from 'react'
//Function that connects react to redux
import { connect } from 'react-redux'

import {selectBook} from  '../actions/index' //this is the actionCreator
import {bindActionCreators} from 'redux' //this will make it so that the action flows to all reducers in redux


class BookList extends Component {
  renderList(){
    //We store all books on props.books
    //Trhough the map function we display each book
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title} className="list-group-item">
            {book.title}
        </li>
      )
    })
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//This connects Redux to the Component
//IF the state changes our container will re-render automatically
function mapStateToProps(state){
  //Whatever is returned from here will be shown as props of BookList
  return{
    books : state.books
  }
}

//Anything returned by this function will end up as props in the BookList containr
function mapDispatchToProps(dispatch){
  //When selectBook is called, result will be passed to all the reducers
  return bindActionCreators({ selectBook : selectBook }, dispatch) //The second selectBook is the one we imported
  //The dispatch function will "talk to all the reducers "
}

//Exports the Component with Smart data managed by mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
