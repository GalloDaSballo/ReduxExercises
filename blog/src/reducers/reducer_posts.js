import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions'
import _ from 'lodash'

/**
 * Lodash can take an array of records, take a property and create an object from it
 */

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POST:
      // const post = action.payload.data
      // const newState = {...state, post}
      // newState[post.id] = post
      // return newState
      return {...state, [action.payload.data.id] : action.payload.data}
      /* Take all the data we already had and keep it in the state, also add the new post data */
      /* [action.payload.data.id] : action.payload.data create an oject property that will contain the post data */
    case FETCH_POSTS:
      console.log("YOOO ")
      return _.mapKeys(action.payload.data, 'id')
      /**
       * { 4 : {id: 4, title: 'gino'}} it maps the key to the object id
       */

    case DELETE_POST:
      return _.omit(state, action.payload) /* Removes the id (which we send form the action creator) from the global state */
    default:
      return state;
  }
}
