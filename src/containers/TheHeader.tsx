import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  BoxAppBar,
} from './styled';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  setOpen?: any;
  drawerWidth?: any;
  theme?: any;
}

function TheHeader({ theme, open, setOpen, drawerWidth }: AppBarProps) {
  function handleDrawerOpen() {
    setOpen(true);
  }
  const userlogin: any = JSON.parse(
    localStorage.getItem('accountLogin') || '{}'
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <BoxAppBar
      position="fixed"
      theme={theme}
      open={open}
      drawerWidth={drawerWidth}
      style={{ backgroundColor: '#8D6ECC' }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <Link className="brand" to="/">
            My App
          </Link>
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
            <div style={{ fontSize: '16px', marginLeft: '5px' }}>
              {userlogin ? userlogin.fullname : null}
            </div>
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleProfileMenuOpen={handleProfileMenuOpen}
        userlogin={userlogin}
      />
      <DesktopMenu
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </BoxAppBar>
  );
}
export default TheHeader;
