import React from 'react'
import {Box, List, ListItemButton, ListItemIcon, ListItemText} from'@mui/material';
import { ListItem } from '@mui/material';
import { Accessibility, AirplanemodeActive,  AirplaneTicketRounded, Explore,  Info,  ListOutlined, Place } from '@mui/icons-material';


export const Menu = () => {
  return (
    <Box   marginTop={2}  flex={1}    >
        <Box position='fixed' >
       <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActive />
              </ListItemIcon>
              <ListItemText primary=" plan your travel" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListOutlined />
              </ListItemIcon>
              <ListItemText primary="Things do.." />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="explore" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Accessibility />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Place />
              </ListItemIcon>
              <ListItemText primary="places" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplaneTicketRounded/>
              </ListItemIcon>
              <ListItemText primary="Book ur tickets" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info/>
              </ListItemIcon>
              <ListItemText primary=" info" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
        
                </Box>
                
                
              )
            }









































































































































































































































































































































































             
             
                    
 
