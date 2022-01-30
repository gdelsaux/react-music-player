import React from "react";

function LibrarySong({ song }) {
  return (
    <div key={song.id} className="library-song">
      <img src={song.cover} alt="Album cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>by {song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
