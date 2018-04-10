import * as actions from './index';
import * as types from '../const.js'

describe('task actions', () => {
  it('addTask A, id 0', () => {
    expect(actions.addTask('A')).toEqual({
      type: types.ADD_TASK,
      id: 0,
      completed: false
    });
  });

  it('addTask B id 1', () => {
    expect(actions.addTask('B')).toEqual({
      type: types.ADD_TASK,
      id: 1,
      completed: false
    });
  });

  it('toggleTask B', () => {
    expect(actions.toggleTask(1)).toEqual({
      type: types.TOGGLE_TASK,
      id: 1,
    });
  });

  it('moveUpTask A - silently ignored', () => {
    expect(actions.moveUpTask(0)).toEqual({
      type: types.MOVE_UP_TASK,
      id: 0
    });
  });

  it('moveDownTask B - silently ignored', () => {
    expect(actions.moveDownTask(1)).toEqual({
      type: types.MOVE_DOWN_TASK,
      id: 1
    });
  });

  it('moveUpTask B', () => {
    expect(actions.moveUpTask(1)).toEqual({
      type: types.MOVE_UP_TASK,
      id: 1
    });
  });

  it('moveDownTask B', () => {
    expect(actions.moveDownTask(1)).toEqual({
      type: types.MOVE_DOWN_TASK,
      id: 1
    });
  });

  it('checkAllTasks', () => {
    expect(actions.checkAllTasks()).toEqual({
      type: types.CHECK_ALL_TASKS,
    });
  });

  it('deleteTask B', () => {
    expect(actions.deleteTask(1)).toEqual({
      type: types.REMOVE_TASK,
      id: 1
    });
  });

  it('deleteTask A', () => {
    expect(actions.deleteTask(0)).toEqual({
      type: types.REMOVE_TASK,
      id: 0
    });
  });

  it('checkAllTasks with no tasks', () => {
    expect(actions.checkAllTasks()).toEqual({
      type: types.CHECK_ALL_TASKS,
    });
  });


});
