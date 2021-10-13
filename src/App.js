import React from "react";
import "./App.css";
import { Box, Chip, Container, Grid, Typography } from "@mui/material";

import Header from "./Components/Header";
import ChatBox from "./Components/ChatBox";

function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{width: "100%", padding: '0 !important'}}>

      <Grid
      container
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 4
      }}
      >
        <Grid item sx={{ paddingRight: 2 }} xs={8}>
        <iframe id="ytplayer" type="text/html" width="100%" height="100%"
  src="https://www.youtube.com/embed/NiHZUFLwEv0?autoplay=1&disablekb=1&modestbranding=1"
  frameborder="0" allowFullScreen></iframe>
        </Grid>
        <Grid item sx={{ }} xs={4}>
          <ChatBox />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
