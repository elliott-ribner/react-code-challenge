import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import tasks from './tasks-reducer'

// Your reducers will be imported and placed into this object with their names as keys
const reducers = {
  tasks, 
  form: reduxFormReducer, // mounted under "form"
};

export default combineReducers({...reducers})