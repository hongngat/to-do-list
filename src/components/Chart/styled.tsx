import { styled } from '@mui/material/styles';

export const VictoryChartWrapper = {
  Box: styled('div')(() => ({
    '.VictoryContainer': {
      background: '#fff',
    },
  })),
};

export const NoteChartBox = {
  Box: styled('div')(() => ({
    margin: '20px 0px',
  })),
  Title: styled('h5')(() => ({
    fontSize: '14px',
    color: '#3C4B64',
    margin: '0',
    fontWeight: '500',
    marginBottom: '5px',
  })),
  Content: styled('div')(() => ({
    fontSize: '15px',
    color: '#3C4B64',
    margin: '0',
    fontWeight: 'bold',
    marginBottom: '5px',
    span: {
      marginLeft: '5px',
    },
  })),
  Color: styled('div')((props: any) => ({
    width: '70px',
    height: '30px',
    background: props.theme,
    margin: '0 auto',
  })),
};
