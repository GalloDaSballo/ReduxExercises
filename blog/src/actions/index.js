/**
 * Action creator that returns actions = objects
 */
import axios from 'axios'


export const FETCH_POSTS = 'FETCH_POSTS'

//Root API URL
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=galloiscool'
export function fetchPosts(){
  //Equivalent to a ROOT_URL + 'posts/' + API_KEY
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return{
    type: FETCH_POSTS,
    payload: request //Redux-promise will resolve the promise for us
  }
}
