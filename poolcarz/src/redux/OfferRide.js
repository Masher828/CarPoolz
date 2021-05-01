import {OFFER_RIDE_REQUEST, OFFER_RIDE_RECEIVED, OFFER_RIDE_FAILED} from './ActionTypes';

const initstate = {isFetching : true, message:"", success:""};

export const OfferRide = (state=initstate, action)=>{
    switch(action.type){

        case OFFER_RIDE_REQUEST:
            return Object.assign({}, state,{message : "", success:"",isFetching:true});
        
        case OFFER_RIDE_RECEIVED:
            return Object.assign({}, state,{message : "Received", success:"success",isFetching:false});
        
        case OFFER_RIDE_FAILED:
            return Object.assign({}, state,{message : "Failed", success:"warning",isFetching:false});
        
        default:
            return state;
    }
};