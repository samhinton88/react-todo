import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import uiReducer from './ui-reducer';

export default combineReducers({
  todos: todoReducer,
  ui: uiReducer
})