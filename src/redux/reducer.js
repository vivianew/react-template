import { combineReducers } from 'redux';
import starterReducer from './modules/starter-reducer';

const rootReducer = combineReducers({
	starter: starterReducer,
});

export default rootReducer;