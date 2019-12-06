/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */

import {combineReducers} from "redux";
import authReducer from "./authReducer";
import songsReducer from "./songsReducer";
const masterReducer  = combineReducers({
 authReducer, songsReducer
});

export default masterReducer;
