/**
 * Container, i.e. smart component that interacts with Redux state directly
 */
import React, {Component} from 'react';
//Function that connects react to redux
import { connect } from 'react-redux';


class BookList extends Component {
  renderList(){
    //We store all books on props.books
    //Trhough the map function we display each book
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

//Exports the Component with Smart data managed by mapStateToProps
export default connect(mapStateToProps)(BookList)
