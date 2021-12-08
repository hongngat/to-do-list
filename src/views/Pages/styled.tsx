import { styled } from '@mui/material/styles';
import bannerLogin from '../../assets/images/bannerLogin.jpg';
export const FormStyle = {
  Wrapper: styled('div')(() => ({
    height: '100vh',
  })),
  ImageLeft: styled('div')(({ bgr }: any) => ({
    background: `url(${bgr}) no-repeat center`,
    height: '100%',
    backgroundSize: 'cover',
  })),
  Logo: styled('div')(() => ({
    fontSize: '30px',
    color: '#8D6ECC',
    fontWeight: 'bold',
    padding: '20px 30px',
  })),
  Link: styled('a')(({ fontSize, color }: any) => ({
    textDecoration: 'none',
    color: color,
    fontSize: fontSize,
    cursor: 'pointer',
  })),
  FormBox: styled('div')(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '40%',
    background: '#fff',
    '@media (max-width: 768px)': {
      width: '80%',
    },
    '@media (max-width: 1199px) and (min-width:768px)': {
      width: '60%',
    },
  })),
  Box: styled('div')(() => ({
    boxShadow: '0 0 5px #ccc',
    padding: '30px 30px 60px',
  })),
  FormGroup: styled('div')(() => ({
    marginBottom: '15px',
    input: {
      height: '40px',
      background: '#EEEEEE',
      border: 'none',
      borderRadius: '5px',
      width: '100%',
      color: '#8D6ECC',
      '&:focus': {
        outline: '0',
        boxShadow: 'none',
      },
    },
  })),
  Title: styled('h5')(() => ({
    fontSize: '20px',
    color: '#8D6ECC',
    textTransform: 'uppercase',
    margin: '0px 0px 30px',
  })),
  Button: styled('button')(() => ({
    background: '#8d6ecc',
    color: '#fff',
    padding: '15px 20px',
    width: '100%',
    marginTop: '20px',
    display: 'block',
    border: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: '0',
      boxShadow: 'none',
    },
  })),
  FlexBetween: styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
  })),
  Paragraph: styled('p')(() => ({
    fontSize: '14px',
    color: '#8d6ecc',
    marginBottom: '15px',
  })),
  GridBox: styled('div')(() => ({
    height: '100%',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: '0',
      left: '0',
      width: '25%',
      height: '100%',
      background: `url(${bannerLogin}) no-repeat center`,
      backgroundSize: 'cover',
    },
    '@media (max-width: 768px)': {
      '&::before': {
        width: '100%',
      },
    },
    '@media (max-width: 1199px) and (min-width:768px)': {
      '&::before': {
        width: '32%',
      },
    },
  })),
};
