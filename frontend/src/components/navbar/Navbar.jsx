import Menu from './Menu';
import ShortMenu from './ShortMenu';
import Box from '@mui/material/Box';
import {React, useState} from 'react';
import logo from '../../assets/logo.png'
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const drawerWidth = 240;
const shortDrawerWidth = 80

export default function Navbar({content}) {

  const [isBigMenu, setIsBigMenu] = useState(false)

  const changeMenu = () => {
    setIsBigMenu(!isBigMenu)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ marginBottom: '10px' }}>
            <IconButton onClick={changeMenu} sx={{marginRight:'30px', color:'white'}}>
                {isBigMenu ? <MenuOpenIcon/> : <MenuBookIcon/>}
            </IconButton>
          <img width='100px'  src={logo} />
          <Typography variant="h5" noWrap component="div">
            Qarat Online Academy (QOA Asim) 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu ? drawerWidth : shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isBigMenu ? drawerWidth : shortDrawerWidth, boxSizing: 'border-box' },
        }}
      >
      <Toolbar />
            {isBigMenu ? <Menu /> : <ShortMenu />} 
            {/* <Menu /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
            { content }
      </Box>
    </Box>
  );
}
