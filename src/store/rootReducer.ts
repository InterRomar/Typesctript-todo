import todos_store from './todosReducer';
import sortingStatus from './sortReducer';
const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  todos_store,
  sortingStatus
})

export default rootReducer