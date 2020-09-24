import React from 'react';
import { ITodo } from '../types';

type TodoProps = {
  todo: ITodo
  changeTodoStatus(id: number): void
  deleteTodo(id: number): void
};

const Todo: React.FC<TodoProps> = props => {

  const handleClick = () => {
    const { changeTodoStatus, todo } = props;

    changeTodoStatus(todo.id)
  }

  const handleDelete = () => {
    const { deleteTodo, todo } = props;

    deleteTodo(todo.id)
  }

  return (
    <li
      className={`todo-item ${props.todo.completed ? 'completed' : ''}`}
    >
      {props.todo.completed && (
        <i className="material-icons small check-mark">check</i>
      )}
      <span className='check-box'
        onClick={handleClick}
      >

      </span>
      <span className="title">
        {props.todo.title}
      </span>

      <i
        onClick={handleDelete}
        className="material-icons delete"
      >
        close
      </i>
    </li>
  )
}
export default Todo;