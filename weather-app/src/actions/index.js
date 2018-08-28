import axios from 'axios'

const API_KEY = '44ad54bff8aae5e2897772d579c2ca22'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
//Use const so that we can share this with reducer and action creators
export const FETCH_WEATHER = 'FETCH_WEATHER'

//Create an action creator
export function fetchWeather(city) {
  //This code looks syncronous but is actually async thanks to ReduxPromise
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url) //Get request to url
  //Axios returns a promise = data structure with no data that will be substituted with the response data later
  //ReduxPromise is actually managing the promise and sends it to the reducers after it's resolved
  //console.log('Request: ', request)

  return{
    type: FETCH_WEATHER,
    payload : request
  }
}
