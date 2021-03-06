import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//fontaweson icon
import { faLinkedin, faGithub, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
//Components
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
//Style
import "./styles/app.scss";
//Util
import data from "./data";

function App() {
  //useRef
  const audioRef = useRef(null);

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  //Event handlers
  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate time percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const sonEndEndler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        setSongs={setSongs}
        songs={songs}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        onEnded={sonEndEndler}
        src={currentSong.audio}
        ref={audioRef}
      />
      <div className="credential">
        <p>designed and developed by @G-Dev</p>
        {/* <p>designed and developed by <a id="portfolio" href="https://g-deve.herokuapp.com/">@G-dev</a></p> */}
        <br />
        <a href="https://www.linkedin.com/in/gaetandelsaux" target={'_blank'}><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/gdelsaux" target={'_blank'}><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://twitter.com/delsaux_g" target={'_blank'}><FontAwesomeIcon icon={faTwitterSquare} /></a>
      </div>
    </div>
  );
}

export default App;
