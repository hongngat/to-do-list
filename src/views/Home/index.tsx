import React, { useState } from 'react';
import EmployeeList from './containers/EmployeeList';
import StaffAdd from './containers/StaffAdd';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { TableBox } from './styled';
import StaffEdit from './containers/StaffEdit';
interface ValueData {
  data?: any;
  header?: any;
  handleRemove?: any;
}
function Home() {
  const employeeData = JSON.parse(localStorage.getItem('EmployeeList') || '{}');
  const [data, setData] = useState(employeeData);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [dataEditing, setDataEditing] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseError = () => {
    setOpenError(false);
    setOpen(true);
  };
  const callbackFunction = (childData: any) => {
    const dataVali = data.filter(
      (d: any) => d.fullname === childData.fullname || d.email === childData.email
    );
    if (dataVali.length > 0) {
      setOpenError(true);
      setOpen(false);
    } else {
      const updatedCarsArray: any = [...data, childData];
      setData(updatedCarsArray);
      localStorage.setItem('EmployeeList', JSON.stringify(updatedCarsArray));
      setOpen(false);
    }
  };

  const style = {
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
  const handleRemove = (i: any) => {
    const dataRemove: any = data.filter((row: any, j: any) => j !== i);
    localStorage.setItem('EmployeeList', JSON.stringify(dataRemove));
    setData(dataRemove);
  };
  const startEditing = (i: any, x: any) => {
    setDataEditing(x);
    setOpenEdit(true);
  };
  const callbackFunctionEdit = (fields: any) => {
     const dataEditing = data.map((item: any) => {return item.staffcode === fields.staffcode ? fields : item})
    setData(dataEditing);
    localStorage.setItem('EmployeeList', JSON.stringify(dataEditing));
    setOpenEdit(false);
  };
  return (
    <div className="pageContent home">
      <Container maxWidth="xl">
        <TableBox.Box>
          <TableBox.TableIcon>
            <TableBox.ButtonIcon onClick={handleOpen}>
              <AddIcon />
            </TableBox.ButtonIcon>
          </TableBox.TableIcon>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <StaffAdd callbackValue={callbackFunction} />
            </Box>
          </Modal>
          <Modal
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <StaffEdit callbackValueEdit={callbackFunctionEdit} dataEditing={dataEditing} />
            </Box>
          </Modal>
          <Modal open={openError} onClose={handleCloseError}>
            <Box sx={style}>
              Tài khoản đã tồn tại
              <div className="btnSubmit">
                <button type="button" onClick={handleCloseError}>
                  Ok
                </button>
              </div>
            </Box>
          </Modal>
          <EmployeeList
            data={data}
            handleRemove={handleRemove}
            startEditing={startEditing}
            header={[
              {
                name: 'Mã nhân viên',
                prop: 'staffcode',
              },
              {
                name: 'Họ và tên',
                prop: 'fullname',
              },
              {
                name: 'Số điện thoại',
                prop: 'phonenumber',
              },
              {
                name: 'Email',
                prop: 'email',
              },
              {
                name: '',
                prop: 'edit',
              },
              {
                name: '',
                prop: 'deleted',
              },
            ]}
          />
        </TableBox.Box>
      </Container>
    </div>
  );
}

export default Home;
