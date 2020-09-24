import React from 'react';

import { ITodo } from '../types';
import Todo from './Todo';

interface TodoListProps {
  todos: Array<ITodo>
  changeTodoStatus(id: number): void
  deleteTodo(id: number): void
};

const TodoList: React.FC<TodoListProps> = props => {

  return (
    <ul>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          changeTodoStatus={props.changeTodoStatus}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  )
}
export default TodoList;