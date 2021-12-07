import React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Context } from '../contexts/Account';
import { useNavigate } from 'react-router-dom';

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
      <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={onLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default DesktopMenu;
