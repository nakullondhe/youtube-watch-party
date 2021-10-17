import React, { useEffect, useState } from "react";
import "./Room.css";
import { Container, Grid } from "@mui/material";
import {Header,ChatBox,Footer} from "./Components/index";
import YouTube from "react-youtube";
import Constants from "./Constants";
import { useParams } from "react-router";
import { collection, doc, getDoc, onSnapshot, updateDoc } from "@firebase/firestore";
import { db } from "./firebase";
import { useRoom } from "./Providers/RoomProvider";
import { generateName } from "./Providers/Service";

const Room = () => {
  const {roomId} = useParams();
  const [player, setPlayer] = useState(null);
  const { room, setRoom} = useRoom();
  const ChangeState = (state) => {
    setPlayer(state.data)
  }

  const changeVideoState = (state) => {
    const roomRef = doc(db, "room", roomId);
    updateDoc(roomRef, {
      play: state.data == 1 ? true : false
    })
  }

  useEffect(() => {
      onSnapshot(doc(db, "room", roomId), (doc) => {
        setRoom({...room, room: doc.data()});
      })
  }, [])
  
  // useEffect(() => {
  //   if(!window.localStorage.user) {
  //     generateName();
  //   }
  // })
  
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
            <YouTube
              videoId={room?.room?.videoId}
              className="yt_player"
              opts={Constants.react_yt_opts}
              onStateChange={(d) => console.log(d)}
            />
          </Grid>
          <Grid item sx={{}} xs={4}>
            <ChatBox roomId={roomId} />
          </Grid>
        </Grid>
        
      </Container>

      <Footer />
    </div>
  );
};

export default Room;
