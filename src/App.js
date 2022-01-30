import React, { useState }from "react";
//Components
import Song from './components/Song';
import Player from './components/Player';
import Library from "./components/Library";
import LibrarySong from "./components/LibrarySong";
//Style
import './styles/app.scss';
//Util
import data from './util';

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <Library songs={songs} />
    </div>
  );
}

export default App;
