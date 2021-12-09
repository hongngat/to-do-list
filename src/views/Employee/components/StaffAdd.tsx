import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import * as Yup from 'yup';
import { postEmployee } from '../../../api/EmployeeAPI';
import FormComponent from '../../../components/Form';
import LoadingComponent from '../../../components/Loading';
import { useMutationAPI } from '../../../hook/QueryAPI';
import { ModalStyle } from '../../../themes/Modal';

function StaffAdd(props: any) {
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
  const phonenumberRex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  const { mutate, isLoading } = useMutationAPI(postEmployee, 'employeeLists');

  const validate = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    phonenumber: Yup.string()
      .required('Phone Number is required')
      .matches(phonenumberRex, 'Phone number isvalid'),
    email: Yup.string()
      .required('Email is required')
      .matches(emailRex, 'Email is invalid')
      .test({
        message: 'Email already exists',
        test: (value) =>
          props.data
            .map((i: any, k: any) => {
              return i.email;
            })
            .indexOf(value) < 0,
      }),
  });

  const onSubmit = async (fields: any) => {
    var today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const data = { ...fields, created_date: date };
    await mutate(data);
    props.onCloseAdd();
  };

  if (isLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <Modal open={props.isOpenAdd} onClose={props.onCloseAdd}>
        <Box sx={ModalStyle}>
          <h2 style={{ textAlign: 'left' }}>Add</h2>
          <FormComponent
            initialValues={{
              fullname: '',
              phonenumber: '',
              email: '',
              birthdate: '',
            }}
            validate={validate}
            onSubmit={onSubmit}
            fields={[
              { label: 'Full name', name: 'fullname', type: 'text' },
              { label: 'Your phone', name: 'phỏnenumber', type: 'text' },
              { label: 'Email', name: 'email', type: 'text' },
              { label: 'Birth Date', name: 'birthdate', type: 'text' },
            ]}
            buttonText="Submit"
          />
        </Box>
      </Modal>
    );
  }
}

export default StaffAdd;
