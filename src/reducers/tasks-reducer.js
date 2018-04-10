import * as types from '../const.js'

// swap consecutive items before or after x based on direction
const swapConsecutiveItems =  (list, x, direction) =>
  Object.assign([], list, {[x]: list[x + direction], [x + direction]: list[x]})

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
      ]

    case types.TOGGLE_TASK:
      return state.map(task =>
        (task.id === action.id)
          ? {...task, completed: !task.completed}
          : task
      )

    // Move task up (direction -1), silentely ignore invalid requests
    case types.MOVE_UP_TASK:
    {
      const index = state.findIndex( (el) => el.id === action.id )
      return (index > 0) ? swapConsecutiveItems(state, index, -1) : state;
    }

     // Move task down (direction 1), silentely ignore invalid requests
    case types.MOVE_DOWN_TASK:
    {
      const index = state.findIndex( (el) => el.id === action.id )
      return (index < state.length -1) ? swapConsecutiveItems(state, index, 1): state;
    }

    // Regenerate the store without the to-be-removed entry
    case types.REMOVE_TASK:
      return state.filter((data, i) => data.id !== action.id);

    case types.CHECK_ALL_TASKS:
    {
      const newState = state.map(elt => {
          return Object.assign({}, elt, {completed: true})
      });
      return newState;
    }

    default:
      return state
  }
}

export default tasksReducer
