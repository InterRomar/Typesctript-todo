import React, { useMemo } from 'react';

import Todo from './Todo';
import { useSelector } from 'react-redux';
import { ITodo, Sorting } from '../types';
import { RootState } from '../store/rootReducer';

const TodoList: React.FC = () => {
  const todos = useSelector<RootState, ITodo[]>(state => state.todos_store)
  const sortingStatus = useSelector<RootState, Sorting>(state => state.sortingStatus)

  const getSortedTodos = (): Array<ITodo> => {
    switch (sortingStatus) {
      case 'completed':
        return todos.filter((todo: ITodo) => todo.completed)
      case 'active':
        return todos.filter((todo: ITodo) => !todo.completed)
      default:
        return todos;
    }
  }

  const sortedTodos = useMemo(() => {
    return getSortedTodos();
  }, [sortingStatus, todos]);

  return (
    <ul>
      {sortedTodos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}
export default TodoList;