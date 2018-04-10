import * as types from '../const.js';

let nextTodoId = 0;

export const addTask = payload => ({
  type: types.ADD_TASK,
  id: nextTodoId++,
  title: payload.title,
  completed: false
});

export const toggleTask = id => ({
  type: types.TOGGLE_TASK,
  id
});

export const moveUpTask = id => ({
  type: types.MOVE_UP_TASK,
  id
});

export const moveDownTask = id => ({
  type: types.MOVE_DOWN_TASK,
  id
});

export const deleteTask = id => ({
  type: types.REMOVE_TASK,
  id
});

export const checkAllTasks = () => ({
  type: types.CHECK_ALL_TASKS
});
