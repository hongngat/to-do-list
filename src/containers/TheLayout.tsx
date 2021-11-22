import React from 'react';
import TheSidebar from './TheSidebar';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
import TheContent from './TheContent';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {Wrapper,Body} from './styled'
const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
function TheLayout(): JSX.Element {
    const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  return (
    <div className="default-layout">
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TheSidebar open={open} setOpen={setOpen} theme={theme} drawerWidth={drawerWidth}/>
      <Wrapper>
        <TheHeader setOpen={setOpen} />
        <Body>
          <Main open={open} style={{padding:"64px 0px 0px"}}>
            <TheContent />
          </Main>
        </Body>
        <TheFooter />
      </Wrapper>
      </Box>
    </div>
  );
}

export default TheLayout;
