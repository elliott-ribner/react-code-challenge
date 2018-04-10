import React, { Component } from 'react';
import { connect } from 'react-redux'
import TaskForm from '../components/TaskForm';
import {reset} from 'redux-form';
import { addTask } from '../actions' 

class NewTaskContainer extends Component {

  submit = (values, dispatch) => {
    dispatch(reset('taskform'));
    return dispatch(addTask(values));
  };

  render() {
    return (
      <div className="App-addTask">
        <TaskForm onSubmit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default connect() (NewTaskContainer);
