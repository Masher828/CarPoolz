import {BOOK_RIDE_REQUEST, BOOK_RIDE_RECEIVED, BOOK_RIDE_FAILED, CANCEL_RIDE_REQUEST, CANCEL_RIDE_RECEIVED, CANCEL_RIDE_FAILED} from './ActionTypes';

const initstate = {isFetching : false, message : ""};

export const BookRide = (state=initstate, action)=>{
    switch(action.type){

        case BOOK_RIDE_REQUEST:
            return Object.assign({}, state,{isFetching:true});

        case BOOK_RIDE_RECEIVED:
            return Object.assign({}, state,{message : "Received", success:"success",isFetching:false});

        case BOOK_RIDE_FAILED:
            return Object.assign({}, state,{message : "Failed", success:"warning",isFetching:false});
        
        case CANCEL_RIDE_REQUEST:
            return Object.assign({}, state,{isFetching:true});

        case CANCEL_RIDE_RECEIVED:
            return Object.assign({}, state,{message : "Cancelled", success:"success",isFetching:false});

        case CANCEL_RIDE_FAILED:
            return Object.assign({}, state,{message : "Failed", success:"warning",isFetching:false});

        default:
            return state;

    }
};