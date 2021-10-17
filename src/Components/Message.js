import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const Message = ({chat}) => {

  return ( 
    <Box sx={{display: 'flex', alignItems: 'center', margin: '8px 0'}}>
      <Avatar sx={{width: 25, height: 25}} />
      <Typography color="gray" sx={{marginLeft: 2, marginRight: 1}}>{chat.name}</Typography>
      <Typography color="white"  >{chat.message}</Typography>
    </Box>
   );
}
 
export default Message;