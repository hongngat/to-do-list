import React from 'react';
import { BoxStyle } from '../../styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LockClockIcon from '@mui/icons-material/LockClock';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <BoxStyle.Box>
      <List>
        <ListItem button component={Link} to="/personal-document">
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary="Personal Document" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LockClockIcon />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </BoxStyle.Box>
  );
};

export default Sidebar;
