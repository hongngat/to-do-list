import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import StaffAdd from './components/StaffAdd';
import { Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TableBox, BoxStyle } from './styled';
import StaffEdit from './components/StaffEdit';
import { useQuery } from 'react-query';
import { getEmployee } from '../../api/EmployeeAPI';
import Search from './components/Search';
import useModal from '../../hook/Modal/useModal';
import LoadingComponent from 'components/Loading';
const Home = () => {
  const { data, isLoading } = useQuery('employeeLists', getEmployee);
  const [dataEditing, setDataEditing] = useState();
  const {
    isOpenAdd,
    onOpenAdd,
    onCloseAdd,
    isOpenEdit,
    onOpenEdit,
    onCloseEdit,
  } = useModal();
  const [searchForm, setSearchForm] = useState({
    staffcode: '',
    fullname: '',
    email: '',
  });

  const handleEdit = (i: any, x: any) => {
    setDataEditing(x);
    onOpenEdit();
  };

  if (isLoading) {
    <LoadingComponent />;
  }

  return (
    <div className="pageContent home">
      <Container maxWidth="xl">
        <BoxStyle>
          <Search setSearchForm={setSearchForm} searchForm={searchForm} />
        </BoxStyle>
        <TableBox.Box>
          <TableBox.TableIcon>
            <TableBox.ButtonIcon onClick={onOpenAdd}>
              <AddIcon />
            </TableBox.ButtonIcon>
          </TableBox.TableIcon>

          <StaffAdd isOpenAdd={isOpenAdd} onCloseAdd={onCloseAdd} data={data} />

          {dataEditing ? (
            <StaffEdit
              onCloseEdit={onCloseEdit}
              isOpenEdit={isOpenEdit}
              dataEditing={dataEditing}
            />
          ) : null}

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
