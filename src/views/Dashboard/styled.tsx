import { styled } from '@mui/material/styles';

export const WrapperBox = {
  Box: styled('div')(() => ({
    borderRadius: '5px',
    width: '100%',
    background: '#fff',
    marginBottom: '30px',
    paddingBottom: '30px',
  })),
  Header: styled('div')(() => ({
    borderBottom: '1px solid #eeeeee',
    padding: '15px 15px 13px',
    display: 'flex',
    justifyContent: 'space-between',
    h5: {
      fontSize: '18px',
      margin: '0px',
      fontWeight: '500',
    },
  })),
};
export const InputStyle = {
  InputGroup: styled('div')(() => ({
    paddingLeft: '15px',
  })),
  Input: styled('input')(() => ({
    padding: '7px 10px',
    border: '1px solid #D8DBE0',
  })),
  Label: styled('label')(() => ({
    fontsize: '14px',
    color: '#768192',
    marginRight: '10px',
  })),
};
