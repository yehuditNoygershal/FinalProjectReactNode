
import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './reducers/users';
import task from './reducers/task';

const reducer=combineReducers({users,task});

const store=createStore(reducer);
window.store=store;
export default store;