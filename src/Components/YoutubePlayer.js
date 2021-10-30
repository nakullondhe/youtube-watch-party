import React from "react";
import YouTube from "react-youtube";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase";
import Constants from "../Constants";
import { useRoom } from "../Providers/RoomProvider";
import { useParams } from "react-router";

const YoutubePlayer = ({ room }) => {
  const { roomId } = useParams();
  const { player, setPlayer } = useRoom();
  const user = JSON.parse(localStorage.getItem("user"));
  
  const changeVideoState = (e) => {
    e.preventDefault();
    const roomRef = doc(db, "room", roomId);
    setPlayer(e.target);
    if (user.owner) {
      updateDoc(roomRef, {
        play: e.data === 1 ? true : false,
      });
    }
  };

  const onPlayerReady = async (e) => {
    setPlayer(await e.target);
  }

  const loadVideo = () => {
    player.loadVideo
  }

  return (
    <>
      <YouTube
        videoId={room.videoId}
        className="yt_player"
        opts={Constants.react_yt_opts}
        onReady={(e) => onPlayerReady(e)}
        onPlay={(e) => setPlayer(e.target)}
        onPause={(e) => setPlayer(e.target)}
        onStateChange={(e) => changeVideoState(e)}
      />
    </>
  );
};

export default YoutubePlayer;
