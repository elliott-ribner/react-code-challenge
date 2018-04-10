import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TasksList = ({
  tasks,
  toggleTask,
  moveUpTask,
  moveDownTask,
  deleteTask,
  checkAllTasks
}) => (
  <div id="tasklist">
    <button onClick={() => checkAllTasks()} className="clsCheckAll">Check all</button>
    <ul className="clsTaskList" >
      {tasks &&
        tasks.map(task => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={() => toggleTask(task.id)}
            onMoveUp={() => moveUpTask(task.id)}
            onMoveDown={() => moveDownTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
    </ul>
  </div>
);

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTask: PropTypes.func.isRequired,
  moveUpTask: PropTypes.func.isRequired,
  moveDownTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired, 
};

export default TasksList;
