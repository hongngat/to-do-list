import React, { useState } from 'react';
import EmployeeList from './containers/EmployeeList';
import StaffAdd from './containers/StaffAdd';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { TableBox, style, BoxStyle } from './styled';
import StaffEdit from './containers/StaffEdit';
import { useQuery } from 'react-query';
import { getEmployee } from '../../api/EmployeeAPI';
import Loader from 'react-loader-spinner';
import Search from './containers/Search';
const Home = () => {
  const { data, isLoading } = useQuery('employeeLists', getEmployee);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [dataEditing, setDataEditing] = useState();
  const [searchForm, setSearchForm] = useState('');

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseError = () => {
    setOpenError(false);
    setOpenAdd(true);
  };

  const handleEdit = (i: any, x: any) => {
    setDataEditing(x);
    setOpenEdit(true);
  };

  const handleSearch = (searchForm: any) => {
    setSearchForm(searchForm);
  };
  if (isLoading) {
    return (
      <div
        style={{ position: 'fixed', top: '50%', left: '55%', transform: 'translate(-50%, -50%)' }}
      >
        <Loader type="ThreeDots" color="#CCC" height={30} />
      </div>
    );
  }

  return (
    <div className="pageContent home">
      <Container maxWidth="xl">
        <BoxStyle>
          <Search callbackSearchData={handleSearch} />
        </BoxStyle>
        <TableBox.Box>
          <TableBox.TableIcon>
            <TableBox.ButtonIcon onClick={handleOpenAdd}>
              <AddIcon />
            </TableBox.ButtonIcon>
          </TableBox.TableIcon>

          <StaffAdd
            setOpenError={setOpenError}
            openAdd={openAdd}
            setOpenAdd={setOpenAdd}
            data={data}
          />

          {dataEditing ? <StaffEdit setOpenEdit={setOpenEdit} openEdit={openEdit} dataEditing={dataEditing} /> : null}

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
            handleEdit={handleEdit}
            searchForm={searchForm}
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
                name: 'Ngày sinh',
                prop: 'birthdate',
              },
            ]}
          />
        </TableBox.Box>
      </Container>
    </div>
  );
};

export default Home;
