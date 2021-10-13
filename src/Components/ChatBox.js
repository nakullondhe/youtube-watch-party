import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Constants from "../Constants";
import ChatInput from "./ChatInput";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({}));

const ChatBox = () => {
  return (
    <Box sx={{ width: "100%", border: "1px solid gray" }}>
      <Box sx={{ backgroundColor: "#202020", padding: "10px 20px" }}>
        <Typography variant="h6" color="white">
          Chat
        </Typography>
      </Box>
      <Box sx={{ height: "300px", padding: '0 20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Message />
        <Message />
        <Message text="nikskssh"/>
      </Box>
      <ChatInput />
    </Box>
  );
};

export default ChatBox;
