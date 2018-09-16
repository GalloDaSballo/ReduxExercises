import {FETCH_POSTS} from '../actions'
import _ from 'lodash'

/**
 * Lodash can take an array of records, take a property and create an object from it
 */

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')

    default:
      return state;
  }
}
