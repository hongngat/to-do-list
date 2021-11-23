import { borderRadius, textAlign } from '@mui/material/node_modules/@mui/system';
import { styled } from '@mui/material/styles';

export const FormGroup = styled('div')(({ theme }) => ({
    marginBottom:'20px',
    'input':{
      height:'35px',
      width:'100%',
      border:'1px solid #ccc',
      borderRadius:'3px',
      '&:focus':{
        outline:'none',
        boxShadow:'none',
        border:'1px solid #ccc',
      }
    },
    '.invalid-feedback':{
      color:'red',
      fontSize:'12px',
      textAlign:'left',
      marginTop:'10px'
    }
  }));
  export const Label = styled('label')(({ theme }) => ({
    display:'block',
    fontWeight:'bold',
    fontSize:'14px',
    textAlign:'left',
    marginBottom:'10px'
  }));
  export const TableBox = {
    Box :styled('div')(() => ({
      padding:'30px 20px',
      borderRadius:'5px',
      // border:'1px solid #ccc',
      width:'100%',
      background:'#fff'
    })),
    TableIcon:styled('div')(()=>({
      textAlign:'right',
      
    })),
    ButtonIcon:styled('button')(()=>({
      padding:'0px',
      border:'none',
      background:'transparent',
      cursor:'pointer',
      color:'#8D6ECC'
      
    }))
    
  }
  export const BoxStyle = styled('div')(() => ({
    padding:'30px 20px',
    borderRadius:'5px',
    width:'100%',
    background:'#fff',
    marginBottom:'30px'
  }))
  export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };