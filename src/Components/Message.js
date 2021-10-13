import { Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
  msg: {
    fontSize: '40px',
    marginLeft: 2
  }
})

const Message = ({text}) => {
  const classes = useStyles();

  return ( 
    <Box sx={{display: 'flex', alignItems: 'center', margin: '8px 0'}}>
      <Avatar sx={{width: 25, height: 25}} />
      <Typography color="gray" sx={{marginLeft: 2, marginRight: 1}}>Nik</Typography>
      <Typography color="white"  >{text}</Typography>
    </Box>
   );
}
 
export default Message;