import { createStore, combineReducers } from 'redux';
import { composeEnhancers } from '../window';
import MenuReducer from './../Reducers/';

const store = createStore(
	combineReducers({
		menu: MenuReducer,
	}),
	composeEnhancers()
);

export default store