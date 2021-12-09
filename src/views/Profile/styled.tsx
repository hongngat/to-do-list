import { styled } from '@mui/material/styles';
export const BoxStyle = {
  Box: styled('div')(({ padding }: any) => ({
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 0 30px 0 rgb(0 0 0 / 8%)',
    padding: padding,
  })),
};
export const ProfileWrapper = {
  Box: styled('div')(() => ({
    position: 'relative',
    padding: '0px 20px',
    overflow: 'auto',
    width: '100%',
  })),
  Link: styled('a')(({ color, fontsize }: any) => ({
    color: color,
    fontSize: fontsize,
    textDecoration: 'none',
    cursor: 'pointer',
  })),
};
export const ProfileNote = {
  Box: styled('div')(() => ({
    position: 'relative',
    marginBottom: '30px',
  })),
  List: styled('ul')(() => ({
    padding: '0',
    margin: '0',
  })),
  ListItem: styled('li')(() => ({
    padding: '20px',
    marginBottom: '10px',
    background: '#E9E3EF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })),
  Content: styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
  })),
};
export const Avatar = {
  Box: styled('div')(() => ({
    position: 'relative',
  })),
};
