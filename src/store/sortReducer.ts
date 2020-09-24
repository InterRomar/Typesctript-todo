import {
  CHANGE_SORTING
} from './actionNames'
import { Sorting, SortingActionType } from '../types'

const DEFAULT_SORTING: Sorting = 'all'

const sorting = (state = DEFAULT_SORTING, action: SortingActionType) => {
  switch (action.type) {
    case CHANGE_SORTING:
      return action.payload.sorting
    default:
      return state;
  }
};

export default sorting;