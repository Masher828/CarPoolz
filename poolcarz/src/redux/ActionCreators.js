import baseUrl from '../shared/baseUrl';
import * as ActionType from './ActionTypes';


export const requestAddUser = (data) =>{
    return {
        type : ActionType.ADD_USER_REQUEST,
        data
    }
}

export const receiveAddUser = (response) =>{
    return{
        type : ActionType.ADD_USER_RECEIVED,
        response
    }
}

export const errorAddUser = (response) =>{
    return {
        type : ActionType.ADD_USER_FAILED,
        response
    }
}

export const registerUser = (creds)=>(dispatch)=> {
    setTimeout(dispatch(requestAddUser(creds)), 3000);
    dispatch(receiveAddUser(creds));
    
};



export const receiveLogin = (response)=>{
    return {
        type : ActionType.LOGIN_USER_RECEIVED,
        response
    }
}

export const requestLogin = (creds)=>{
    return {
        type : ActionType.LOGIN_USER_REQUEST,
        creds
        
    }
}

export const errorLogin = (message) =>{
    return {
        type : ActionType.LOGOUT_USER_FAILED,
        message
    }
}

export const loginUser= (creds)=> (dispatch) =>{
    dispatch(receiveLogin(creds));
}

export const requestLogout = () =>{
    return{
        type : ActionType.LOGOUT_USER_REQUEST
    }
};

export const receiveLogout = () =>{
    return{
        type : ActionType.LOGOUT_USER_RECEIVED
    }
};

export const errorLogout = (message) =>{
    return {
    type : ActionType.LOGOUT_USER_FAILED,
    message
    }
};

export const logoutUser = () => (dispatch) =>{
    dispatch(receiveLogout());
    
};

export const requestFetchRide = () =>{
    return {
        type : ActionType.FETCH_RIDE_REQUEST
    }
};

export const receivedFetchRide = () =>{
    return {
        type : ActionType.FETCH_RIDE_RECEIVED
    }
};

export const errorFetchRide = () =>{
    return {
        type : ActionType.FETCH_RIDE_FAILED
    }
};

export const fetchRide = () => (dispatch) =>{
    dispatch(requestFetchRide());
    dispatch(receivedFetchRide());
};

export const requestBookRide = () =>{
    return{
        type : ActionType.BOOK_RIDE_REQUEST
    }
};

export const receivedBookRide = (data) =>{
    return {
        type : ActionType.BOOK_RIDE_RECEIVED,
        data
    }
};

export const errorBookRide = (data) =>{
    return {
        type : ActionType.BOOK_RIDE_FAILED,
        data
    }
};

export const bookRide = (rideId) => (dispatch)=>{
    dispatch(requestBookRide());
    dispatch(receivedBookRide(rideId));
};

export const requestCanceRide = () =>{
    return{
        type : ActionType.CANCEL_RIDE_REQUEST
    }
};

export const receivedCancelRide = (data) =>{
    return {
        type : ActionType.CANCEL_RIDE_RECEIVED,
        data
    }
};

export const errorCanceRide = (data) =>{
    return {
        type : ActionType.CANCEL_RIDE_FAILED,
        data
    }
};

export const cancelRide = (rideId) => (dispatch)=>{
    dispatch(requestCanceRide());
    dispatch(receivedCancelRide(rideId));
};

export const requestOfferRide = () =>{
    return{
        type : ActionType.OFFER_RIDE_REQUEST
    }
};

export const receivedOfferRide = (data) =>{
    return{
        type : ActionType.OFFER_RIDE_RECEIVED,
        data
    }
};

export const errorOfferRide =(data)=>{
    return{
        type : ActionType.OFFER_RIDE_FAILED,
        data
    }
};

export const offerRide =(rideDetails)=>(dispatch)=>{
    dispatch(requestOfferRide());
    dispatch(receivedOfferRide(rideDetails));
}