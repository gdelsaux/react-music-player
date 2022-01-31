import React from "react";
//import util function
import {playAudio} from '../utils'

function LibrarySong({
  id,
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) {
  //event handlers
  const songSelectHandler = () => {
    setCurrentSong(song);
    //toggle active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    playAudio(isPlaying, audioRef)
  };
  return (
    <div
      key={song.id}
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="Album cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>by {song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
