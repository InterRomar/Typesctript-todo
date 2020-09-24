import React from 'react';

import { ITodo } from '../types';
import Todo from './Todo';

interface TodoListProps {
  todos: Array<ITodo>
  completeTodo(id: number): void
  deleteTodo(id: number): void
};

const TodoList: React.FC<TodoListProps> = props => {

  return (
    <ul>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          completeTodo={props.completeTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  )
}
export default TodoList;