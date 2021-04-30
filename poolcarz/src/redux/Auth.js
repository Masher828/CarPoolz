import {LOGIN_USER_REQUEST,LOGIN_USER_RECEIVED, LOGIN_USER_FAILED, LOGOUT_USER_REQUEST ,LOGOUT_USER_RECEIVED } from './ActionTypes';
const initstate={isAuthenticated : localStorage.getItem('isAuthenticated'),isFetching: false} 

export const Auth = (state=initstate, action)=>{
    switch(action.type){

        case LOGIN_USER_RECEIVED:
            localStorage.setItem('isAuthenticated',true)
            return Object.assign({}, state,{isAuthenticated : true, isFetching:false})

        case LOGIN_USER_REQUEST:
            return Object.assign({}, state,{isAuthenticated : false, isFetching:true})
        
        case LOGIN_USER_FAILED:
            return Object.assign({}, state,{isAuthenticated : false, isFetching:false})

        case LOGOUT_USER_REQUEST:
            return Object.assign({}, state,{isAuthenticated : false, isFetching:true})

        case LOGOUT_USER_RECEIVED:
            localStorage.removeItem('isAuthenticated');
            return Object.assign({}, state,{isAuthenticated : false, isFetching:false})
        default:
            return state
    }
}

