import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'

/**
 * Redux Form manages validations and elements
 */
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer /* formReducer needs to be tied to the reducer named form */
});

export default rootReducer;
