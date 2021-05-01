import {FETCH_RIDE_REQUEST, FETCH_RIDE_RECEIVED, FETCH_RIDE_FAILED} from './ActionTypes';
const initstate = {isFetching : false, message : false, offer:[]};
export const FetchRide =(state = initstate, action)=>{
    
    switch(action.type){
        case FETCH_RIDE_REQUEST:
            return Object.assign({}, state,{message : false, isFetching:true});
        
        case FETCH_RIDE_RECEIVED:
            return Object.assign({}, state,{offer:action.response.offer,isFetching:false});
        
        case FETCH_RIDE_FAILED:
            return Object.assign({}, state,{message : "Failed",isFetching:false});
        
        default:
            return state;
    }
}