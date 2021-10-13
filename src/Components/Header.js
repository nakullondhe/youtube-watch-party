import React from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";
import yt_logo from "../Assets/yt_logo.png";

const useStyles = makeStyles((theme) => ({}));
//

const Header = () => {
  const classes = useStyles();
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
      <img
        src={yt_logo}
        alt=""
        style={{ height: "20px", marginLeft: "20px" }}
      />
      <Box sx={{display: 'flex', width: '40%'}}>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: "100%", backgroundColor: "#121212", marginRight: 1 }}
          inputProps={{ style: { color: "white" } }}
          placeholder="Search"
        />
      <Button variant="outlined">Add</Button>
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          Invite
        </Button>
        <Button variant="contained" color="error" sx={{ marginLeft: 2 }}>
          Close Room
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
