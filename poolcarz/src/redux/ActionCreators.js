import baseUrl from '../shared/baseUrl';
import * as ActionType from './ActionTypes';


export const requestAddUser = () =>{
    return {
        type : ActionType.ADD_USER_REQUEST
    }
}

export const receiveAddUser = () =>{
    return{
        type : ActionType.ADD_USER_RECEIVED
    }
}

export const errorAddUser = (message) =>{
    return {
        type : ActionType.ADD_USER_FAILED,
        message
    }
}

export const registerUser = (data)=>(dispatch)=> {
    dispatch(requestAddUser());
    fetch(baseUrl+'users/signup',{
        method : 'POST',
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then((response)=>{
        if (response.ok){
            return response
        }
        else{
            var error = new Error('Error :'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    err=>{ throw err})
    .then(response => response.json())
    .then(response =>{
        if (response.success){
            dispatch(receiveAddUser());
            dispatch(loginUser({username: data.username, password: data.password}))
        }
        else{
            dispatch(errorAddUser(response.message));
        }
    })
    .catch((err)=>dispatch(errorAddUser(err.message)));
    
};



export const receiveLogin = (response)=>{
    return {
        type : ActionType.LOGIN_USER_RECEIVED,
        response
    }
}

export const requestLogin = ()=>{
    return {
        type : ActionType.LOGIN_USER_REQUEST        
    }
}

export const errorLogin = (message) =>{
    return {
        type : ActionType.LOGIN_USER_FAILED,
        message
    }
}

export const loginUser= (creds)=> (dispatch) =>{
    dispatch(requestLogin());
    fetch(baseUrl+'users/login',{
        method : 'POST',
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(creds)
    })
    .then((response)=>{
        if (response.ok){
            return response
        }
        else{
            var error = new Error('Error :'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    err=>{ throw err})
    .then(response => response.json())
    .then(response =>{
        if (response.success){

            dispatch(receiveLogin(response));
            dispatch(fetchRide());
        }
        else{
            dispatch(errorLogin(response));
        }
    })
    .catch((err)=>dispatch(errorLogin(err)));
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
    dispatch(requestLogout());
    fetch(baseUrl+'users/logout',{
        method : 'GET',
        headers : {
            'Content-Type' : "application/json"
        }
    })
    .then((response)=>{
        if (response.ok){
            return response
        }
        else{
            var error = new Error('Error :'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    err=>{ throw err})
    .then(response => response.json())
    .then(response =>{
        if (response.success){

            dispatch(receiveLogout(response));
        }
        else{
            dispatch(errorLogout(response));
        }
    })
    .catch((err)=>dispatch(errorLogout(err)));
};

export const requestFetchRide = () =>{
    return {
        type : ActionType.FETCH_RIDE_REQUEST
    }
};

export const receivedFetchRide = (response) =>{
    return {
        type : ActionType.FETCH_RIDE_RECEIVED,
        response
    }
};

export const errorFetchRide = (response) =>{
    return {
        type : ActionType.FETCH_RIDE_FAILED,
        response
    }
};

export const fetchRide = () => (dispatch) =>{
    dispatch(requestFetchRide());
    const bearer = 'Bearer ' + localStorage.getItem('token');
    fetch(baseUrl+'ride/',{
        method : 'GET',
        headers : {
            'Content-Type' : "application/json",
            'Authorization': bearer
        },
    })
    .then((response)=>{
        if (response.ok){
            return response
        }
        else{
            var error = new Error('Error :'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    err=>{ throw err})
    .then(response => response.json())
    .then(response =>{
        if (response.success){

            dispatch(receivedFetchRide(response));
        }
        else{
            dispatch(errorFetchRide(response));
        }
    })
    .catch((err)=>dispatch(errorFetchRide(err)));
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

export const bookRide = (offerId) => (dispatch)=>{
    dispatch(requestBookRide());
    const bearer = 'Bearer ' + localStorage.getItem('token');
    fetch(baseUrl+'ride/bookride',{
        method : 'POST',
        headers : {
            'Content-Type' : "application/json",
            'Authorization': bearer
        },
        body:JSON.stringify(offerId)
    })
    .then((response)=>{
        if (response.ok){
            return response
        }
        else{
            var error = new Error('Error :'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    err=>{ throw err})
    .then(response => response.json())
    .then(response =>{
        if (response.success){

            dispatch(receivedBookRide(response));
        }
        else{
            dispatch(errorBookRide(response));
        }
    })
    .catch((err)=>dispatch(errorBookRide(err)));
};

export const requestCancelRide = () =>{
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

export const errorCancelRide = (data) =>{
    return {
        type : ActionType.CANCEL_RIDE_FAILED,
        data
    }
};

export const cancelRide = (offerId) => (dispatch)=>{
    dispatch(requestCancelRide());
    const bearer = 'Bearer ' + localStorage.getItem('token');
    fetch(baseUrl+'ride/cancelride/',{
        method : 'POST',
        headers : {
            'Content-Type' : "application/json",
            'Authorization': bearer
        },
        body:JSON.stringify(offerId)
    })
    .then((response)=>{
        if (response.ok){
            return response
        }
        else{
            var error = new Error('Error :'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    err=>{ throw err})
    .then(response => response.json())
    .then(response =>{
        if (response.success){

            dispatch(receivedCancelRide(response));
            dispatch(fetchRide());
        }
        else{
            dispatch(errorCancelRide(response));
        }
    })
    .catch((err)=>dispatch(errorCancelRide(err)));
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
    const bearer = 'Bearer ' + localStorage.getItem('token');
    fetch(baseUrl+'ride/offerride',{
        method : 'POST',
        headers : {
            'Content-Type' : "application/json",
            'Authorization': bearer
        },
        body:JSON.stringify(rideDetails)
    })
    .then((response)=>{
        if (response.ok){
            return response
        }
        else{
            var error = new Error('Error :'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    err=>{ throw err})
    .then(response => response.json())
    .then(response =>{
        if (response.success){

            dispatch(receivedOfferRide(response));
            dispatch(fetchRide());
        }
        else{
            dispatch(errorOfferRide(response));
        }
    })
    .catch((err)=>dispatch(errorOfferRide(err)));
}