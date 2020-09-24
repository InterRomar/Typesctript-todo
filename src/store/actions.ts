import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  CHANGE_SORTING
} from './actionNames'
import { ITodo, Sorting, TodoActionTypes, SortingActionType } from '../types'

export const addTodoAction = (todo: ITodo): TodoActionTypes => ({
  type: ADD_TODO,
  payload: {
    ...todo
  }
})

export const removeTodoAction = (id: number): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})

export const completeTodoAction = (id: number): TodoActionTypes => ({
  type: COMPLETE_TODO,
  payload: {
    id
  }
})

export const changeSortingAction = (sorting: Sorting): SortingActionType => ({
  type: CHANGE_SORTING,
  payload: {
    sorting
  }
})