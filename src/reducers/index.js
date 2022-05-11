import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
const rootReducer = combineReducers({
  books: BookReducer   // This will return the piece of state which'll be books array 
});

export default rootReducer;
