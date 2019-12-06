import Song from '../models/SongModel';
import {
    SONGS_GET_ALL
} from "../../commons/types";

let songInitState = Song;

let songsReducer = (state=songInitState,action )=>{
    switch (action.type) {
        case SONGS_GET_ALL:
            return action.payload.data;
        default:
            return state;
    }
};

export  default  songsReducer;
