export const ModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0',
  boxShadow: '0 0 10px #8d6ecc',
  outline: '0',
  padding: '30px',
  '&:focus': {
    outline: '0',
    border: 'none',
  },
};
