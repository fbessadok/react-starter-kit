import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  form: formReducer,
});

export default rootReducer;
