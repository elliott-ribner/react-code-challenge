import React from 'react';
import { Field, reduxForm } from 'redux-form';

const max60chars = value => {
  const maxlen = 60;
  if(value.length > maxlen) {
    return value.slice(0,maxlen)
  }
  return value;  
}


const TaskForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="clsTaskForm">
      <div>
        <div>
          <Field className="inputField"
            name="title"
            component="input"
            type="text"
            placeholder="New entry"
            normalize={max60chars}
          />
        <button type="submit" disabled={pristine || submitting}>Add</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'taskform', // a unique identifier for this form
})(TaskForm);