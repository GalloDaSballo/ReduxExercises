import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'


class SearchBar extends Component{
  constructor(props){
    super(props)

    this.state = {term: ''}

    //If you pass a callback you probably need to bind this
    this.onInputChange = this.onInputChange.bind(this) //We need to bind this (the class) so that this can be used in the function else it doesn't work
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    console.log(event.target.value)
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault()

    //Fetch weather data here
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render(){
    return(
      <div>
        {/* To prevent submit reload we prevent default */}
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five day forecast in the city you want"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
