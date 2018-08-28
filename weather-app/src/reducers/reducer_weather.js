import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
  //console.log('Action received', action);
  switch(action.type){
    case FETCH_WEATHER:
      //payload.data is the response data
      //To push stuff into the state we would do return state.push( action.payload.data );
      //This is AWFUL and WILL CREATE PROBLEMS

      //This returns a new instance of state + data
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; //ES6 version of concat
    break;
  }

  return state;
}
