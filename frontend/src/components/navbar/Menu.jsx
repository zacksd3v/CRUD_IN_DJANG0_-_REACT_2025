import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MosqueIcon from '@mui/icons-material/Mosque';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import {Link, useLocation} from 'react-router';

export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation()
  const path    = location.pathname
  console.log(path);

  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          All Qarat Classes
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick} component={Link} to='/' selected={path === '/'}>
        <ListItemIcon>
          <MosqueIcon />
        </ListItemIcon>
        <ListItemText primary="All Halaqat" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <BeenhereIcon />
            </ListItemIcon>
            <ListItemText primary="Hafsu An Aseem" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <BeenhereIcon />
            </ListItemIcon>
            <ListItemText primary="Khalaf An Hamza" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <BeenhereIcon />
            </ListItemIcon>
            <ListItemText primary="Mus'ab ibn Umair" />
          </ListItemButton>

        </List>
      </Collapse>
    </List>

    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Creating Classes
        </ListSubheader>
      }
    >
        <ListItemButton component={Link} to='/create' selected={path === '/create'}>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Create Musaffah " />
        </ListItemButton>

    </List>

    </>
  );
}
