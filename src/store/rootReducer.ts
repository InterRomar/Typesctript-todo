import todos_store from './todosReducer';
import sortingStatus from './sortReducer';
import { ITodo, Sorting } from '../types';
const { combineReducers } = require('redux');

export type RootState = {
  todos_store: ITodo[]
  sortingStatus: Sorting
}

const rootReducer = combineReducers({
  todos_store,
  sortingStatus
})

export default rootReducer