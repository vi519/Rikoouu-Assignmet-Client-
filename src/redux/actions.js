 import * as types from "./actionType";
 import axios from "axios";

 const getPrices = (prices) => ({
   type: types.GET_PRICES,
   payload: prices,
 });

 export const loadPrice = () => {
   return function (dispatch) {
         axios.get(`https://react-redux-api-rikoouu.herokuapp.com/get-price`)
      .then((response) => {
         console.log("response from api", response);
         dispatch(getPrices(response.data));
       })
       .catch((error) => console.log("ERROR" + error));
   };
 };

