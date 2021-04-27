import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Auth } from './Auth';


export const store = applyMiddleware(thunk)(createStore)(Auth);
