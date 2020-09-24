import React, { useRef } from 'react';

interface CreateFormProps {
  onAdd(title: string): void
};

export const CreateForm: React.FC<CreateFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    props.onAdd(ref.current!.value);
    ref.current!.value = '';
  }

  return (
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row custom-row">
        <div className="input-field">
          <input
            ref={ref}
            placeholder="Enter new to-do"
            id="title"
            type="text"
            autoComplete='off'
          />
          <label htmlFor='title'>Enter new to-do</label>
        </div>
      </div>
    </form>
  )
}
