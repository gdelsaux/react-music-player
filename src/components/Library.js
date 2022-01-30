import React from "react";
//components
import LibrarySong from "./LibrarySong";

function Libray({ songs }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => {
          return <LibrarySong song={song} />
        })}
      </div>
    </div>
  );
}

export default Libray;
