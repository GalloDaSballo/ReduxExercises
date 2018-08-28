import React, {Component} from 'react'

import {connect} from 'react-redux' //to connect state
import Chart from '../components/chart'

import GoogleMap from '../components/google_map'

class WeatherList extends Component{

  renderWeather(cityData){
    const cityName = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const  humidities = cityData.list.map(weather => weather.main.humidity)
    console.log(temps)
    console.log(pressures)
    console.log(humidities)
    console.log("Render Wa")
    //Equivalent to const lon = cityData.city.coord.lon and the same for lat
    const {lon, lat} = cityData.city.coord;
    return(
      <tr key={cityName}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <Chart data={temps} color="red" units="K" />
        <Chart data={pressures} color="green" units="hPa" />
        <Chart data={humidities} color="blue" units="%" />
    </tr>
    )
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//Alternative ways to do it
// function mapStateToProps(state){
//  return {weather : state.weather}
// }
// // function mapStateToProps({weather}){
//   return {weather : weather}
// }

 function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)
