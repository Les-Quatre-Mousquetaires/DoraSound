import apiCaller from "../../commons/apiCaller";
import {SONGS_GET_ALL}  from '../../commons/types';

const Get_All = ()=>{
    return async dispatch =>{
        const response = await apiCaller('api/songs/','GET');
        console.log('RES:',response);
        dispatch = ({type: SONGS_GET_ALL, payload: response})
    }
};

export {Get_All};
