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
import useScript from "./Providers/LoadScript";

const Room = () => {
  const { roomId } = useParams();
  const { room, setRoom, player, setPlayer} = useRoom();
  const [modal, setModal] = useState(true);
  const status = useScript('https://www.youtube.com/iframe_api');

  const changeVideoState = (e) => {
    const roomRef = doc(db, "room", roomId);
    setPlayer(e.target);
    updateDoc(roomRef, {
      play: e.data === 1 ? true : false,
    });
  };

  // const createFrame = async () => {
  //   let newPlayer = new YT.Player("player", {
  //     height: "400",
  //     width: "640",
  //     playerVars: {
  //       playsinline: 1,
  //       disablekb: 1,
  //       modestbranding: 1,
  //       rel: 0,
  //     },
  //     events: {
  //       onStateChange: changeVideoState,
  //     },
  //   });
  //   setPlayer(await newPlayer);
  // };

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    onSnapshot(doc(db, "room", roomId), (res) => {
      let data = res.data();
      if (data !== room) {
        setRoom({ ...room, room: data });
        // if(data.videoId !== room.room.videoId) {

        // }
        if (!user.owner && player) {
          console.log(data.play);
          if (data.play) {
            player?.playVideo();
          } else if (!data.play) {
            player?.pauseVideo();
          }
        }
      }
    });
  }, []);



  console.log({ player });
  return (
    <div className="App">
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
            {/* <div id="player" className="yt_player" /> */}

                       <YouTube
              videoId={room?.room?.videoId}
              className="yt_player"
              opts={Constants.react_yt_opts}
              onReady={(e) => setPlayer(e.target)}
              onPlay={(e) => setPlayer(e.target)}
              onPause={(e) => setPlayer(e.target)}
              onStateChange={(e) => changeVideoState(e)}
              // onPlay={(p) => console.log({p})}
            />
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
  );
};

export default Room;
