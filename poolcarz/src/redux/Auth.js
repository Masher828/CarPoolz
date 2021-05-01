import {ADD_USER_RECEIVED, ADD_USER_REQUEST, ADD_USER_FAILED ,LOGIN_USER_REQUEST,LOGIN_USER_RECEIVED, LOGIN_USER_FAILED, LOGOUT_USER_REQUEST ,LOGOUT_USER_RECEIVED } from './ActionTypes';
const initstate={lmessage : null,rmessage:null, isAuthenticated : localStorage.getItem('token')? true: false,
                isLoading: false, toke: localStorage.getItem('token')} 

export const Auth = (state=initstate, action)=>{
    switch(action.type){
        
        case LOGIN_USER_RECEIVED:
            localStorage.setItem('token',action.response.token)
            return Object.assign({}, state,{isAuthenticated : true, isLoading:false,lmessage: null,rmessage:null})

        case LOGIN_USER_REQUEST:
            return Object.assign({}, state,{isAuthenticated : false, isLoading:true, lmessage: null})
        
        case LOGIN_USER_FAILED:
            return Object.assign({}, state,{isAuthenticated : false, isLoading:false, lmessage:action.message.message})

        case LOGOUT_USER_REQUEST:
            return Object.assign({}, state,{isAuthenticated : false, isLoading:true})

        case LOGOUT_USER_RECEIVED:
            localStorage.removeItem('token');
            return Object.assign({}, state,{isAuthenticated : false, isLoading:false})
        
        case ADD_USER_RECEIVED:
            return Object.assign({}, state,{isLoading:false, lmessage:null, rmessage:null})
    
        case ADD_USER_REQUEST:
            return Object.assign({}, state,{isRegistered : false, isLoading:true, lmessage : null,rmessage:null})
            
        case ADD_USER_FAILED:
            return Object.assign({}, state,{isRegistered : false, isLoading:false, rmessage : action.message.message? action.message.message : "Error cannot add user"})
        default:
            return state
    }
}

