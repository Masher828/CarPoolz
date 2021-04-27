import * as ActionType from './ActionTypes';
const initstate={isAuthenticated : localStorage.getItem('isAuthenticated')} 

export const Auth = (state=initstate, action)=>{
    switch(action.type){
        case ActionType.LOGIN_USER:
            if (action.payload.username =="Mashersh" && action.payload.password =="1234567890"){
                localStorage.setItem('isAuthenticated', true);
                return Object.assign({}, state,{isAuthenticated : true})
            }
            return Object.assign({}, state,{isAuthenticated : false})
        case ActionType.LOGOUT_USER:
            if (localStorage.getItem('isAuthenticated')){
                localStorage.setItem('isAuthenticated',false);
                
            }
            return Object.assign({}, state,{isAuthenticated : false})
        default:
            return state
    }
}

