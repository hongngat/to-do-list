import { Container, Grid } from '@mui/material';
import React from 'react';
import ProfileInfo from './components/ProfileInfo';
import Sidebar from './components/SideBar';

const Profile = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid lg={3}>
          <Sidebar />
        </Grid>
        <Grid lg={5}>
          <ProfileInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
