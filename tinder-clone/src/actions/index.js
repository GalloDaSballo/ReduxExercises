/**
 * ACTION CREATOR = function that generates an Action = object
 */

//SelectBook returns an Action, an object with a type property
export function selectBook(book){
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}
