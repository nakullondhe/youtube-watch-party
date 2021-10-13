import React from "react";
import { Box } from "@mui/system";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";

const ChatInput = () => {
  return (
    <Box sx={{ padding: "10px", display: "flex",alignItems: 'center', backgroundColor: '#202020' }}>
      <TextField
        variant="standard"
        color="primary"
        inputProps={{ style: { color: "white", borderBottom: 'green'} }}
        fullWidth
        placeholder="say something..."
      />
      <IconButton>
        <SendIcon color="primary"/>
      </IconButton>
    </Box>
  );
};

export default ChatInput;
