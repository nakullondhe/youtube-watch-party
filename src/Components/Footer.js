import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        color: "white",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        paddingBottom: 1,
        paddingTop: 1,
        backgroundColor: '#202020'
      }}
    >
      Made By Nakul Londhe
      <Box sx={{marginTop: 1}}>
      <Link href="https://github.com/nakullondhe" sx={{color: 'white'}}><GitHubIcon sx={{marginRight: 2}} /></Link>
      <Link href="https://www.linkedin.com/in/nakul-londhe" sx={{color: 'white'}}><LinkedInIcon /></Link>
      <Link href="https://www.instagram.com/nikstarr.js/" sx={{color: 'white'}}><InstagramIcon sx={{marginLeft: 2}} /></Link>
      </Box>
    </Box>
  );
};

export default Footer;
