import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewTaskContainer from '../containers/NewTaskContainer';
import TasksContainer from '../containers/TasksContainer';
import './App.css';

// Use named export for unconnected component (for tests)
export class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Checklist App</h1>
        </header>
        <NewTaskContainer />
        <TasksContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

// Trying to fix the jest issue in App.test.js
export default connect(mapStateToProps)(App)

