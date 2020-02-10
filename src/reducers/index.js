import {combineReducers} from 'redux';

const songsReducer = () => {
 return[
     {title: 'Father Dear', duration : '4:05'},
     {title: 'Kodesh', duration : '5:07'},
     {title: 'Miracles', duration : '4:40'}
 ];
};


const selectedSongReducer = (selectedSong= null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}





export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
})