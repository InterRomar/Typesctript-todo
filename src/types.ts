import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  CHANGE_SORTING
} from './store/actionNames'

export type stateType = {
  todos_store: ITodo[]
  sortingStatus: Sorting
}

export type Sorting = string;

export interface ITodo {
  id: number
  title: string
  completed: boolean
}

interface IAddTaskAction {
  type: typeof ADD_TODO,
  payload: ITodo
}

interface IRemoveTaskAction {
  type: typeof REMOVE_TODO,
  payload: {
    id: number
  }
}

interface ICompleteTaskAction {
  type: typeof COMPLETE_TODO,
  payload: {
    id: number
  }
}

interface IChangeSortingAction {
  type: typeof CHANGE_SORTING,
  payload: {
    sorting: Sorting
  }
}


export type TodoActionTypes = IAddTaskAction | IRemoveTaskAction | ICompleteTaskAction
export type SortingActionType = IChangeSortingAction