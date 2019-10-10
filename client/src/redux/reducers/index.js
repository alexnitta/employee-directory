import { combineReducers } from 'redux';
import { sidebar } from './sidebar';
import { employees } from './employees';

export const rootReducer = combineReducers({ sidebar, employees });
