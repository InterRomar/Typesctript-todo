import React, { Dispatch } from 'react';
import { ITodo, TodoActionTypes } from '../types';
import { useDispatch } from 'react-redux';
import { completeTodoAction, removeTodoAction } from '../store/actions';

type TodoProps = {
  todo: ITodo
};

const Todo: React.FC<TodoProps> = props => {
  const todoDispatcher = useDispatch<Dispatch<TodoActionTypes>>()

  const handleClick = () => {
    const { todo } = props;
    if (todo.completed) return;
    
    todoDispatcher(completeTodoAction(todo.id))
  }

  const handleDelete = () => {
    const { todo } = props;

    todoDispatcher(removeTodoAction(todo.id))
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