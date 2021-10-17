import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import logo from "../Assets/logo.png";
import { useRoom } from "../Providers/RoomProvider";
import { getVideoID } from "../Providers/Service";
import { useParams } from "react-router";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../firebase";

const Header = () => {
  const { roomId } = useParams();
  const { input, setInput, setVideoId } = useRoom();
  const [modal, setModal] = useState(false);

  const AddVideoId = () => {
    const roomRef = doc(db, "room", roomId);
    updateDoc(roomRef, {
      videoId: getVideoID(input),
    }).then((res) => {
      setInput("");
    });
  };

  const closeRoom = async () => {
    // const deleted = await deleteDoc(doc(db, "room", "roomId"))
    //   // window.localStorage.removeItem("user");
    //   // window.location.href = "http://localhost:3000/";
    // console.log(await deleted)
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "#202020",
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
        alignItems: "center",
      }}
    >
      <img src={logo} alt="" style={{ height: "50px", marginLeft: "20px" }} />
      <Box sx={{ display: "flex", width: "40%" }}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ width: "100%", backgroundColor: "#121212", marginRight: 1 }}
          inputProps={{ style: { color: "white" } }}
          placeholder="Search"
        />
        <Button variant="outlined" onClick={AddVideoId}>
          Add
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          Invite
        </Button>
        <Button
          onClick={() => setModal(true)}
          variant="contained"
          color="error"
          sx={{ marginLeft: 2 }}
        >
          Close Room
        </Button>
      </Box>
      <Dialog
        open={modal}
      > 
      <DialogTitle id="alert-dialog-title">
          Close Room
        </DialogTitle>
        <DialogActions>
          <Button color="primary" onClick={() => setModal(false)} variant="contained">Cancel</Button>
          <Button color="error" variant="contained" onClick={() => setModal(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Header;
