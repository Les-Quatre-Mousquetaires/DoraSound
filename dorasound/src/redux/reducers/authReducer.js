/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */

import User from "../models/UserModel";
import {
    USER_LOGIN_FACEBOOK,
    USER_LOGIN_GOOGLE,
    USER_LOGIN_PASS,
    USER_LOGIN_QR_CODE,
    USER_REGISTER
} from "../../commons/types";

const userLogged = JSON.parse(localStorage.getItem('user'));
let userInitState = (userLogged && userLogged.token) ? userLogged : {user: User};

let authReducer = (state = userInitState, action) => {
    switch (action.type) {
        case USER_LOGIN_PASS:
            return state;
        case USER_LOGIN_GOOGLE:
            return state;
        case USER_LOGIN_FACEBOOK:
            return state;
        case USER_LOGIN_QR_CODE:
            return state;
        case USER_REGISTER:
            return state;
        default: return state;
    }
};

export default authReducer;
