import React, {Component} from 'react'

class GoogleMap extends Component{
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon //lon is returned by openweathermap
      }
    })
  }

  render(){

    {/*this.refs.map is available in this component*/}
    return <div ref="map" />
  }
}

export default GoogleMap
