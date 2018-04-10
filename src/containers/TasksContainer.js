import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  toggleTask,
  moveUpTask,
  moveDownTask,
  deleteTask,
  checkAllTasks
} from '../actions';
import TaskItem from '../components/TaskItem';
import TaskList from '../components/TaskList';

const TasksContainer = ({ tasks, onClick }) => (
  <div id="taskcontainer"> 
    <TaskList title="Task list">
      {tasks.map(task => <TaskItem key={task.id} task={task} />)}
    </TaskList> 
  </div>
);

TasksContainer.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id)),
  moveUpTask: id => dispatch(moveUpTask(id)),
  moveDownTask: id => dispatch(moveDownTask(id)),
  deleteTask: id => dispatch(deleteTask(id)),
  checkAllTasks: id => dispatch(checkAllTasks(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
