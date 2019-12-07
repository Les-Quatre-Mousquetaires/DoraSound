/*
 * Created by @tranphuquy19 on 02/12/2019
 * Email: tranphuquy19@gmail.com
 */

import axios from 'axios';
import config from "./config";
import headerHelper from "./headerHelper";

let apiCaller = (endpoint, method = 'GET', body) => {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body,
        headers: headerHelper()
    });
};

export default apiCaller;
