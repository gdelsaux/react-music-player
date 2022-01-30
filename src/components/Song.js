import React from "react";

function Song({currentSong}) {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt='Album cover' />
      <h2>{currentSong.name}</h2>
      <h3>by {currentSong.artist}</h3>
    </div>
  );
}

export default Song;
