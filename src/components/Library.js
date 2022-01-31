import React from "react";
//components
import LibrarySong from "./LibrarySong";

function Libray({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              songs={songs}
              setCurrentSong={setCurrentSong}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              id={song.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Libray;
