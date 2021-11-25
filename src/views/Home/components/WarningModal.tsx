import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {style } from '../styled';
const WarningModal=(props:any)=>{
    const handleCloseError =()=>{
        props.setOpenError(false);
        props.setOpenAdd(true);
    }
    return(
        <Modal open={props.openError} onClose={handleCloseError}>
            <Box sx={style}>
              Tài khoản đã tồn tại
              <div className="btnSubmit">
                <button type="button" onClick={handleCloseError}>
                  Ok
                </button>
              </div>
            </Box>
          </Modal>
    )
}
export default WarningModal;