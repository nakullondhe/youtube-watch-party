/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase";
import Constants from "../Constants";
import { useRoom } from "../Providers/RoomProvider";
import { useParams } from "react-router";
import socket from "../Services/Socket";

const YoutubePlayer = ({ room }) => {
  const { roomId } = useParams();
  const { player, setPlayer, timer, setTimer, setRoom } = useRoom();
  const user = JSON.parse(localStorage.getItem("user"));

  const changeVideoState = (e) => {
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
  };

  // JOINEE SETUP
  useEffect(() => {
    if (!user.owner && player) {
      if (room.play) {
        player.seekTo(timer);
        player.playVideo();
      } else if (!room.play) {
        player.pauseVideo();
      }
    }
  }, [room]);

  useEffect(() => {
    if (!user.owner) {
      socket.on("timer-up", (data) => {
        setTimer(data.time);
        setRoom({ ...room, play: data.play})
      });
    }
    return () => {
      socket.off("timer-up");
    };
  }, [room]);


  return (
    <>
      <YouTube
        videoId={room.videoId}
        className="yt_player"
        opts={user.owner ? Constants.yt_opts_owner : Constants.yt_opts_client}
        onReady={(e) => onPlayerReady(e)}
        onPlay={(e) => setPlayer(e.target)}
        onPause={(e) => setPlayer(e.target)}
        onStateChange={(e) => changeVideoState(e)}
      />
    </>
  );
};

export default YoutubePlayer;
