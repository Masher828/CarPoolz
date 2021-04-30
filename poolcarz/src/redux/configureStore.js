import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Auth } from './Auth';
import {BookRide} from './BookRide';
import {FetchRide} from './FetchRide';
import {OfferRide} from './OfferRide';

export const store = applyMiddleware(thunk)(createStore)(combineReducers({Auth, FetchRide, BookRide, OfferRide}));
