/**
 * Reducer for the Active Book
 */

//State argument is not application state, only the state the reducer is responsible for
export default function(state = null, action){
  //Since reducers receive all actions we need a switch to know which action is going on
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }
  //We can return null if state isn't changed Also, state can't be undefined so we need null
  return state
}
