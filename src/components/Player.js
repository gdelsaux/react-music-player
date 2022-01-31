import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Font awsome icons
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
//import util function
import { playAudio } from "../utils";

function Player({
  setCurrentSong,
  currentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  setSongs,
  songs,
}) {
  //useEffet
  useEffect(() => {
    //toggle active state
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
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
    playAudio(isPlaying, audioRef);
  }, [currentSong]);

  //event handler
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "back") {
      //check if the result is -1 | set the song to the last index in the songs array
      if ((currentIndex - 1) % songs.length === -1) {
        console.log("fromage");
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };
  //Format time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // inline style
  const animTrack = { transform: `translateX(${songInfo.animationPercentage}%)`}
  const linearGradient = {background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]} )`}


  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={linearGradient} className="track">
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div style={animTrack} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "   "}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("back")}
          className="skik-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
