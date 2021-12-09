import React, { useContext } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Context } from '../contexts/Account';
import { Link, useNavigate } from 'react-router-dom';
const MobileMenu = (props: any) => {
  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);
  const { onLogoutAccount } = useContext(Context);
  const navigate = useNavigate();
  const onLogout = () => {
    onLogoutAccount();
    navigate('/login');
  };
  return (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={props.handleMobileMenuClose}
    >
      <Link style={{ color: '#000' }} to="/profile">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>{props.userlogin ? props.userlogin.fullname : 'Profile'}</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={onLogout}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
