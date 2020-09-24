import React, { useMemo, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { Navbar } from './components/Navbar';
import { CreateForm } from './components/CreateForm';
import TodoList from './components/TodoList';
import SortingPanel from './components/SortingPanel';
import {
  addTodoAction,
  completeTodoAction,
  removeTodoAction,
  changeSortingAction
} from './store/actions'
import { ITodo, Sorting, stateType } from './types'

import './App.css';

type Props = {
  addTodoToStore: (todo: ITodo) => void
  removeTodoFromStore: (id: number) => void
  completeTodo: (id: number) => void
  changeSorting: (sorting: string) => void
  todos: ITodo[],
  sortingStatus: Sorting
}

let idCount = 0;

const App = (props: Props) => {

  const getSortedTodos = (): Array<ITodo> => {
    switch (props.sortingStatus) {
      case 'completed':
        return props.todos.filter((todo: ITodo) => todo.completed)
      case 'active':
        return props.todos.filter((todo: ITodo) => !todo.completed)
      default:
        return props.todos;
    }
  }

  const sortedTodos = useMemo(() => {
    return getSortedTodos();
  }, [props.sortingStatus, props.todos]);

  const addTodo = (title: string): void => {
    const newTodo: ITodo = {
      id: idCount,
      title,
      completed: false
    }
    idCount++

    props.addTodoToStore(newTodo);

  }

  return (
    <div className='main-wrapper'>
      <Navbar />
      <div className='container'>
        <CreateForm
          onAdd={addTodo}
        />
        {!!props.todos.length && (
          <SortingPanel
            changeSortingStatus={props.changeSorting}
          />
        )}
        <TodoList
          todos={sortedTodos}
          completeTodo={props.completeTodo}
          deleteTodo={props.removeTodoFromStore}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state: stateType) => ({
  todos: state.todos_store,
  sortingStatus: state.sortingStatus
})

const mapDispatchToProps = (dispatch: Function) => ({
  addTodoToStore: (todo: ITodo) => dispatch(addTodoAction(todo)),
  removeTodoFromStore: (id: number) => dispatch(removeTodoAction(id)),
  completeTodo: (id: number) => dispatch(completeTodoAction(id)),
  changeSorting: (sorting: Sorting) => dispatch(changeSortingAction(sorting))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
