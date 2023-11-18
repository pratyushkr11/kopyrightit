import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ClippedDrawer() {
  const drawerWidth = 240;
  const [userData, setUserData] = useState({ name: '' });

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      fetchUserDataFromBackend(userId);
    }
  }, []);

  const fetchUserDataFromBackend = (userId) => {

    axios.get(`https://kopyrightit-backend-zdfw.onrender.comapi/user/${userId}`)
      .then((response) => {
        setUserData({
          name: response.data.name,
        });
      })
      .catch((error) => {
        console.error('Error fetching user data: ', error);
      });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            background: '#A5B7FF',
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box m="auto" sx={{ overflow: 'auto', marginTop: '80px', textAlign: 'center' }}>
          <List>
            <AccountCircleIcon sx={{ width: 60, height: 60 }} />
            <Typography variant="h5">{userData.name}</Typography>
          </List>
          <Divider />
          <List>
            <ListItem>
              <Link to="/dashboard" style={{ color: '#000000' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/help" style={{ color: '#000000' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/settings" style={{ color: '#000000' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box component="main">
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}