import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
} from './actionNames'
import { ITodo, TodoActionTypes } from '../types'

export type stateTodos = ITodo[]

const initialState: stateTodos = []

const todos_store = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return ([
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          completed: action.payload.completed
        }
      ])
    case REMOVE_TODO:
      return [...state].filter(todo => todo.id !== action.payload.id)
    case COMPLETE_TODO:
      return [...state].map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = true;
        }
        return todo;
      })
    default:
      return state;
  }
};

export default todos_store;