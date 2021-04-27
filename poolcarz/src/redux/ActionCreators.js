import * as ActionType from './ActionTypes';

export const loginUser = (username,password)=> ({
    type : ActionType.LOGIN_USER,
    payload : {
        username : username,
        password : password
    }
    
});

export const logoutUser = () =>({
    type : ActionType.LOGOUT_USER
})