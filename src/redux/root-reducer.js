import { combineReducers} from "redux";
import usersReducers from "./reducer";


const rootReducer = combineReducers({
    prices:usersReducers
 })
 export default rootReducer;