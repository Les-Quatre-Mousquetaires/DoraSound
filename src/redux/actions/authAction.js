import {USER_LOGIN_FACEBOOK, USER_LOGIN_PASS, USER_LOGOUT} from "../../commons/types";
import apiCaller from "../../commons/apiCaller";
import User from "../models/UserModel";

const NormalLogin = (user) => {
    return async dispatch => {
        const response = await apiCaller('auth/login', 'POST', user);
        response ? storedUser(response.data) : storedUser(User);
        dispatch({type: USER_LOGIN_PASS, payload: response})
    }
}

const LoginWithFB = (fbToken) => {
    return async dispatch => {
        // console.log(JSON.stringify({fbToken}, null, 4));
        const response = await apiCaller('auth/facebook-auth-callback','POST', { access_token: fbToken});
        response ? storedUser(response.data) : storedUser(User);
        dispatch({type: USER_LOGIN_FACEBOOK, payload: response})
    }
}

const logout = () => {
    return async dispatch => {
        localStorage.setItem('user', JSON.stringify(User));
        dispatch({type: USER_LOGOUT});
    }
}

let storedUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}

export {
    NormalLogin,
    LoginWithFB,
    logout
}