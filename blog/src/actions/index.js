/**
 * Action creator that returns actions = objects
 */
import axios from 'axios'


export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'
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


export function createPost(values, callback){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                    .then( () => callback())
  return{
    type: CREATE_POST,
    payload: request
  }
}


export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
                  .then( () => callback())
  return {
    type: DELETE_POST,
    payload: id /* Instead of request data we just put the id so the reducer can delete it from the application state */
  }
}
