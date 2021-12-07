import { styled } from '@mui/material/styles';

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
};
