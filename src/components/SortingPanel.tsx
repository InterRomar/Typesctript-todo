import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Sorting, ITodo, SortingActionType } from '../types';
import { RootState } from '../store/rootReducer';
import { changeSortingAction } from '../store/actions';

const SortingPanel: React.FC = () => {
  const sortingStatus = useSelector<RootState, Sorting>(state => state.sortingStatus)
  const todos = useSelector<RootState, ITodo[]>(state => state.todos_store)

  const dispatchSortingStatus = useDispatch<Dispatch<SortingActionType>>()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    dispatchSortingStatus(changeSortingAction(event.currentTarget.name))
  }

  if (!todos.length) return null

  return (
    <div className="sorting-panel">
      <button
        className={`sort-btn ${sortingStatus === 'all' ? 'active' : ''}`}
        name='all'
        onClick={handleClick}
      >
        All
      </button>
      <button
        className={`sort-btn ${sortingStatus === 'active' ? 'active' : ''}`}
        name='active'
        onClick={handleClick}
      >
        Active
      </button>
      <button
        className={`sort-btn ${sortingStatus === 'completed' ? 'active' : ''}`}
        name='completed'
        onClick={handleClick}
      >
        Completed
      </button>
    </div>
  )
}
export default SortingPanel;