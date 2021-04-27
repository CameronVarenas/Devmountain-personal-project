import {createStore} from 'redux';
import userReducer from './user_reducer';

export default createStore(userReducer);