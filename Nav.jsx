import { AppBar, Avatar,Badge,styled, Toolbar, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import NotificationIcon from '@mui/icons-material/NotificationsActive';
import React from 'react'
import { Box } from '@mui/system';
const StyledToolbar=styled(Toolbar)({
    display:'flex',
justifyContent:'space-between'
})

export const Nav = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
        <Typography variant='h5'> Plan Your trip</Typography>
        <Box sx={{ display:'flex' ,alignitems:'center',gap:'20px'}}>
        <Badge badgeContent={4} color="secondary">
  <MailIcon />
  </Badge>
  <Badge badgeContent={4} color="primary">
  <NotificationIcon sx={{gap:'20px'}}/>

  </Badge>
        
        
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/400"/>
            </Box>
        </StyledToolbar>
        
    
    </AppBar>
  )
}
