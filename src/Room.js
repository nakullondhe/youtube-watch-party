/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./Room.css";
import { Container, Grid } from "@mui/material";
import { Header, ChatBox, Footer } from "./Components/index";
import YouTube from "react-youtube";
import Constants from "./Constants";
import { useParams } from "react-router";
import { doc, onSnapshot, updateDoc } from "@firebase/firestore";
import { db } from "./firebase";
import { useRoom } from "./Providers/RoomProvider";
import { GetNameModal } from "./Components/Modals";
import socket from "./Socket";
import YoutubePlayer from "./Components/YoutubePlayer";
const user = JSON.parse(window.localStorage.getItem("user"));

const Room = () => {
  const { roomId } = useParams();
  const { room, setRoom, player, gap, setGap } = useRoom();
  const [modal, setModal] = useState(true);

  useEffect(() => {
    socket.emit("join", { roomId, name: user.name });
    onSnapshot(doc(db, "room", roomId), (res) => {
      let data = res.data();
      if (JSON.stringify(data) !== JSON.stringify(room)) {
        setRoom(data);
        if (!user.owner && player) {
          if (data.play) {
            player?.playVideo();
          } else if (!data.play) {
            player?.pauseVideo();
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    if (user.owner) {
      if (room?.play && !gap) {
        let inter = setInterval(() => {
          let time = player?.getCurrentTime();
          socket.emit("time-counter", { time });
        }, 1000);
        setGap(inter);
      } else if (room && room.play === false) {
        clearInterval(gap);
        setGap(null);
      }
    }

    if (room && room.play && !user.owner) {
      socket.on("timer-up", (data) => console.log(data));
    }
  }, [room]);
  console.log(gap);
  return (
    <>
      {room && room.videoId && (
        <div className="App bb">
          <Header />
          <Container sx={{ width: "100%", padding: "0 !important" }}>
            <Grid
              container
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Grid item sx={{ paddingRight: 2 }} xs={8}>
                <YoutubePlayer room={room} />
              </Grid>

              <Grid item sx={{}} xs={4}>
                <ChatBox roomId={roomId} />
              </Grid>
            </Grid>
          </Container>

          <GetNameModal
            roomId={roomId}
            open={modal}
            onClose={() => setModal(false)}
          />

          <Footer />
        </div>
      )}
    </>
  );
};

export default Room;
