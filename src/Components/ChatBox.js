/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { db } from "../firebase";
import { useRoom } from "../Providers/RoomProvider";
import {ChatInput, Message} from "./index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  chat_box: {
    height: "300px",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  }
})

const ChatBox = ({ roomId }) => {
  const classes = useStyles();
  const { chats, setChats } = useRoom();
  const [message, setMessage] = useState("");
  const user = JSON.parse(window.localStorage.getItem("user"));

  const onSend = () => {
    if (message !== "") {
      addDoc(collection(db, "room", roomId, "chats"), {
        name: user.name,
        message: message,
        timestamp: serverTimestamp(),
      });
      setMessage("");
    }
  };

  useEffect(() => {
    const ref = collection(db, "room", roomId, "chats");
    const allRef = query(ref, orderBy('timestamp', 'asc'));
    onSnapshot(
      allRef, (docs) => {
        setChats(docs.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ backgroundColor: "#202020", padding: "10px 20px" }}>
        <Typography variant="h6" color="white">
          Chat
        </Typography>
      </Box>
      <Box
        className={classes.chat_box}
      >
        {chats.length !== 0 &&
          chats.map((chat, index) => <Message chat={chat} key={index} />)}
      </Box>
      <ChatInput message={message} setMessage={setMessage} onSend={onSend} />
    </Box>
  );
};

export default ChatBox;
