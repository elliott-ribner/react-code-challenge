import tasks from './tasks-reducer';
import * as types from '../const.js';

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(tasks(undefined, {})).toEqual([]);
  });

  it('addTask A, id 0', () => {
    expect(
      tasks([], {
        type: types.ADD_TASK,
        id: 0,
        title: 'A',
        completed: false
      })
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: false
      }
    ]);
  });

  it('addTask B, id 1', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: false
          }
        ],
        {
          type: types.ADD_TASK,
          id: 1,
          title: 'B',
          completed: false
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: false
      },
      {
        id: 1,
        title: 'B',
        completed: false
      }
    ]);
  });

  it('toggleTask B on', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: false
          },
          {
            id: 1,
            title: 'B',
            completed: false
          }
        ],
        {
          type: types.TOGGLE_TASK,
          id: 1,
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: false
      },
      {
        id: 1,
        title: 'B',
        completed: true
      }
    ]);
  });

  it('toggleTask B off', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: false
          },
          {
            id: 1,
            title: 'B',
            completed: true
          }
        ],
        {
          type: types.TOGGLE_TASK,
          id: 1,
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: false
      },
      {
        id: 1,
        title: 'B',
        completed: false
      }
    ]);
  });

  it('Checkoff all tasks', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: false
          },
          {
            id: 1,
            title: 'B',
            completed: false
          }
        ],
        {
          type: types.CHECK_ALL_TASKS
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: true
      },
      {
        id: 1,
        title: 'B',
        completed: true
      }
    ]);
  });

  it('Move Up A (first task), no effect', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: true
          },
          {
            id: 1,
            title: 'B',
            completed: true
          }
        ],
        {
          type: types.MOVE_UP_TASK,
          id: 0
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: true
      },
      {
        id: 1,
        title: 'B',
        completed: true
      }
    ]);
  });

  it('Move down B (last task), no effect', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: true
          },
          {
            id: 1,
            title: 'B',
            completed: true
          }
        ],
        {
          type: types.MOVE_DOWN_TASK,
          id: 1
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: true
      },
      {
        id: 1,
        title: 'B',
        completed: true
      }
    ]);
  });

  it('Move down A', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: true
          },
          {
            id: 1,
            title: 'B',
            completed: true
          }
        ],
        {
          type: types.MOVE_DOWN_TASK,
          id: 0
        }
      )
    ).toEqual([
      {
        id: 1,
        title: 'B',
        completed: true
      },
      {
        id: 0,
        title: 'A',
        completed: true
      },
    ]);
  });

  it('Move up A', () => {
    expect(
      tasks(
        [
          {
            id: 1,
            title: 'B',
            completed: true
          },
          {
            id: 0,
            title: 'A',
            completed: true
          },
        ],
        {
          type: types.MOVE_UP_TASK,
          id: 0
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: true
      },
      {
        id: 1,
        title: 'B',
        completed: true
      },
    ]);
  });

  it('Delete B', () => {
    expect(
      tasks(
        [
          {
            id: 1,
            title: 'B',
            completed: true
          },
          {
            id: 0,
            title: 'A',
            completed: true
          },
        ],
        {
          type: types.REMOVE_TASK,
          id: 1
        }
      )
    ).toEqual([
      {
        id: 0,
        title: 'A',
        completed: true
      },
    ]);
  });

  it('Delete A', () => {
    expect(
      tasks(
        [
          {
            id: 0,
            title: 'A',
            completed: true
          },
        ],
        {
          type: types.REMOVE_TASK,
          id: 0
        }
      )
    ).toEqual([]);
  });

  it('Check all tasks on empty store', () => {
    expect(
      tasks(
        [],
        {
          type: types.CHECK_ALL_TASKS,
        }
      )
    ).toEqual([]);
  });
});
