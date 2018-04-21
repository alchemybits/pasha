import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productoReducer from './productoReducer';

const rootReducer = combineReducers({
	form: formReducer,
	count: 42,
	name: "Armando",
	productos: productoReducer
});

export default rootReducer;