import React from "react";

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
  const songSelectHandler = async () => {
    await setCurrentSong(song);
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
    if(isPlaying) audioRef.current.play()
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
