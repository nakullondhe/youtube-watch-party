import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "@firebase/firestore";
import { Typography } from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import { db } from "../firebase";
import { useRoom } from "../Providers/RoomProvider";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  chat_box: {
    height: "300px",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    // '&::-webkit-scrollbar': {
    //   width: '0.5em',
    //   borderRadius: '10px'
    // },
    // '&::-webkit-scrollbar-track': {
    //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',

    // },
    // '&::-webkit-scrollbar-thumb': {
    //   backgroundColor: 'red',

    // }
  }
})

const ChatBox = ({ roomId }) => {
  const classes = useStyles();
  const { chats, setChats } = useRoom();
  const [message, setMessage] = useState("");
  const user = window.localStorage.getItem("user");

  const onSend = () => {
    if (message !== "") {
      addDoc(collection(db, "room", roomId, "chats"), {
        name: user,
        message: message,
        timestamp: serverTimestamp(),
      });
      setMessage("");
    }
  };

  useEffect(() => {
    onSnapshot(
      collection(db, "room", roomId, "chats"),
      orderBy("timestamp", "asc"),
      (docs) => {
        setChats(docs.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  // useEffect(() => {
  //   addDoc(collection(db, "room", roomId, "chats"), {
  //     server: true,
  //     message: `${window.localStorage.user} joined the chat`
  //   })
  // }, [])

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
        // sx={{
        //   height: "300px",
        //   padding: "0 20px",
        //   display: "flex",
        //   flexDirection: "column",
        //   overflowY: "scroll",
        // }}
      >
        {chats.length !== 0 &&
          chats.map((chat, index) => <Message chat={chat} key={index} />)}
      </Box>
      <ChatInput message={message} setMessage={setMessage} onSend={onSend} />
    </Box>
  );
};

export default ChatBox;
