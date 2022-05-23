import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import SelectedBook from './reducer_active_book';

const rootReducer = combineReducers({
  selectedBook : SelectedBook, // This will return the action from reducer effected by the action 
  books: BookReducer   // This will return the piece of state which'll be books array 
});

export default rootReducer;
