import {USER_LOGIN_FACEBOOK} from "../../commons/types";
import apiCaller from "../../commons/apiCaller";
import User from "../models/UserModel";

const LoginWithFB = (fbToken) => {
    return async dispatch => {
        // console.log(JSON.stringify({fbToken}, null, 4));
        const response = await apiCaller('auth/facebook-auth-callback','POST', { access_token: fbToken});
        response ? storedUser(response.data) : storedUser(User);
        dispatch({type: USER_LOGIN_FACEBOOK, payload: response})
    }
}

let storedUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}

export {
    LoginWithFB
}