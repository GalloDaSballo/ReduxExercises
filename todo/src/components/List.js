/**
 * The Todo List Container
 * Manages the State and displays the TodoListItems
 */
import React, { Component } from 'react';
import ListItem from './List-Item';

export default class List extends Component {
  //The constructor
  constructor(props){
    super(props) //need to call the super constructor

    //Create the state using standard js syntax
    this.state = {term : '', list : [{value : 'Gino'}]}

   this.onInputChange = this.onInputChange.bind(this);
   this.onSubmitForm = this.onSubmitForm.bind(this);
   this.removeChild = this.removeChild.bind(this);
  }

  render(){
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group col-md-12">
            <input
              className="form-control"
              //Just like old school js
              // onChange={this.onInputChange}
              onChange = {event => this.onInputChange(event.target.value)}
              //Note that this is not the input element, it is the SearchBar class
              value={this.state.term}
              placeholder="input"/>
              <button className="btn btn-primary">Add to the List</button>
          </div>
        </form>
        <ListItem
          items={this.state.list}
          removerino={this.removeChild}/>
      </div>
    )
  }// The method call when ReactDOM.render is called


  onInputChange(term) {
    this.setState({ term : term })
    console.log(this.state.list)
    console.log("asdasd")
  }

  onSubmitForm(event){
    console.log("FUCK")
    event.preventDefault();
    const term = event.target.value
    const listClone = this.state.list.slice(0)
    listClone.push({value : this.state.term })
    console.log("List Clone")
    console.log(listClone)
    this.setState({term: '', list: listClone})
  }

  removeChild(index){
    console.log("Removing")
    console.log(this.state.list[index])
    this.setState({term : this.state.term, list:  this.state.list.filter((_, i) => i !== index)})
  }
}
