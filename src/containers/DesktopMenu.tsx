import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Context } from '../contexts/Account';
import { Link, useNavigate } from 'react-router-dom';

const DesktopMenu = (props: any) => {
  const menuId = 'primary-search-account-menu';
  const { onLogoutAccount } = useContext(Context);
  const navigate = useNavigate();
  const onLogout = () => {
    onLogoutAccount();
    navigate('/login');
  };
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.isMenuOpen}
      onClose={props.handleMenuClose}
    >
      <MenuItem>
        <Link style={{ color: '#000' }} to="/profile">
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={onLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default DesktopMenu;
