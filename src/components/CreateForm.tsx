import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form'

import { TodoActionTypes, ITodo } from '../types';
import { addTodoAction } from '../store/actions';
import { FormApi } from 'final-form';

let idCount = 0;

const formValidator = (values: FormValues): FormValues | object => {
  const errors: any  = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  return errors
}

type FormValues = {
  title: string
}

export const CreateForm: React.FC = () => {
  const todoDispatcher = useDispatch<Dispatch<TodoActionTypes>>()

  const handleSubmit = (values: FormValues, form: FormApi<FormValues>): void => {
    const newTodo: ITodo = {
      id: idCount,
      title: values.title,
      completed: false
    }
    todoDispatcher(addTodoAction(newTodo))

    idCount++

    setTimeout(() => {
      form.reset()
    }, 0);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      validate={formValidator}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
            <Field 
              name="title" 
              component="input"  
              placeholder="Enter new to-do" 
              >
              {({ input, meta }) => (
                <div>
                  <label className='input-label'>
                    <span>Enter new to-do</span>
                    {meta.error && meta.touched && <span className='error' >{meta.error}</span>}
                  </label>
                  <input 
                    autoComplete="off"
                    autoFocus
                    {...input} 
                    type="text" 
                    placeholder="enter new to-do" 
                  />
                </div>
              )}
            </Field>
        </form>
      )}
    />
  )
}
