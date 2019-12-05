import { combineReducers } from 'redux';
import getTodoListReducer from './getTodoListReducer';

const rootReducer = combineReducers({
  todoList: getTodoListReducer
});

export default rootReducer;