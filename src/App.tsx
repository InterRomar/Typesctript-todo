import React from 'react';

import { Navbar } from './components/Navbar';
import { CreateForm } from './components/CreateForm';
import TodoList from './components/TodoList';
import SortingPanel from './components/SortingPanel';

import './App.css';



const App = () => {

  return (
    <div className='main-wrapper'>
      <Navbar />
      <div className='container'>
        <CreateForm />

        <SortingPanel />

        <TodoList />
      </div>
    </div>
  )
}

export default App
