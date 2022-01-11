
import * as types from "./actionType";

const intialState = {
  
   prices:{},
   loading: true,
 };

 const usersReducers = (state = intialState, action) => {
   switch (action.type) {
            case types.GET_PRICES:
       return {
         ...state,
         prices: action.payload,
         loading: false,
       };



   default:
       return state;
   }
 };
 export default usersReducers;
