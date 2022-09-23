import { combineReducers } from 'redux';
import { dataReducer } from './reducer';

const reducer = combineReducers({ data: dataReducer });

export default reducer;
