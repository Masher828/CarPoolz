import {FETCH_RIDE_REQUEST, FETCH_RIDE_RECEIVED, FETCH_RIDE_FAILED} from './ActionTypes';
import {data} from '../shared/Ride';
const initstate = {isFetching : false, message : "", success:"", rides:data};
export const FetchRide =(state = initstate, action)=>{
    switch(action.type){
        case FETCH_RIDE_REQUEST:
            return Object.assign({}, state,{message : "", success:"",isFetching:true});
        
        case FETCH_RIDE_RECEIVED:
            return Object.assign({}, state,{message : "Received", success:"success",isFetching:false});
        
        case FETCH_RIDE_FAILED:
            return Object.assign({}, state,{message : "Failed", success:"warning",isFetching:false});
        
        default:
            return state;
    }
}