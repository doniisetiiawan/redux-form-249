import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import device from './deviceReducer';
import coins from '../../reducers/coinsReducer';

const rootReducer = combineReducers({
  device,
  coins,
  form: formReducer,
});

export default rootReducer;
