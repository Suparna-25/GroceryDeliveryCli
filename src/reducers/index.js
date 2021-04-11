import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import errorReducer from './errorReducer';
export default combineReducers({
   errorReducer:errorReducer,
   categories:categoriesReducer

});