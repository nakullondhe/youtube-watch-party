import React from "react";
import { Box } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({message, setMessage, onSend}) => {
  return (
    <Box sx={{ padding: "10px", display: "flex",alignItems: 'center', backgroundColor: '#202020' }}>
      <TextField
        variant="standard"
        color="primary"
        inputProps={{ style: { color: "white", borderBottom: 'green'} }}
        fullWidth
        placeholder="say something..."
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <IconButton onClick={onSend}>
        <SendIcon color="primary"/>
      </IconButton>
    </Box>
  );
};

export default ChatInput;
