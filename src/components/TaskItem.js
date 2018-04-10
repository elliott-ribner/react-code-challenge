import React from 'react';
import PropTypes from 'prop-types';
 
const TaskItem = ({ title, completed, onToggle, onMoveUp, onMoveDown, onDelete }) => (
  <div id="taskitem"> 
    <li className="liTaskItem" >
      <div className="liBtn">
        <label style={ {backgroundColor: completed ? 'green' : 'white', color: completed ? 'yellow':'black' }} className='LabelStyle inputField'> {title} </label>
        <button onClick={onMoveUp}>Up</button>
        <button onClick={onMoveDown}>Down</button>
        <button onClick={onDelete} >Delete</button>
        <input type="checkbox" checked={completed} onClick={onToggle} className="clsCheckBox"/>
      </div>
    </li>
  </div>
);

TaskItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default TaskItem;
